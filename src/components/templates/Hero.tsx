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
    validate: (values) => {
      const errors: any = {};

      if (!values.username) {
        errors.username = "Este campo es obligatorio.";
      }

      if (
        values.username &&
        !/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(values.username)
      ) {
        errors.username = "Nombre de usuario inválido";
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log(values.username);
    },
    validateOnMount: true,
  });

  return (
    <>
      <h1 css={headingStyles}>Get your own OctoProfile</h1>
      <p css={subheadingStyles}>
        A nicer look at your GitHub profile and repositories. With data
        visualizations of your languages and stars.
      </p>

      <form
        onSubmit={usernameInput.handleSubmit}
        css={css`
          width: fit-content;
        `}
      >
        <Input
          name="username"
          onChange={usernameInput.handleChange}
          value={usernameInput.values.username}
          clearFn={usernameInput.resetForm}
          onBlur={usernameInput.handleBlur}
          placeholder="Your GitHub username"
        />
        <div
          css={css`
            font-size: 0.875em;
            width: fit-content;
            padding-top: 1em;
            cursor: help;
            color: ${Colors.pink900};
            animation: ${usernameInput.touched.username &&
            usernameInput.errors.username
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
          `}
        >
          {usernameInput.touched.username ? usernameInput.errors.username : ""}
        </div>
      </form>
    </>
  );
};

export { Hero };
