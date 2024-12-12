import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from "src/services/apiClient";
import { Post } from "src/types/posts";

function CommunityPostDetailPage() {
  const { id } = useParams();

  const navigation = useNavigate();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (!id) return;
    getCountries(id);
  }, [id]);

  async function getCountries(id: string) {
    try {
      const response = await apiClient.get<Post[]>(`/community_posts?id=eq.${id}`);
      setPost(response[0]);
    } catch (error) {
      setPost(null);
    }
  }

  if (!post) {
    <p className="text-gray-700 mb-4">{"오류!!"}</p>;
  }

  return (
    <div className="bg-gray-50 py-10 mt-30 justify-center justify-items-center ">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-xl font-bold text-gray-800 mb-4">{post?.title}</h1>
        <p className="text-gray-700 mb-4">{post?.content}</p>
      </div>
      <div className="flex gap-4 justify-end max-w-3xl mx-auto">
        <button onClick={() => navigation(-1)} className="text-sm  text-gray-700 px-4 py-2">
          뒤로가기
        </button>
      </div>
    </div>
  );
}

export default CommunityPostDetailPage;
