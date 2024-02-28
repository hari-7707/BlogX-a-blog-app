import React, { useEffect } from "react";
import { PostCard } from "../Components";
import { databaseService } from "../Appwrite";
export default function AllPosts() {
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    databaseService
      .getPosts([
        /* can write specific query to get required posts */
      ])
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      });
  }, []);
  return (
    <div className="flex justify-start items-center  flex-wrap w-full p-3">
      {posts.map((post) => (
        <PostCard post={post}></PostCard>
      ))}
    </div>
  );
}
