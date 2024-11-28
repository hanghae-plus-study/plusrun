import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import supabase from "../../../lib/supabase";
import { toast } from "react-toastify";
import { AuthError } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

type SignupFormInputs = {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
};

const useSignupForm = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();
  const [serverError, setServerError] = useState<string | null>(null);
  const navigate = useNavigate();

  const passwordValue = watch("password");

  const validationRules = {
    email: {
      required: "이메일을 입력해주세요.",
      minLength: {
        value: 10,
        message: "이메일을 확인해주세요.",
      },
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // 이메일 패턴
        message: "이메일을 확인해주세요.",
      },
    },
    password: {
      required: "비밀번호를 입력해주세요.",
      minLength: {
        value: 5,
        message: "비밀번호는 최소 5글자 입니다.",
      },
      pattern: {
        value: /^[a-zA-Z0-9]+$/,
        message: "비밀번호는 숫자 또는 영문자만 사용가능합니다. ",
      },
    },
    confirmPassword: {
      required: "비밀번호 확인을 입력해주세요.",
      validate: (value: string) => value === passwordValue || "비밀번호가 일치하지 않습니다.",
    },
    name: {
      required: "이름을 입력해주세요.",
    },
  };

  const onSubmit: SubmitHandler<SignupFormInputs> = async (formData) => {
    try {
      setServerError(null);

      const { error, data } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setServerError(error?.message);
      }
      if (data.session) {
        navigate("/");
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
    formErros: errors,
    onSubmit,
    validationRules,
    error: serverError,
  };
};

export default useSignupForm;
