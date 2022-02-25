import { FC } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import { Input, ErrorMsg } from "@lib/atoms";
import { useFormik } from "formik";
import { NextRouter, useRouter } from "next/router";
import Image from "next/image";
import appPreview from "public/preview.png";
import { Faded } from "baby-i-am-faded";
import Screens from "@app/styles/breakpoints";

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

  const gridStyles = css`
    display: grid;
    gap: 2.75em;
    grid-template-areas:
      "image"
      "text";
    margin-top: 3.75em;
    @media (min-width: ${Screens.lg}px) {
      margin-top: 0px;
      min-height: 865px;
      grid-template-areas: "text image";
    }
  `;

  const textAreaStyles = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-area: text;
    @media (min-width: ${Screens.md}px) {
      max-width: 80%;
    }
    @media (min-width: ${Screens.lg}px) {
      max-width: 420px;
    }
    @media (min-width: ${Screens.xl}px) {
      max-width: 540px;
    }
  `;

  const imageAreaStyles = css`
    display: flex;
    grid-area: image;
    align-items: center;
  `;

  const headingStyles = css`
    font-size: 3.25em;
    font-weight: 800;
    line-height: 136%;
    color: ${Colors.gray900};
    margin: 0;
    @media (min-width: ${Screens.sm}px) {
      font-size: 4em;
    }
    @media (min-width: ${Screens.xl}px) {
      font-size: 4.5em;
    }
  `;

  const subheadingStyles = css`
    font-size: 1em;
    margin: 1em 0;
    color: ${Colors.gray900};
    line-height: 178%;
    @media (min-width: ${Screens.sm}px) {
      font-size: 1.125em;
    }
  `;

  return (
    <>
      <div css={gridStyles}>
        <div css={textAreaStyles}>
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
        <div css={imageAreaStyles}>
          <Faded
            whenInView
            animationName="babyFadeInRight"
            triggerOnce
            css={css`
              @media (min-width: ${Screens.sm}px) {
                display: flex;
                justify-content: center;
                width: 100%;
              }
            `}
          >
            <div
              css={css`
                filter: drop-shadow(48px 24px 48px rgba(24, 37, 56, 0.12));
                @media (min-width: ${Screens.sm}px) {
                  width: 80%;
                }
                @media (min-width: ${Screens.lg}px) {
                  width: 100%;
                  transform: translateY(-4em);
                }
              `}
            >
              <Image
                unoptimized
                src={appPreview}
                placeholder="blur"
                alt="App Preview"
                priority
              />
            </div>
          </Faded>
        </div>
      </div>
    </>
  );
};

export { Hero };
