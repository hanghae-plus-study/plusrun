import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchCourseDetails from "../../services/fetchCourseDetails";

const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: course,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["course", id],
    queryFn: () => fetchCourseDetails(id!),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  if (!course) return <p>Course not found.</p>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseDetailPage;
