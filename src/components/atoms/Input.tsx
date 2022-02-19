import {
  ChangeEventHandler,
  FC,
  HTMLInputTypeAttribute,
  ReactNode,
  useRef,
} from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import Image from "next/image";
import Tippy from "@tippyjs/react";

interface Props {
  type?: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  name?: string;
  placeholder?: string;
  children?: ReactNode;
  clearFn?: Function;
}

const Input: FC<Props> = ({
  type,
  placeholder,
  children,
  onChange,
  value,
  name,
  clearFn,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const height = "4em";
  const padding = "1.375em";

  const containerStyles = css`
    display: flex;
    align-items: center;
    background: #ffffff;
    box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
    border-radius: 5px;
    height: ${height};
    width: fit-content;
  `;

  const magnifyingGlassStyles = css`
    display: grid;
    align-items: center;
    height: 100%;
    cursor: text;
    padding-left: ${padding};
  `;

  const inputStyles = css`
    height: ${height};
    outline: none;
    border: 0;
    font-size: 1em;
    font-weight: 400;
    padding-left: ${padding};
    font-family: "Inter", sans-serif;
    ::placeholder {
      color: ${Colors.gray700};
    }
  `;

  const clearBtnContainerStyles = css`
    height: ${height};
    display: grid;
    align-items: center;
    padding-right: ${padding};
    cursor: text;
  `;

  const clearBtnStyles = css`
    cursor: pointer;
    opacity: ${inputRef.current?.value.length ? "1" : "0"};
    pointer-events: ${inputRef.current?.value.length ? "all" : "none"};
  `;

  const childrenStyles = css`
    height: 4em;
    padding-right: ${padding};
    cursor: ${children ? "default" : "text"};
  `;

  return (
    <div css={containerStyles}>
      <div
        onClick={() => {
          inputRef.current?.focus();
        }}
        css={magnifyingGlassStyles}
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
        css={inputStyles}
        type={type || "text"}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      <div
        css={clearBtnContainerStyles}
        onClick={() => {
          inputRef.current?.focus();
        }}
      >
        <Tippy
          content="Clear"
          disabled={inputRef.current?.value.length ? false : true}
          delay={200}
          offset={[0, 12]}
        >
          <div>
            <Image
              css={clearBtnStyles}
              onClick={() => {
                clearFn && clearFn();
                if (inputRef.current) inputRef.current.value = "";
              }}
              src="/icons/dismiss.svg"
              alt="delete"
              width={20}
              height={20}
              priority
            />
          </div>
        </Tippy>
      </div>
      <div
        css={childrenStyles}
        onClick={() => {
          !children && inputRef.current?.focus();
        }}
      ></div>
    </div>
  );
};

export { Input };
