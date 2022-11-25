import React from 'react';
import Button from '../button/Button';
import cls from './pagination.module.css';

const Pagination = ({ pages, currentPage, onClick }) =>
  pages.map((pageNumber) => (
    <Button
      key={pageNumber}
      className={
        pageNumber === currentPage
          ? `${cls.page} ${cls.page__current}`
          : cls.page
      }
      onClick={() => onClick(pageNumber)}
    >
      {pageNumber}
    </Button>
  ));

export default Pagination;
