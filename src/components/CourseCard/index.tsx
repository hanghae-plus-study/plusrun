import { CourseType } from "../../pages/course/types/course";

export const CourseCard: React.FC<{ course: CourseType }> = ({ course }) => (
  <div className="p-4 rounded shadow-sm hover:shadow-lg h-full ">
    {course.thumbnail && (
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-32 object-cover mt-2 rounded"
      />
    )}
    <h2 className="text-lg font-semibold h-14 text-ellipsis overflow-hidden">
      {course.title}
    </h2>
    <p className="text-gray text-sm">{course.instructors}</p>
    <p className="text-blue font-bold">{`₩${course.price}`}</p>
    <span className="text-black bg-pink p-1 text-xs rounded-sm">{`+${course.student_count}명`}</span>
  </div>
);
