import { Dispatch, FC, SetStateAction } from "react";
import ReactPaginate from "react-paginate";
import { Global, css } from "@emotion/react";
import Colors from "@app/styles/colors";
import { GoToPage } from "@lib/atoms";
import useBreakpoint from "use-breakpoint";

interface Props {
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
  pageCount: number;
}

const breakpoints = { mobile: 0, sm: 640, md: 768 };

const Pagination: FC<Props> = ({ activePage, setActivePage, pageCount }) => {
  const globalStyles = css`
    .pagination-hide {
      display: none;
    }

    .pagination {
      height: 44px;
      display: flex;
      align-items: center;
      gap: 0.625em;
      list-style-type: none;
      margin-top: 0;
      margin-bottom: 0;
      margin-left: 1.5em;
      margin-right: 1.5em;
      padding: 0;
    }

    .pagination-link {
      user-select: none;
      cursor: pointer;
      width: 50px;
      height: 40px;
      background-color: ${Colors.purple100};
      color: ${Colors.purple900};
      font-size: 0.875em;
      font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      transition: all 0.2s ease-in-out;
    }

    .pagination-link-active {
      background-color: ${Colors.purple900};
      color: #ffffff;
      width: 50px;
      height: 44px;
      cursor: default;
    }
  `;

  const containerStyles = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
  `;

  const handleChange = (event: { selected: number }): void => {
    const { selected: page } = event;
    setActivePage(page);
  };

  const goToLastPage = (): void => {
    setActivePage(pageCount - 1);
  };

  const goToFirstPage = (): void => {
    setActivePage(0);
  };

  const { breakpoint } = useBreakpoint(breakpoints, "md");

  return (
    <>
      <Global styles={globalStyles} />
      <div css={containerStyles}>
        <GoToPage
          page="first"
          disabled={activePage == 0}
          onClick={() => goToFirstPage()}
        />
        <ReactPaginate
          forcePage={activePage}
          onPageChange={handleChange}
          pageRangeDisplayed={breakpoint == "mobile" ? 2 : 4}
          marginPagesDisplayed={0}
          breakLabel=""
          pageCount={pageCount}
          previousClassName="pagination-hide"
          nextClassName="pagination-hide"
          containerClassName="pagination"
          pageLinkClassName="pagination-link"
          activeLinkClassName="pagination-link-active"
        />
        <GoToPage
          page="last"
          disabled={activePage == pageCount - 1}
          onClick={() => goToLastPage()}
        />
      </div>
    </>
  );
};

export { Pagination };
