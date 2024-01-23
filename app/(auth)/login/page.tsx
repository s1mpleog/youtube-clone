import LoginForm from "@/components/Auth/Login/LoginForm";

export default function LoginPage() {
  return (
    <div>
      <div className="flex items-center my-4 justify-center">
        <h1 className="text-3xl sm:text-4xl font-medium text-center">
          Welcome back to YouTube
        </h1>
      </div>
      <LoginForm />
    </div>
  );
}
