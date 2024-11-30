import { useQuery } from "@tanstack/react-query";
import supabase from "../../lib/supabase";
import { CourseType } from "./types/course";
import { CourseCard } from "./Components/CourseCard";
import fetchCourses from "./services/fetchCourses";
import { Link } from "react-router-dom";

const CoursePage: React.FC = () => {
  const {
    data: courses = [],
    error,
    isLoading,
    refetch,
  } = useQuery<CourseType[]>({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  const handleCreateRecord = async () => {
    const title = prompt("Enter the title:");
    const body = prompt("Enter the body:");

    if (!title || !body) {
      alert("Title and body are required.");
      return;
    }

    try {
      const { error } = await supabase.from("course").insert([{ title, body }]);
      if (error) {
        throw error;
      }
      refetch(); // Refresh the data
    } catch (err) {
      console.error(err);
      alert("Error creating record: " + (err as Error).message);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div>
      <h1>Course</h1>
      <button
        onClick={handleCreateRecord}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Course
      </button>
      <div id="history" className="mt-4">
        {Array.isArray(courses) && courses.length > 0 ? (
          <div className="grid grid-cols-5 gap-x-4 gap-y-6">
            {courses.map((course: CourseType) => (
              <Link
                to={`/courses/${course.id}`}
                className="p-4 border rounded shadow-sm hover:shadow-lg"
              >
                <CourseCard key={course.id} course={course} />
              </Link>
            ))}
          </div>
        ) : (
          <p>No courses found.</p>
        )}
      </div>
    </div>
  );
};

export default CoursePage;
