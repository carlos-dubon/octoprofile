import { FC } from "react";
import Colors from "@app/styles/colors";
import { SpinnerCircularFixed } from "spinners-react";

interface Props {
  size?: number;
}

const Loader: FC<Props> = ({ size = 45 }) => {
  return (
    <SpinnerCircularFixed
      size={size}
      thickness={144}
      speed={150}
      color={`${Colors.turquoise900}`}
      secondaryColor="rgba(0, 0, 0, 0)"
    />
  );
};

export { Loader };
