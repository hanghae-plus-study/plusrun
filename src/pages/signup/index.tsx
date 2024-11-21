import Input from "../../components/input/Input";
import AuthForm from "../login/components/Form";
import useSignupForm from "./services/useSignupForm";

function SignupPage() {
  const { handleSubmit, register, onSubmit, formErros, validationRules, error } = useSignupForm();

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)} title="회원가입">
      <Input {...register("name", validationRules.name)} label="이름" error={formErros.name?.message} />
      <Input {...register("email", validationRules.email)} label="이메일" error={formErros.email?.message} />
      <Input
        {...register("password", validationRules.password)}
        type="password"
        label="비밀번호"
        error={formErros.password?.message}
      />
      <Input
        {...register("confirmPassword", validationRules.confirmPassword)}
        type="password"
        label="비밀번호 확인"
        error={formErros.confirmPassword?.message}
      />
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-red  py-3.5 text-base/6 font-extrabold text-white shadow-sm hover:bg-purple focus-visible:outline  focus-visible:outline-purple"
        >
          회원가입
        </button>
      </div>
      {!!error && <span className=" text-sm/6 font-medium text-red">{error}</span>}
    </AuthForm>
  );
}
export default SignupPage;
