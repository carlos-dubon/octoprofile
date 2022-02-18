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
      <h1
        css={css`
          font-size: 2rem;
        `}
      >
        Logo
      </h1>
      <div>Links</div>
    </div>
  );
};

export { Header };
