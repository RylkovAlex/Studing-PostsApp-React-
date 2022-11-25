import { useMemo } from 'react';

export const usePagination = (totalPagesCount) =>
  useMemo(() => {
    const pages = new Array(totalPagesCount).fill(0).map((_, idx) => ++idx);
    return pages;
  }, [totalPagesCount]);
