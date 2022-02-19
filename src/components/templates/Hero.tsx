import { FC } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import { Input } from "@lib/atoms";
import { useFormik } from "formik";

const Hero: FC = () => {
  const headingStyles = css`
    font-size: 4.5em;
    font-weight: 800;
    width: 540px;
    line-height: 136%;
    color: ${Colors.gray900};
    margin: 0;
  `;

  const subheadingStyles = css`
    font-size: 1.125em;
    width: 540px;
    margin: 0.75em 0;
    color: ${Colors.gray900};
  `;

  const usernameInput = useFormik({
    initialValues: {
      username: "",
    },
    onSubmit: (values) => {
      console.log(values.username);
    },
  });

  return (
    <>
      <h1 css={headingStyles}>Get your own OctoProfile</h1>
      <p css={subheadingStyles}>
        A nicer look at your GitHub profile and repositories. With data
        visualizations of your languages and stars.
      </p>

      <form onSubmit={usernameInput.handleSubmit}>
        <Input
          name="username"
          onChange={usernameInput.handleChange}
          value={usernameInput.values.username}
          clearFn={usernameInput.resetForm}
          placeholder="Your GitHub username"
        />
      </form>
    </>
  );
};

export { Hero };
