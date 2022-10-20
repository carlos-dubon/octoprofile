import { FC, forwardRef, LegacyRef } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import { Repo } from "src/state/slices/reposSlice";
import { Badge } from "@lib/atoms";
import GhColors from "gh-lang-colors";
import { commaSeparateThousands, truncateString } from "@lib/helpers";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FunctionalRepoCard = forwardRef(
  (repo: Repo, ref: LegacyRef<HTMLDivElement>) => {
    const containerStyles = css`
      width: 100%;
      max-width: 346px;
      height: 12.813rem;
    `;

    return (
      <div ref={ref} css={containerStyles}>
        <RepoCard {...repo} />
      </div>
    );
  }
);

FunctionalRepoCard.displayName = "FunctionalRepoCard";

const RepoCard: FC<Repo> = ({
  name,
  description,
  language,
  stars,
  forks,
  size,
  url,
}) => {
  const langColor: string = language
    ? GhColors[language as keyof typeof GhColors]
    : Colors.gray700;

  const containerStyles = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #ffffff;
    padding: 1.325rem;
    &:hover {
      cursor: pointer;
    }
  `;

  const titleStyles = css`
    margin: 0;
    font-weight: 600;
    font-size: 1.25em;
    color: ${Colors.gray900};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 20ch;
    margin-bottom: 0.4em;
  `;

  const descriptionStyles = css`
    font-weight: 400;
    font-size: 1em;
    line-height: 162%;
    color: ${Colors.gray900};
    margin: 0;
    flex: 1;
  `;

  const badgeTextStyles = css`
    margin: 0;
    font-weight: 400;
    font-size: 0.75em;
    color: #000000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 9ch;
  `;

  const languageColorStyles = css`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${langColor};
  `;

  const badgeContainerStyles = css`
    display: flex;
    gap: 0.5em;
  `;

  return (
    <Link href={url} passHref>
      <motion.a
        target="_blank"
        css={containerStyles}
        animate={{ boxShadow: "0px 10px 20px rgba(41, 41, 42, 0.07)" }}
        whileHover={{
          y: -5,
          boxShadow: "0px 10px 20px rgba(41, 41, 42, 0.13)",
          transition: {
            type: "tween",
            duration: 0.2,
          },
        }}
      >
        <p css={titleStyles}>{name}</p>
        <p css={descriptionStyles}>{truncateString(description || "", 100)}</p>
        <div css={badgeContainerStyles}>
          {language && (
            <Badge>
              <div css={languageColorStyles}></div>
              <p css={badgeTextStyles}>{language}</p>
            </Badge>
          )}
          <Badge>
            <Image
              src="/repoStar.svg"
              alt="star"
              width={13}
              height={12}
              layout="fixed"
              priority
            />
            <p css={badgeTextStyles}>{commaSeparateThousands(stars)}</p>
          </Badge>
          <Badge>
            <Image
              src="/repoFork.svg"
              alt="fork"
              width={8}
              height={12}
              layout="fixed"
              priority
            />
            <p css={badgeTextStyles}>{commaSeparateThousands(forks)}</p>
          </Badge>
          <Badge>
            <p css={badgeTextStyles}>{commaSeparateThousands(size)} KB</p>
          </Badge>
        </div>
      </motion.a>
    </Link>
  );
};

export { RepoCard, FunctionalRepoCard };
