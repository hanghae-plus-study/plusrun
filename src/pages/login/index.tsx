import Input from "../../components/input/Input";
import AuthForm from "./components/Form";
import useLoginForm from "./services/useLoginForm";

function LoginPage() {
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
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-red  py-3.5 text-base/6 font-extrabold text-white shadow-sm hover:bg-purple focus-visible:outline  focus-visible:outline-purple"
        >
          로그인
        </button>
      </div>
      {!!error && <span className="text-sm/6 font-medium text-red">{error}</span>}
    </AuthForm>
  );
}
export default LoginPage;
