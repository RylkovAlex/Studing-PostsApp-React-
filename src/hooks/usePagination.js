import { useMemo, useState } from 'react';
import { getPagesCount } from '../utils/pages';

export const usePagination = (itemsCount, limit, startPage) => {
  const [currentPage, setCurrentPage] = useState(startPage);
  return useMemo(() => {
    const pagesCount = getPagesCount(itemsCount, limit);
    const pages = new Array(pagesCount).fill(0).map((_, idx) => ++idx);
    return { currentPage, setCurrentPage, pages, pagesCount };
  }, [itemsCount, limit, currentPage]);
};
