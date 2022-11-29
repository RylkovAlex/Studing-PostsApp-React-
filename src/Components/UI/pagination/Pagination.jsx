import React from 'react';
import Button from '../button/Button';
import Select from '../select/Select';
import cls from './pagination.module.css';

const Pagination = ({
  pages,
  currentPage,
  onClick,
  limit,
  setLimit,
  setCurrentPage,
  totalCount,
  setScroll,
}) => (
  <div
    style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}
  >
    <div style={{ marginRight: '30px' }}>
      <span style={{ marginRight: '10px' }}>{'Показывать на странице:'}</span>
      <Select
        options={[
          { value: 10, text: '10' },
          { value: 20, text: '20' },
          { value: 'scroll', text: 'С подгрузкой' },
          { value: totalCount, text: 'Все' },
        ]}
        value={limit}
        onChange={(evt) => {
          setCurrentPage(1);
          switch (evt.target.value) {
            case '10':
              setScroll(false);
              setLimit(10);
              return;
            case '20':
              setScroll(false);
              setLimit(20);
              return;
            case `scroll`:
              setLimit(10);
              setScroll(true);
              return;
            case `${totalCount}`:
              setScroll(false);
              setLimit(totalCount);
              return;

            default:
              break;
          }
        }}
      />
    </div>
    {limit !== totalCount ? (
      <div>
        {pages.map((pageNumber) => (
          <Button
            key={pageNumber}
            className={
              pageNumber === currentPage
                ? `${cls.page} ${cls.page__current}`
                : cls.page
            }
            onClick={() => {
              onClick(pageNumber);
            }}
          >
            {pageNumber}
          </Button>
        ))}
      </div>
    ) : null}
  </div>
);

export default Pagination;
