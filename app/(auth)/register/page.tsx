import RegisterForm from "@/components/Auth/Register/RegisterForm";

export default function RegisterPage() {
  return (
    <div>
      <div className="flex items-center my-4 justify-center">
        <h1 className="text-3xl sm:text-4xl font-medium text-center">Welcome to YouTube</h1>
      </div>
      <RegisterForm />
    </div>
  );
}
