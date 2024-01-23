import { auth } from "@/auth"
import LogoutButton from "@/components/LogoutButton"
export default async function UserPage() {
    const session = await auth()
  return (
    <div>
        {JSON.stringify(session)}
        <LogoutButton />
    </div>
  )
}
