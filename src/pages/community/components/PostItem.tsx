import { POST_CATEGORY_TYPE } from "src/constants/post";
import { Post } from "src/types/posts";
import React from "react";
import { formatDate } from "src/lib/dateUtils";
import Chips from "src/components/chips/Chips";
import { useNavigate } from "react-router-dom";

interface Props {
  post: Post;
}
function PostItem({ post }: Props) {
  const navigation = useNavigate();
  return (
    <li
      onClick={() => navigation(`/community/${post.id}`)}
      key={post.id}
      className="flex justify-between gap-x-6 py-5 cursor-pointer"
    >
      <div className="flex min-w-0 gap-x-4 ">
        <div className="flex flex-col items-start gap-4">
          <Chips>{POST_CATEGORY_TYPE[post.category].name}</Chips>
          <p>{post.content}</p>
          <p className="mt-1 truncate text-xs/5 text-gray-500">{post.member.user_name}</p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="mt-1 text-xs/5 text-gray-500">
          작성일 : <time dateTime={post.created_at}>{formatDate(post.created_at, "YYYY.MM.DD")}</time>
        </p>
      </div>
    </li>
  );
}

export default PostItem;
