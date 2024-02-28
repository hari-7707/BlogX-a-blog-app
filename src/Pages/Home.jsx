import React, { useEffect, useState } from "react";
import { databaseService } from "../Appwrite";
import { PostCard } from "../Components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const status = useSelector((state) => {
    return state.authen.status;
  });
  useEffect(() => {
    if (status) {
      databaseService.getPosts().then((posts) => {
        console.log(posts);
        if (posts) {
          setPosts(posts.documents);
        }
        if (posts.length === 0) {
          navigate("/login");
        }
      });
    } else {
      navigate("/login");
    }
  }, [status]);

  return (
    <div className="flex justify-start flex-wrap w-full p-3 min-h-screen">
      {posts.map((post) => (
        <PostCard post={post}></PostCard>
      ))}
    </div>
  );
}
