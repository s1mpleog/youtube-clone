import Navbar from "@/components/Home/Navbar/Navbar";
import HomeSidebar from "@/components/Home/Sidebar/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <nav>
        <Navbar />
      </nav>
      <aside>
        <HomeSidebar />
      </aside>
      {children}
    </main>
  );
}
