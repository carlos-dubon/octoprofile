import { FC } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import { Input, ErrorMsg } from "@lib/atoms";
import { useFormik } from "formik";
import { NextRouter, useRouter } from "next/router";
import Image from "next/image";
import appPreview from "public/preview.png";

const Hero: FC = () => {
  const router: NextRouter = useRouter();

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
      router.push(`/${values.username}`);
    },
    validateOnMount: true,
  });

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
    margin: 1em 0;
    color: ${Colors.gray900};
  `;

  return (
    <>
      <div
        css={css`
          display: grid;
          min-height: 865px;
          gap: 2.75em;
          grid-template-columns: repeat(2, 1fr);
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
          `}
        >
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
            <ErrorMsg
              touched={usernameInput.touched.username}
              errorMessage={usernameInput.errors.username}
            />
          </form>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <div
            css={css`
              filter: drop-shadow(48px 24px 48px rgba(24, 37, 56, 0.12));
              transform: translateY(-4em);
            `}
          >
            <Image
              unoptimized
              src={appPreview}
              placeholder="blur"
              alt="App Preview"
              width={518.61}
              height={387.18}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { Hero };
