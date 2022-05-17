import { FC } from "react";
import { css } from "@emotion/react";
import Colors from "@app/styles/colors";
import { Dropdown, SectionTitle } from "@lib/molecules";
import { Input } from "@lib/atoms";

const BrowseTheRepos: FC = () => {
  const containerStyles = css`
    margin-top: 6em;
    margin-bottom: 6em;
    display: flex;
    justify-content: center;
    background-color: ${Colors.turquoise100};
  `;

  const contentStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3.625em;
    margin-bottom: 3.625em;
  `;

  return (
    <div css={containerStyles}>
      <div className="container" css={contentStyles}>
        <SectionTitle
          title="Browse the repos"
          subtitle="Sort through the repos by name, number of stars, forks, and size."
        />
        <Input placeholder="The name of the repository">
          <Dropdown
            defaultValue="Stars"
            values={["Stars", "Forks", "Size"]}
            onChange={(e) => {
              console.log(e);
            }}
          />
        </Input>
      </div>
    </div>
  );
};

export { BrowseTheRepos };
