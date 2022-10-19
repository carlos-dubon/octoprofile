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
      height: 40px;
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
      width: 40px;
      height: 40px;
      background-color: ${Colors.purple100};
      color: ${Colors.purple900};
      font-size: 0.875em;
      font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      border-radius: 6px;
      transition: all 0.1s ease-in-out;
      &:hover {
        opacity: 0.8;
      }
    }

    .pagination-link-active {
      background-color: ${Colors.purple900};
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      color: #ffffff;
      width: 40px;
      height: 40px;
      &:hover {
        opacity: 0.95 !important;
      }
    }

    .pagination-break {
      user-select: none;
      display: flex;
      align-items: center;
      cursor: pointer;
      height: 40px;
      color: ${Colors.purple800};
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

  const prev = (): void => {
    setActivePage(activePage - 1);
  };

  const next = (): void => {
    setActivePage(activePage + 1);
  };

  const { breakpoint } = useBreakpoint(breakpoints, "md");

  return (
    <>
      <Global styles={globalStyles} />
      <div css={containerStyles}>
        <GoToPage
          page="prev"
          disabled={activePage == 0}
          onClick={() => prev()}
        />
        <ReactPaginate
          forcePage={activePage}
          onPageChange={handleChange}
          pageRangeDisplayed={breakpoint == "mobile" ? 1 : 3}
          marginPagesDisplayed={breakpoint == "mobile" ? 1 : 2}
          breakLabel="..."
          breakClassName="pagination-break"
          pageCount={pageCount}
          previousClassName="pagination-hide"
          nextClassName="pagination-hide"
          containerClassName="pagination"
          pageLinkClassName="pagination-link"
          activeLinkClassName="pagination-link-active"
        />
        <GoToPage
          page="next"
          disabled={activePage == pageCount - 1}
          onClick={() => next()}
        />
      </div>
    </>
  );
};

export { Pagination };
