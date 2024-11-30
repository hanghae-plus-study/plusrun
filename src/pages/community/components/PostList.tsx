import apiClient from "src/services/apiClient";
import { Posts } from "@/src/types/posts";
import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";

function PostList() {
  const [posts, setPosts] = useState<Posts>([]);
  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    try {
      const response = await apiClient.get<Posts>("/community_posts?select=*,member:members(user_name)");
      setPosts(response);
    } catch (error) {
      setPosts([]);
    }
  }

  if (!posts) {
    return <div>목록없음</div>;
  }

  return (
    <ul className="divide-y divide-gray-100">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
}

export default PostList;
