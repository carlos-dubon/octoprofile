import { FC, useRef } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import { Input, ErrorMsg } from "@lib/atoms";
import { useFormik } from "formik";
import { NextRouter, useRouter } from "next/router";
import Image from "next/image";
import appPreview from "public/preview.png";
import Screens from "@app/styles/breakpoints";
import { useInView, motion } from "framer-motion";

const Hero: FC = () => {
  const router: NextRouter = useRouter();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const usernameInput = useFormik({
    initialValues: {
      username: "",
    },
    validate: (values) => {
      const errors: any = {};

      if (!values.username) {
        errors.username = "This field is required.";
      }

      if (
        values.username &&
        !/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(values.username)
      ) {
        errors.username = "Invalid username";
      }

      return errors;
    },
    onSubmit: (values) => {
      router.push(`/${values.username}`);
    },
    validateOnMount: true,
  });

  const circlesStyles = css`
    position: absolute;
    z-index: -1;
    width: 828px;
    height: 861px;
    transform: translateX(7%) translateY(-50%);
    @media (min-width: ${Screens.sm}px) {
      transform: translateX(15%) translateY(-48%);
    }
    @media (min-width: ${Screens.md}px) {
      transform: translateX(25%) translateY(-38%);
    }
    @media (min-width: ${Screens.lg}px) {
      transform: translateX(65%) translateY(-40%);
    }
    @media (min-width: ${Screens.xl}px) {
      transform: translateX(70%) translateY(-20%);
    }
  `;

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
      <div css={circlesStyles}>
        <Image
          src="/circles.svg"
          alt="circles"
          width={828}
          height={861}
          priority
        />
      </div>
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
          <motion.div
            ref={ref}
            initial={{ x: 50, opacity: 0 }}
            animate={{
              x: isInView ? 0 : 50,
              opacity: isInView ? 1 : 0,
              transition: {
                type: "tween",
                ease: [0.17, 0.55, 0.55, 1],
                duration: 0.4,
              },
            }}
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
                css={css`
                  image-rendering: -webkit-optimize-contrast;
                `}
                src={appPreview}
                placeholder="blur"
                alt="App Preview"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export { Hero };
