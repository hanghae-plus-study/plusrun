import { CourseType } from "../../types/course";

export const CourseCard: React.FC<{ course: CourseType }> = ({ course }) => (
  <div className="p-4 border rounded shadow-sm hover:shadow-lg">
    <h2 className="text-lg font-semibold">{course.title}</h2>
    <p className="text-gray-600">{course.instructors}</p>
    {course.thumbnail && (
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-32 object-cover mt-2 rounded"
      />
    )}
  </div>
);
