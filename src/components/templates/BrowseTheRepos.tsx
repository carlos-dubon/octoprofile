import { FC, useEffect } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import Screens from "@app/styles/breakpoints";
import { Dropdown, SectionTitle } from "@lib/molecules";
import { Input } from "@lib/atoms";
import { useFormik } from "formik";
import Image from "next/image";

const BrowseTheRepos: FC = () => {
  const searchInput = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {},
  });

  const containerStyles = css`
    margin-top: 6em;
    margin-bottom: 6em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.turquoise100};
  `;

  const contentStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3.625em;
    margin-bottom: 3.625em;
    position: relative;
    z-index: 3;
  `;

  const circlePatternStyles = css`
    position: absolute;
    z-index: 2;
    transform: translateX(-70%) scale(0.9);
    @media (min-width: ${Screens.md}px) {
      transform: translateX(-105%);
    }
  `;

  useEffect(() => {
    console.log(searchInput.values.search);
  }, [searchInput.values.search]);

  return (
    <div css={containerStyles}>
      <div className="container" css={contentStyles}>
        <SectionTitle
          title="Browse the repos"
          subtitle="Sort through the repos by name, number of stars, forks, and size."
        />
        <Input
          placeholder="The name of the repository"
          name="search"
          onChange={searchInput.handleChange}
          value={searchInput.values.search}
          clearFn={searchInput.resetForm}
          onBlur={searchInput.handleBlur}
        >
          <Dropdown
            defaultValue="Stars"
            values={["Stars", "Forks", "Size"]}
            onChange={(e) => {
              console.log(e);
            }}
          />
        </Input>
      </div>
      <div css={circlePatternStyles}>
        <Image
          src={"/circlePattern.svg"}
          alt="Circle pattern"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export { BrowseTheRepos };
