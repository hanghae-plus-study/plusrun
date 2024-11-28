import { useForm, SubmitHandler } from "react-hook-form";
import supabase from "../../../lib/supabase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthError } from "@supabase/supabase-js";

type LoginFormInputs = {
  email: string;
  password: string;
};

const useLoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const [serverError, setServerError] = useState<string | null>(null);
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

  const onSubmit: SubmitHandler<LoginFormInputs> = async (formData) => {
    try {
      setServerError(null);

      const { error, data } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setServerError(error.message);
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
    formError: errors,
    onSubmit,
    validationRules,
    error: serverError,
  };
};

export default useLoginForm;
