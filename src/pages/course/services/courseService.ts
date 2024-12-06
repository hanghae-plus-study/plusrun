import supabase from "../../../lib/supabase";
import { CourseType } from "../types/course";

export const fetchCourses = async (): Promise<CourseType[]> => {
  const { data, error } = await supabase.from("courses").select("*");
  if (error) throw error;
  return data || [];
};

export const filterCourses = (
  courses: CourseType[],
  searchTerm: string
): CourseType[] => {
  if (!searchTerm.trim()) return courses;
  return courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const sortCourses = (
  courses: CourseType[],
  sortOption: "latest" | "popular" | ""
): CourseType[] => {
  if (sortOption === "latest") {
    return [...courses].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
  if (sortOption === "popular") {
    return [...courses].sort((a, b) => b.student_count - a.student_count);
  }
  return courses;
};
