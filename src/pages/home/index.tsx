import { CourseCard } from "src/components/CourseCard/";
import banner from "src/assets/banner.svg";
import { useCourse } from "../course/services/useCourse";
import CourseList from "./Components/Courselist";

function HomePage() {
  const { filteredCourses } = useCourse();

  return (
    <div>
      <img src={banner} alt="banner" className="w-full h-96 object-cover" />
      <div className="my-0 mx-auto w-4/5">
        <header className="font-bold text-xl my-5">
          인기 강의를 구경해 보세요!
        </header>
        <CourseList courses={filteredCourses} />
      </div>
    </div>
  );
}

export default HomePage;
