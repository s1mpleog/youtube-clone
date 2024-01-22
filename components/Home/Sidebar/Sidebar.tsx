import { Icons } from "@/components/Icons";
import { Logo } from "@/components/Logo";
import Link from "next/link";

export default function HomeSidebar() {
  const routes = [
    {
      name: "Home",
      href: "/",
      icon: Icons.home,
    },
    {
      name: "Subscription",
      href: "/subscription",
      icon: Icons.subscription,
    },
  ];
  return (
    <div className="flex flex-col text-gray-400 w-[270px] items-start px-10 justify-start bg-[#212121] min-h-screen fixed top-0">
      <div>
        <Logo href="/" />
      </div>
      <div className="border-b border-muted-foreground">
        {routes.map((route) => (
          <div key={route.name}>
            <Link
              className="flex items-center justify-start mb-10 gap-3"
              href={route.href}
            >
              <route.icon />
              {route.name}
            </Link>
          </div>
        ))}
      </div>
      <div>TODO: Subscription and watch later.</div>
    </div>
  );
}
