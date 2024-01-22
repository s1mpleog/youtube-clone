import { Icons } from "@/components/Icons";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <div className="text-white pt-4 mx-5 ml-[280px]">
      <div className="flex items-center justify-between">
        <div></div>
        <div className="flex items-center justify-center">
          <Input
            placeholder="search"
            className="text-gray-200 rounded-[1px] border-muted-foreground w-[500px]"
          />
          <div className="bg-[#424242] cursor-pointer h-10 w-10 flex items-center justify-center rounded-[5px]">
            <Icons.search className="" />
          </div>
        </div>
        <div className="flex gap-2">
          <div>Notification</div>
          <div>user profile</div>
        </div>
      </div>
    </div>
  );
}
