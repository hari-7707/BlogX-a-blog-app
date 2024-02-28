import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "./index";
import databaseService from "../Appwrite/DatabaseService";
import fileService from "../Appwrite/FileService";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function PostForm({ post }) {
  const { register, watch, handleSubmit, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "content",
        status: post?.status || "active",
      },
    });
  const navigate = useNavigate();
  const userData = useSelector((state) => {
    return state.authen.userData;
  });

  const onSubmit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await fileService.uploadFile(data.image[0])
        : null;
      if (file) {
        fileService.deleteFile(post.featuredImage);
      }
      const dbPost = await databaseService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = data.image[0]
        ? await fileService.uploadFile(data.image[0])
        : null;
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await databaseService.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^\w\s]/gi, "-")
        .replace(/\s+/gi, "-");
    }
    return "";
  }, []);

  // React.useEffect(() => {
  //   const subscription = watch((data, { name }) => {
  //     if (name === "title") {
  //       setValue("slug", slugTransform(data.title), { shouldValidate: true });
  //     }
  //   });

  //   return subscription.unsubscribe();
  // }, [watch, slugTransform, setValue]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap m-5 justify-center items-center"
      >
        <div className="w-full sm:w-full md:w-3/4 lg:w-1/2 px-2 flex flex-col justify-center items-center">
          <Input
            placeholder="Title"
            className="outline-none px-2 py-1 h-12 rounded-md  w-full focus:bg-orange-100 shadow-md text-lg mb-2 text-center"
            {...register("title", { required: true })}
            onInput={(e) => {
              setValue("slug", slugTransform(e.currentTarget.value), {
                shouldValidate: true,
              });
            }}
          ></Input>
          <Input
            placeholder="Slug"
            className="outline-none px-2 py-1 h-12 rounded-md focus:bg-orange-100 shadow-md text-lg mb-2 text-center w-full"
            {...register("slug", { required: true })}
          ></Input>
          <RTE
            control={control}
            name="content"
            defaultValue={getValues("content")}
          ></RTE>

          <Input
            type="file"
            className=" text-lg rounded-md outline-none border-none h-12 my-2  pt-2 px-2 shadow-md w-full"
            accept="image/png image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
          ></Input>
          <Select
            options={["active", "inactive"]}
            className="outline-none px-2 py-1 w-full h-12 rounded-md focus:bg-orange-100 shadow-md text-xl mb-2 text-center"
            {...register("status", { required: true })}
          ></Select>
          <Button
            type="submit"
            className=" outline-none bg-orange-600 m-3 w-3/4 h-12 rounded-md  shadow-md text-white hover:bg-orange-700 focus:bg-orange-700"
          >
            {post ? "Update" : "Submit"}
          </Button>
        </div>
      </form>
    </>
  );
}
