import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { PersonIcon } from "@radix-ui/react-icons";
import { userDataType } from "@/types";
import PublicDropdown from "./PublicDropdown";
import AuthenticatedDropdown from "./AuthenticatedDropdown";

interface ProfileDropdownProps {
  nav: (arg: string) => void;
  user: userDataType | null;
  signOut: () => void;
}

const ProfileDropdown = ({ nav, user, signOut }: ProfileDropdownProps) => {
  return (
    <HoverCard openDelay={50} closeDelay={50}>
      <HoverCardTrigger asChild>
        <PersonIcon
          onClick={() => nav(user ? "/profile" : "/login")}
          className="h-6 w-6 cursor-pointer hover:scale-[110%]"
        />
      </HoverCardTrigger>
      <HoverCardContent className="p-0 w-36">
        {user ? (
          <AuthenticatedDropdown nav={nav} signOut={signOut} />
        ) : (
          <PublicDropdown nav={nav} />
        )}
      </HoverCardContent>
    </HoverCard>
  );
};

export default ProfileDropdown;
