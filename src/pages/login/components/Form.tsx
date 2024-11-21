import React, { ReactNode } from "react";

interface AuthFormProps {
  title: string;
  children: ReactNode;
  onSubmit: (data: any) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ title, onSubmit, children }) => {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="my-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">{title}</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        {children}
      </form>
    </div>
  );
};

export default AuthForm;
