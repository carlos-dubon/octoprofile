import { FC } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";

interface Props {
  /**
   * Size in `px`
   */
  containerSize?: number;
  /**
   * Size in `px`
   */
  circleSize?: number;
}

const Loader: FC<Props> = ({ containerSize = 18, circleSize = 6 }) => {
  const containerStyles = css`
    display: flex;
    align-items: center;
    gap: 1.3rem;
    font-size: 0.95rem;
    color: ${Colors.gray700};
  `;

  const styles = css`
    height: ${containerSize}px;
    width: ${containerSize}px;
    animation: loader-1 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    @keyframes loader-1 {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    ::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: auto;
      margin: auto;
      width: ${circleSize}px;
      height: ${circleSize}px;
      background: ${Colors.turquoise900};
      border-radius: 50%;
      animation: loader-2 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    }
    @keyframes loader-2 {
      0% {
        transform: translate3d(0, 0, 0) scale(1);
      }
      50% {
        transform: translate3d(${containerSize}px, 0, 0) scale(0.5);
      }
      100% {
        transform: translate3d(0, 0, 0) scale(1);
      }
    }
    ::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: auto;
      bottom: 0;
      right: 0;
      margin: auto;
      width: ${circleSize}px;
      height: ${circleSize}px;
      background: ${Colors.turquoise900};
      border-radius: 50%;
      animation: loader-3 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    }
    @keyframes loader-3 {
      0% {
        transform: translate3d(0, 0, 0) scale(1);
      }
      50% {
        transform: translate3d(-${containerSize}px, 0, 0) scale(0.5);
      }
      100% {
        transform: translate3d(0, 0, 0) scale(1);
      }
    }
    span {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      height: ${containerSize}px;
      width: ${containerSize}px;
    }
    span::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: auto;
      right: 0;
      margin: auto;
      width: ${circleSize}px;
      height: ${circleSize}px;
      background: ${Colors.turquoise900};
      border-radius: 50%;
      animation: loader-4 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    }
    @keyframes loader-4 {
      0% {
        transform: translate3d(0, 0, 0) scale(1);
      }
      50% {
        transform: translate3d(0, ${containerSize}px, 0) scale(0.5);
      }
      100% {
        transform: translate3d(0, 0, 0) scale(1);
      }
    }
    span::after {
      content: "";
      display: block;
      position: absolute;
      top: auto;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      width: ${circleSize}px;
      height: ${circleSize}px;
      background: ${Colors.turquoise900};
      border-radius: 50%;
      animation: loader-5 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    }
    @keyframes loader-5 {
      0% {
        transform: translate3d(0, 0, 0) scale(1);
      }
      50% {
        transform: translate3d(0, -${containerSize}px, 0) scale(0.5);
      }
      100% {
        transform: translate3d(0, 0, 0) scale(1);
      }
    }
  `;

  return (
    <div css={containerStyles}>
      Loading...
      <div css={styles}>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export { Loader };
