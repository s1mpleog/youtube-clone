import { Card } from "@/components/ui/card";
import Image from "next/image";

interface VideoCardProps {
  title: string;
  channelName: string;
  views?: string;
  uploadedAt?: string;
  poster: string;
  userImage: string;
}

export default function VideoCard({
  channelName,
  poster,
  title,
  uploadedAt,
  views,
  userImage,
}: VideoCardProps) {
  return (
    <Card className="w-[350 mx-5 rounded-md cursor-pointer bg- relative dark border-none text-white">
      <div>
        <Image
          className="rounded-md hover:rounded-none transition-all duration-200 fade-in object-cover"
          src={poster}
          width={350}
          height={200}
          alt="poster"
        />
      </div>
      <div>
        <div className="flex flex-col items-start mx- mt-4 justify-center">
          <div className="flex items-start mx-3 justify-start gap-3">
            <Image src={userImage} width={50} height={50} alt="userImage" />
            <div className="flex flex-col">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-xs mt-2 text-muted-foreground">
                {channelName}
              </p>
              <div className="flex mb-2 items-start mt-2 text-muted-foreground text-sm gap-2 justify-start">
                <p>{views}</p>
                <p>{uploadedAt}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
