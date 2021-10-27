import React, { useState, useEffect } from 'react';
import { cloneDeep, uniq } from 'lodash';

import './pagination.scss';

export interface PaginationPropsI {
  /** The number of pages in the pagination. */
  pageSize: number;
  /**
   * The page selected by default when the component is uncontrolled.
   * @default 1
   */
  defaultPage?: number;
  /**
   * Number of always visible pages before and after the current page.
   * @default 1
   */
  siblingCount?: number;
  /**
   * Number of always visible pages at the beginning and end.
   * @default 1
   */
  boundaryCount?: number;
  /**
   * If `true`, show the first-page button.
   * @default false
   */
  showFirstButton?: boolean;
  /**
   * If `true`, show the last-page button.
   * @default false
   */
  showLastButton?: boolean;
  /**
   * If `true`, hide the previous-page button.
   * @default false
   */
  hidePrevButton?: boolean;
  /**
   * If `true`, hide the next-page button.
   * @default false
   */
  hideNextButton?: boolean;
  /**
   * The active color.
   * @default 'default'
   */
  color?: 'primary' | 'secondary';
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
}

/**
 * Pagination
 * The Pagination component enables the user to select a specific page from a range of pages.
 * @param pageSize The number of pages in the pagination.
 * @param defaultPage The page selected by default when the component is uncontrolled.
 * @param siblingCount Number of always visible pages before and after the current page.
 * @param boundaryCount Number of always visible pages at the beginning and end.
 * @param showFirstButton If `true`, show the first-page button.
 * @param showLastButton If `true`, show the last-page button.
 * @param hidePrevButton If `true`, hide the previous-page button.
 * @param hideNextButton If `true`, hide the next-page button.
 * @param color The active color.
 * @param disabled If `true`, the component is disabled.
 */
export const Pagination = (props: PaginationPropsI): JSX.Element => {
  const {
    pageSize,
    defaultPage = 1,
    siblingCount = 1,
    boundaryCount = 1,
    showFirstButton = false,
    showLastButton = false,
    hidePrevButton = false,
    hideNextButton = false,
    color = 'default',
    disabled = false
  } = props;

  const [btnSize, setBtnSize] = useState(3); // 被選中的 + 左邊... + 右邊...
  const [currentPage, setCurrentPage] = useState(1);
  const [pageBtnText, setPageBtnText] = useState([] as number[]);

  useEffect(() => {
    setBtnSize(3 + siblingCount * 2 + boundaryCount * 2);
  }, [siblingCount, boundaryCount]);

  useEffect(() => {
    if (defaultPage <= pageSize) {
      setCurrentPage(defaultPage);
    }
  }, [defaultPage, pageSize]);

  useEffect(() => {
    let btnArray: number[] = [];

    let restBtnSize = 0;

    let leftSize = 0;
    let rightSize = 0;

    const siblingPart: number[] = [];

    if (btnSize < pageSize) {
      if (currentPage === 1) {
        // 目前頁數在第一頁
        for (let index = 1; index <= currentPage + siblingCount; index++) {
          siblingPart.push(index);
        }
      } else if (currentPage === pageSize) {
        // 目前頁數在最後一頁
        for (
          let index = currentPage - siblingCount;
          index <= currentPage;
          index++
        ) {
          siblingPart.push(index);
        }
      } else {
        for (
          let index = currentPage - siblingCount;
          index <= currentPage + siblingCount;
          index++
        ) {
          if (index >= 1 && index <= pageSize) {
            siblingPart.push(index);
          }
        }
      }

      leftSize = siblingPart[0] - 1;
      rightSize = pageSize - siblingPart[siblingPart.length - 1];

      // 先推前後數字
      btnArray = cloneDeep(siblingPart);
      for (let index = 1; index <= boundaryCount; index++) {
        btnArray.unshift(index);
        leftSize--;
      }
      for (
        let index = pageSize - boundaryCount + 1;
        index <= pageSize;
        index++
      ) {
        btnArray.push(index);
        rightSize--;
      }
      btnArray = uniq(btnArray).sort((a, b) => (a < b ? -1 : 1));

      // 算剩下的位置數量
      restBtnSize = btnSize - btnArray.length;

      if (rightSize === 1) {
        btnArray.splice(
          btnArray.length - boundaryCount,
          0,
          pageSize - boundaryCount
        );
        rightSize--;
        restBtnSize--;
      } else if (leftSize === 1) {
        btnArray.splice(boundaryCount, 0, boundaryCount + 1);
        leftSize--;
        restBtnSize--;
      }

      if (leftSize > 1 && rightSize > 1) {
        if (restBtnSize / 2 === 1) {
          btnArray.splice(btnArray.length - boundaryCount, 0, 0);
          btnArray.splice(boundaryCount, 0, 0);
          rightSize--;
          leftSize--;
        }
      }

      if (leftSize > 1 && rightSize < 1) {
        if (restBtnSize === 1) {
          btnArray.splice(boundaryCount, 0, 0);
        } else {
          let startIndex = 0;
          let startNum = 0;
          let stop = false;
          btnArray.forEach((item, index) => {
            if (1 + index !== item && !stop) {
              stop = true;
              startIndex = index;
              startNum = item - 1;
              return;
            }
          });
          btnArray.splice(boundaryCount, 0, 0);
          for (let index = 0; index < restBtnSize - 1; index++) {
            btnArray.splice(startIndex + 1, 0, startNum - index);
          }
        }
      }

      if (rightSize > 1 && leftSize < 1) {
        if (restBtnSize === 1) {
          btnArray.splice(btnArray.length - boundaryCount, 0, 0);
        } else {
          let startIndex = 0;
          let stop = false;
          btnArray.forEach((item, index) => {
            if (1 + index !== item && !stop) {
              stop = true;
              startIndex = index;
              return;
            }
          });
          for (let index = 0; index < restBtnSize - 1; index++) {
            btnArray.splice(startIndex + index, 0, startIndex + index + 1);
          }
          btnArray.splice(btnArray.length - boundaryCount, 0, 0);
        }
      }
    } else {
      for (let index = 1; index <= pageSize; index++) {
        btnArray.push(index);
      }
    }
    setPageBtnText(btnArray);
  }, [pageSize, currentPage, btnSize, boundaryCount, siblingCount]);

  const onSpeedBtnClick = (
    type: 'pre' | 'next' | 'first' | 'last' | number
  ) => {
    switch (type) {
    case 'pre':
      if (currentPage !== 1) {
        setCurrentPage(currentPage - 1);
      }
      break;

    case 'next':
      if (currentPage !== pageSize) {
        setCurrentPage(currentPage + 1);
      }
      break;

    case 'first':
      setCurrentPage(1);
      break;

    case 'last':
      setCurrentPage(pageSize);
      break;

    default:
      break;
    }
  };

  const renderPageBtn = () => {
    return pageBtnText.map((item, index) => {
      let classname =
        'chips-button chips-pagination__btn' +
        (disabled ? ' chips-pagination__btn--disabled' : '');

      if (currentPage === item) {
        classname =
          classname +
          ' chips-pagination__btn--selected' +
          (color === 'default'
            ? ''
            : ` chips-pagination__btn--selected--${color}`);
      }

      return (
        <li key={index} className="chips-pagination__li">
          {item !== 0 ? (
            <button
              className={classname}
              type="button"
              onClick={() => setCurrentPage(item)}
              disabled={disabled}
            >
              <span className="chips-button__text">{item}</span>
            </button>
          ) : (
            <div className={classname + ' chips-pagination__btn--zip'}>
              <span className="chips-button__text">...</span>
            </div>
          )}
        </li>
      );
    });
  };

  return (
    <div className="chips-pagination">
      {pageSize && (
        <ul className="chips-pagination__ul">
          {showFirstButton && (
            <li className="chips-pagination__li">
              <button
                className={
                  'chips-button chips-pagination__btn' +
                  (disabled ? ' chips-pagination__btn--disabled' : '')
                }
                type="button"
                onClick={() => onSpeedBtnClick('first')}
                disabled={disabled}
              >
                <span className="chips-button__text">&laquo;</span>
              </button>
            </li>
          )}

          {!hidePrevButton && (
            <li className="chips-pagination__li">
              <button
                className={
                  'chips-button chips-pagination__btn' +
                  (disabled ? ' chips-pagination__btn--disabled' : '')
                }
                type="button"
                onClick={() => onSpeedBtnClick('pre')}
                disabled={disabled}
              >
                <span className="chips-button__text">&lt;</span>
              </button>
            </li>
          )}

          {renderPageBtn()}

          {!hideNextButton && (
            <li className="chips-pagination__li">
              <button
                className={
                  'chips-button chips-pagination__btn' +
                  (disabled ? ' chips-pagination__btn--disabled' : '')
                }
                type="button"
                onClick={() => onSpeedBtnClick('next')}
                disabled={disabled}
              >
                <span className="chips-button__text">&gt;</span>
              </button>
            </li>
          )}

          {showLastButton && (
            <li className="chips-pagination__li">
              <button
                className={
                  'chips-button chips-pagination__btn' +
                  (disabled ? ' chips-pagination__btn--disabled' : '')
                }
                type="button"
                onClick={() => onSpeedBtnClick('last')}
                disabled={disabled}
              >
                <span className="chips-button__text">&raquo;</span>
              </button>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};
