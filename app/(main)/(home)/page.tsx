import Filter from "@/components/Home/Filter/Filter";
import HomeVideos from "@/components/Home/Videos/HomeVideos";

export default async function Home() {
  return (
    <main className="ml-[280px]">
      <Filter />
      <HomeVideos />
    </main>
  )
} 
