import { useForm, SubmitHandler } from "react-hook-form";
import supabase from "../../../lib/supabase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import supabase from "../../../lib/supabase";

type LoginFormInputs = {
  email: string;
  password: string;
};

const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const [serverError, setServerError] = useState<string | null>(null);
  const navigate = useNavigate();
  const validationRules = {
    email: {
      required: "이메일을 입력해주세요.",
      minLength: {
        value: 10,
        message: "이메일을 확인해주세요.",
      },
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "이메일을 확인해주세요.",
      },
    },
    password: {
      required: "비밀번호를 입력해주세요.",
      minLength: {
        value: 5,
        message: "비밀번호는 최소 5글자 입니다.",
      },
    },
  };
  // 검증 규칙 설정

  // 폼 제출 핸들러
  const onSubmit: SubmitHandler<LoginFormInputs> = async (formData) => {
    setServerError(null);

    const { error, data } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setServerError(error.message);
    }
    if (data) {
      navigate("/");
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

export default useLoginForm;
