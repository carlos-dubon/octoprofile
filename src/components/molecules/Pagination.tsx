import { Dispatch, FC, SetStateAction } from "react";
import ReactJsPagination from "react-js-pagination";

interface Props {
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
  itemsCountPerPage: number;
  totalItemsCount: number;
  pageRangeDisplayed: number;
}

const Pagination: FC<Props> = ({
  activePage,
  setActivePage,
  itemsCountPerPage,
  totalItemsCount,
  pageRangeDisplayed,
}) => {
  return (
    <ReactJsPagination
      activePage={activePage}
      itemsCountPerPage={itemsCountPerPage}
      totalItemsCount={totalItemsCount}
      pageRangeDisplayed={pageRangeDisplayed}
      onChange={(page: number) => {
        setActivePage(page - 1);
      }}
    />
  );
};

export { Pagination };
