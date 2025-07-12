import UserIcon from "@/public/assets/icons/user-icon.svg";

import css from "./index.module.css";
import { NoAuthorizedContent } from "./no-authorized-content";

type AuthButtonProps = {
  className?: string;
};

export const AuthButton = ({ className }: AuthButtonProps) => {
  return (
    <div className={className}>
      <div className={css.pcVersion}>
        <UserIcon className={css.icon} />
        <NoAuthorizedContent />
      </div>
    </div>
  );
};
