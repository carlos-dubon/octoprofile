import { Dispatch, FC, SetStateAction } from "react";
import ReactPaginate from "react-paginate";
import { Global, css } from "@emotion/react";
import Colors from "@app/styles/colors";

interface Props {
  setActivePage: Dispatch<SetStateAction<number>>;
  pageCount: number;
}

const Pagination: FC<Props> = ({ setActivePage, pageCount }) => {
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
      margin: 0;
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
      &:hover {
        opacity: 0.8;
      }
    }

    .pagination-link-active {
      background-color: ${Colors.purple900};
      color: #ffffff;
      width: 48px;
      height: 44px;
      cursor: default;
    }
  `;

  const handleChange = (event: { selected: number }): void => {
    const { selected: page } = event;
    setActivePage(page);
  };

  return (
    <>
      <Global styles={globalStyles} />
      <ReactPaginate
        onPageChange={handleChange}
        pageRangeDisplayed={4}
        marginPagesDisplayed={0}
        breakLabel=""
        pageCount={pageCount}
        previousClassName="pagination-hide"
        nextClassName="pagination-hide"
        containerClassName="pagination"
        pageLinkClassName="pagination-link"
        activeLinkClassName="pagination-link-active"
      />
    </>
  );
};

export { Pagination };
