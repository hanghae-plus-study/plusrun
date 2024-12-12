import { CourseCard } from "../../components/CourseCard";
import { Link } from "react-router-dom";
import { useCourse } from "./services/useCourse";

const CoursePage: React.FC = () => {
  const {
    searchTerm,
    filteredCourses,
    sortOption,
    isLoading,
    error,
    handleSearchChange,
    handleSortChange,
    applyFilter,
  } = useCourse();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      applyFilter();
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h1>Courses</h1>
      <div className="flex items-center justify-between my-4 ">
        <input
          type="text"
          placeholder="강의명 검색"
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-4/5 border rounded p-2"
        />
        <select
          value={sortOption}
          onChange={(e) =>
            handleSortChange(e.target.value as "latest" | "popular" | "")
          }
          className="border rounded p-2"
        >
          <option value="">정렬 순서</option>
          <option value="latest">최신순</option>
          <option value="popular">인기순</option>
        </select>
      </div>

      <div id="history" className="mt-4">
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-5 gap-x-4 gap-y-6">
            {filteredCourses.map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="rounded shadow-sm hover:shadow-lg"
              >
                <CourseCard course={course} />
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
