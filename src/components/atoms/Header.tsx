import { FC } from "react";
import { css } from "@emotion/react";

const Header: FC = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <div>Navigation</div>
      <div>Logo</div>
      <div>Links</div>
    </div>
  );
};

export { Header };
