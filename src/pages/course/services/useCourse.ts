import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { CourseType } from "../types/course";
import fetchCourses from "../services/fetchCourses";
import { filterCourses, sortCourses } from "../services/courseService";

export const useCourse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState<CourseType[]>([]);
  const [sortOption, setSortOption] = useState<"latest" | "popular" | "">("");

  const {
    data: courses = [],
    error,
    isLoading,
  } = useQuery<CourseType[]>({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  useEffect(() => {
    setFilteredCourses(courses);
  }, [courses]);

  const applyFilter = () => {
    const filtered = filterCourses(courses, searchTerm);
    const sorted = sortCourses(filtered, sortOption);
    setFilteredCourses(sorted);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleSortChange = (option: "latest" | "popular" | "") => {
    setSortOption(option);
    const sorted = sortCourses(filteredCourses, option);
    setFilteredCourses(sorted);
  };

  useEffect(() => {
    applyFilter();
  }, [sortOption]);

  return {
    searchTerm,
    filteredCourses,
    sortOption,
    isLoading,
    error,
    handleSearchChange,
    handleSortChange,
    applyFilter,
  };
};
