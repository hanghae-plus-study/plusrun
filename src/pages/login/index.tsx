import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import AuthForm from "./components/Form";
import useLoginForm from "./services/useLoginForm";

function LoginPage() {
  const navigation = useNavigate();
  const { handleSubmit, register, onSubmit, formError, validationRules, error } = useLoginForm();
  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)} title="로그인">
      <Input {...register("email", validationRules.email)} label="이메일" error={formError.email?.message} />
      <Input
        {...register("password", validationRules.password)}
        type="password"
        label="비밀번호"
        error={formError.password?.message}
      />
      <div className="space-y-4">
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-red  py-3.5 text-base/6 font-extrabold text-white shadow-sm hover:bg-red-800 focus-visible:outline  "
        >
          로그인
        </button>
        <button
          onClick={() => navigation("/signup")}
          type="button"
          className="flex w-full justify-center rounded-md border border-red bg-white  text-red py-3.5 text-base/6 font-extrabold shadow-sm hover:bg-gray-100 focus-visible:outline "
        >
          회원가입
        </button>
      </div>
      {!!error && <span className="text-sm/6 font-medium text-red">{error}</span>}
    </AuthForm>
  );
}
export default LoginPage;
