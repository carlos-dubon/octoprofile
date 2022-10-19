import Image from "next/image";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import { FC, MouseEventHandler } from "react";

interface Props {
  page: "prev" | "next";
  disabled: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const GoToPage: FC<Props> = ({ page, onClick, disabled }) => {
  const containerStyles = css`
    user-select: none;
    display: flex;
    flex-direction: ${page == "prev" ? "row-reverse" : "row"};
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    pointer-events: ${disabled ? "none" : "auto"};
    opacity: ${disabled ? 0.5 : 1};
    .pagination-arrow {
      transform: translateX(0%) ${page == "prev" ? "rotate(180deg)" : ""};
    }
  `;

  const textStyles = css`
    margin: 0;
    padding: 0;
    color: ${Colors.purple900};
    font-size: 0.875em;
    font-weight: 500;
  `;

  return (
    <div css={containerStyles} onClick={onClick}>
      <p css={textStyles}>{page == "prev" ? "Prev" : "Next"}</p>
      <div className="pagination-arrow">
        <Image
          src="/paginationArrow.svg"
          alt="arrow"
          width={18.33}
          height={11.67}
          priority
          layout="fixed"
        />
      </div>
    </div>
  );
};

export { GoToPage };
