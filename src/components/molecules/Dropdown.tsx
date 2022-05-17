import { FC, useState } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import Chevron from "/public/chevron.svg";
import Colors from "@app/styles/colors";

interface Props {
  defaultValue: string;
  values: string[];
  onChange: (value: string) => void;
}

const Dropdown: FC<Props> = ({ defaultValue, values, onChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>(defaultValue);

  const containerStyles = css`
    position: relative;
    width: 100%;
    height: 100%;
  `;

  const buttonStyles = css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75px;
    height: 100%;
    cursor: pointer;
    gap: 0.8em;
  `;

  const buttonTextStyles = css`
    width: 42px;
  `;

  const buttonChevronStyles = css`
    transform: rotate(${isOpen ? "180deg" : "0deg"});
    transition: transform 0.2s ease-in-out;
  `;

  const dropdownContainerStyles = css`
    position: absolute;
    background-color: white;
    border-radius: 9px;
    box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
    width: 120px;
    padding: 0.4em 0;
    transform: translateX(-20%)
      ${isOpen ? "translateY(10%)" : "translateY(-20%)"};
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? "all" : "none"};
    transition: all 0.15s ease-in-out;
  `;

  const dropdownItemStyles = css`
    height: 45px;
    width: 120px;
    display: flex;
    align-items: center;
    padding: 0 1.2em;
    cursor: pointer;
    &:hover {
      background-color: ${Colors.gray100};
    }
  `;

  const handleSelect = (value: string): void => {
    setValue((prevValue) => {
      if (prevValue != value) {
        onChange(value);
      }
      return value;
    });
    setIsOpen(false);
  };

  return (
    <div css={containerStyles}>
      <div css={buttonStyles} onClick={() => setIsOpen(!isOpen)}>
        <div css={buttonTextStyles}>{value}</div>
        <Image
          css={buttonChevronStyles}
          src={Chevron}
          alt="chevron"
          width={14}
          height={8}
        />
      </div>
      <div css={dropdownContainerStyles}>
        {values.map((value, index) => (
          <div
            key={index}
            css={dropdownItemStyles}
            onClick={() => {
              handleSelect(value);
            }}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Dropdown };
