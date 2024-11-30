import supabase from "../../../lib/supabase";
import { CourseType } from "../types/course";

async function fetchCourses(): Promise<CourseType[]> {
  const { data, error } = await supabase.from("course").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data || [];
}

export default fetchCourses;
