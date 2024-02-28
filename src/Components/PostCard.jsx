import React from "react";
import { fileService } from "../Appwrite/index";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  const { $id, title, featuredImage } = post;
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg p-2 ">
        <Link to={`/post/${$id}`}>
          <div className="w-full justify-center">
            <img
              className="rounded-lg"
              src={fileService.getFilePreview(featuredImage)}
              alt={title}
            />
          </div>
          <h1 className="text-xl font-bold text-center">{title}</h1>
        </Link>
      </div>
    </>
  );
}
