import { FC } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import { Input } from "@lib/atoms";

const Hero: FC = () => {
  return (
    <>
      <h1
        css={css`
          font-size: 4.5em;
          font-weight: 800;
          width: 540px;
          line-height: 136%;
          color: ${Colors.gray900};
          margin: 0;
        `}
      >
        Get your own OctoProfile
      </h1>
      <p
        css={css`
          font-size: 1.125em;
          width: 540px;
          margin: 0.75em 0;
          color: ${Colors.gray900};
        `}
      >
        A nicer look at your GitHub profile and repositories. With data
        visualizations of your languages and stars.
      </p>
      <Input placeholder="Your GitHub username" />
    </>
  );
};

export { Hero };
