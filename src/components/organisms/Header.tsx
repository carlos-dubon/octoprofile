import { FC, useEffect } from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import { TranslucentNavLink } from "@lib/atoms";
import Colors from "@app/styles/colors";
import Screens from "@app/styles/breakpoints";
import Tippy from "@tippyjs/react";
import { useSignInWithGithub } from "react-firebase-hooks/auth";
import { auth } from "@app/firebase";
import toast from "react-hot-toast";
import axios from "axios";
import { NextRouter, useRouter } from "next/router";

const Header: FC = () => {
  const router: NextRouter = useRouter();
  const [signInWithGitHub, user, loading, error] = useSignInWithGithub(auth);

  const containerStyles = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.5em;
    font-size: 0.875em;
    font-weight: 500;
  `;

  const leftNavStyles = css`
    display: none;
    gap: 2.5em;
    color: ${Colors.gray900};

    @media (min-width: ${Screens.lg}px) {
      display: flex;
    }
  `;

  const rightNavStyles = css`
    display: flex;
    gap: 1em;
  `;

  useEffect(() => {
    if (loading) {
      toast.loading("Loading");
    }
  }, [loading]);

  useEffect(() => {
    if (error) {
      toast.dismiss();
      toast.error("Oops! Something went wrong");
    }
  }, [error]);

  useEffect(() => {
    if (!user || loading) {
      return;
    }

    const getUserId = async () => {
      const gitHubUid: string = user.user.providerData[0].uid;

      const gitHubUser = await axios.get(
        `https://api.github.com/user/${gitHubUid}`
      );

      const username: string = gitHubUser.data.login;
      router.push(`/${username}`);

      toast.dismiss();
    };

    getUserId();
  }, [user, loading, router]);

  return (
    <div css={containerStyles}>
      <div css={leftNavStyles}>
        <Link href="https://github.com/carlos-dubon/octoprofile">
          <a>Contribute</a>
        </Link>
        <Link href="https://github.com/carlos-dubon">
          <a>GitHub@carlos-dubon</a>
        </Link>
      </div>
      <Link href="/">
        <a>
          <Image
            src="/logo.svg"
            alt="logo"
            width={136.41}
            height={28}
            priority
          />
        </a>
      </Link>
      <div css={rightNavStyles}>
        <Tippy content="Star this project" delay={200} offset={[0, 12]}>
          <div>
            <TranslucentNavLink href="https://github.com/carlos-dubon/octoprofile">
              <div
                css={css`
                  display: grid;
                  align-items: center;
                  width: 2em;
                  height: 2em;
                `}
              >
                <Image
                  src="/icons/star.svg"
                  alt="star"
                  width={18}
                  height={18}
                  priority
                />
              </div>
            </TranslucentNavLink>
          </div>
        </Tippy>
        <Tippy content="Sign in with GitHub" delay={200} offset={[0, 12]}>
          <div>
            <TranslucentNavLink
              onClick={() => {
                signInWithGitHub();
              }}
            >
              <div
                css={css`
                  display: flex;
                  gap: 0.5em;
                  padding: 0 0.75em;
                  height: 2em;
                  align-items: center;
                `}
              >
                <Image
                  src="/icons/github.svg"
                  alt="github"
                  width={18}
                  height={18}
                  priority
                />
                <div className="hide-desktop">Sign In</div>
                <div className="hide-mobile">Continue with GitHub</div>
              </div>
            </TranslucentNavLink>
          </div>
        </Tippy>
      </div>
    </div>
  );
};

export { Header };
