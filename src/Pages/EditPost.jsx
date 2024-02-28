import React, { useState } from "react";
import { PostForm } from "../Components";
import { databaseService } from "../Appwrite";
import { useParams, useNavigate } from "react-router-dom";

export default function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (slug) {
      databaseService.getPost(slug).then(
        (post) => {
          if (post) {
            setPost(post);
          } else {
            console.log("error");
            navigate("/");
          }
        },
        [slug, navigate]
      );
    }
  });
  return post ? (
    <div className="py-8">
      <PostForm post={post}></PostForm>
    </div>
  ) : null;
}
