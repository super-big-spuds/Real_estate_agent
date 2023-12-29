import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-400 ">
      <div className="p-20 bg-slate-100 rounded-xl">
        <h1>登入</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
