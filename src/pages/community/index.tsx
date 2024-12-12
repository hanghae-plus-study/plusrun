import { useNavigate } from "react-router-dom";
import PostList from "./components/PostList";
import Button from "src/components/button/button";

function CommunityPage() {
  const navigation = useNavigate();

  return (
    <div className=" grid justify-items-stretch mt-10 mx-auto  w-3/6">
      <h1 className="inline-block mb-2 text-3xl font-extrabold tracking-tigh">
        Community Desk
      </h1>
      <p className="mb-4 text-lg">필요한 모든 것을 공유하고 물어보세요.</p>
      <Button
        className="justify-self-end"
        variant="danger"
        size="medium"
        onClick={() => navigation("/community/posting")}
      >
        글쓰기
      </Button>
      <PostList />
    </div>
  );
}

export default CommunityPage;
