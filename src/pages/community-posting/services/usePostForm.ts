import { useForm, SubmitHandler } from "react-hook-form";
import supabase from "../../../lib/supabase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthError } from "@supabase/supabase-js";
import { CategoryType } from "src/types/posts";

type PostFormInputs = {
  title: string;
  content: string;
  category: CategoryType;
};

const usePostForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormInputs>();
  const [serverError, setServerError] = useState<string | null>(null);
  const validationRules = {
    title: {
      required: "제목을 입력해주세요.",
      minLength: {
        value: 5,
        message: "제목을 최소 5글자 이상 입력해주세요.",
      },
      maxLength: {
        value: 20,
        message: "제목을 최대 20글자 이상 입력해주세요.",
      },
    },
    content: {
      required: "내용을 입력해주세요.",
      minLength: {
        value: 5,
        message: "내용은 최소 5글자 이상 입력해주세요.",
      },
    },
  };

  const onSubmit: SubmitHandler<PostFormInputs> = async (formData) => {
    try {
      setServerError(null);
      // TODO : rest api로 변경하기
      const userInfo = await supabase.auth.getUser();
      const { error, status } = await supabase.from("community_posts").insert([
        {
          author_id: userInfo.data.user?.id,
          title: formData.title,
          content: formData.content,
          category: formData.category,
        },
      ]);

      if (error) {
        setServerError(error.message);
      }
      if (status === 201) {
        navigate("/community");
      }
    } catch (error) {
      if (error instanceof AuthError) {
        setServerError(error.message);
        return;
      }
      toast("오류가 발생했습니다.");
    }
  };

  return {
    register,
    handleSubmit,
    formError: errors,
    onSubmit,
    validationRules,
    error: serverError,
  };
};

export default usePostForm;
