// components/CourseList.tsx
import { CourseCard } from "src/components/CourseCard";
import { CourseType } from "src/pages/course/types/course";

interface CourseListProps {
  courses: CourseType[];
}

const CourseList = ({ courses }: CourseListProps) => {
  return (
    <div className="flex justify-between">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
