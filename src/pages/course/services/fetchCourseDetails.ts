import supabase from "../../../lib/supabase";
import { CourseType } from "../types/course";

const fetchCourseDetails = async (courseId: string): Promise<CourseType> => {
  const { data, error } = await supabase
    .from("course")
    .select("*")
    .eq("id", courseId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default fetchCourseDetails;
