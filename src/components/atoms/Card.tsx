import { FC, ReactNode, useRef } from "react";
import { css } from "@emotion/react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

interface Props {
  children?: ReactNode;
  className?: string;
  index?: number;
}

const Card: FC<Props> = ({ children, className, index = 0 }) => {
  const containerStyles = css`
    box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
    border-radius: 8px;
    background-color: #fff;
    padding: 1em;
  `;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      css={containerStyles}
      className={className}
      initial={{ y: 200, opacity: 0 }}
      animate={{
        y: isInView ? 0 : 150,
        opacity: isInView ? 1 : 0,
        transition: {
          delay: index * 0.1,
          type: "spring",
          stiffness: 120,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export { Card };
