import { useForm, SubmitHandler } from "react-hook-form";
import supabase from "../../../lib/supabase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthError } from "@supabase/supabase-js";
import { useAuthStore } from "../../../store/useAuthStore";

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
  const { setUserEmail, setUserName } = useAuthStore();
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
      const user = data.user;

      if (user) {
        const { data: userInfo, error: userInfoError } = await supabase.auth.getUser();

        if (userInfoError || !userInfo.user) {
          throw new Error("사용자 정보를 가져오는 데 실패했습니다.");
        }

        if (user?.user_metadata) {
          setUserName(user.user_metadata.first_name);
        }
        const { email } = userInfo.user;
        setUserEmail(email!);
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
