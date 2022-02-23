import { FC } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";

interface Props {
  touched?: boolean;
  errorMessage?: string;
}

const ErrorMsg: FC<Props> = ({ touched, errorMessage }) => {
  const errorMsgStyles = css`
    font-size: 0.875em;
    width: fit-content;
    height: 31px;
    padding-top: 1em;
    color: ${Colors.pink900};
    animation: ${touched && errorMessage
      ? "enter 0.2s ease-in-out forwards"
      : ""};

    @keyframes enter {
      from {
        opacity: 0;
        transform: translateY(-8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return <div css={errorMsgStyles}>{touched ? errorMessage : ""}</div>;
};

export { ErrorMsg };
