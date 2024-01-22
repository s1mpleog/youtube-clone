import VideoCard from "@/components/VideoCard";
import axios from "axios";

export default async function HomeVideos() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  const data = res.data;
  return (
    <div className="grid grid-cols-5 gap-y-10 gap-x-1">
      {data.map((item: any) => (
        <VideoCard
          key={item.id}
          poster="/images/banner.jpg"
          userImage="/images/user.png"
          title="Build a Livestream App With Next.js | Twitch Clone"
          channelName="Code with antonio" 
          uploadedAt="1 months ago"
          views="29K"
        />
      ))}
    </div>
  );
}
