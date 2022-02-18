import { FC, HTMLInputTypeAttribute, ReactNode, useRef } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import Image from "next/image";

interface Props {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  children?: ReactNode;
}

const Input: FC<Props> = ({ type, placeholder, children }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const height = "4em";
  const padding = "1.375em";

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        background: #ffffff;
        box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
        border-radius: 5px;
        height: ${height};
        width: fit-content;
      `}
    >
      <div
        onClick={() => {
          inputRef.current?.focus();
        }}
        css={css`
          display: grid;
          align-items: center;
          height: 100%;
          cursor: text;
          padding-left: ${padding};
        `}
      >
        <Image
          src="/icons/search.svg"
          alt="search"
          width={17}
          height={17}
          priority
        />
      </div>
      <input
        ref={inputRef}
        css={css`
          height: ${height};
          outline: none;
          border: 0;
          font-size: 1em;
          font-weight: 400;
          padding: 0 ${padding};
          font-family: "Inter", sans-serif;
          ::placeholder {
            color: ${Colors.gray700};
          }
        `}
        type={type || "text"}
        placeholder={placeholder}
      />
      <div
        css={css`
          height: 4em;
          padding-right: ${padding};
          cursor: ${children ? "default" : "text"};
        `}
        onClick={() => {
          !children && inputRef.current?.focus();
        }}
      ></div>
    </div>
  );
};

export { Input };
