import UserIcon from "@/public/assets/icons/user-icon.svg";

import css from "./index.module.css";
import { NoAuthorizedContent } from "./no-authorized-content";

export const AuthButton = () => {
  return (
    <>
      <div className={css.pcVersion}>
        <UserIcon className={css.icon} />
        <NoAuthorizedContent />
      </div>
    </>
  );
};
