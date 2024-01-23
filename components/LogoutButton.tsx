import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  const onSubmit = async () => {
    "use server";
    await signOut();
  };
  return (
    <form action={onSubmit}>
      <Button type="submit" variant="link">
        Logout
      </Button>
    </form>
  );
}
