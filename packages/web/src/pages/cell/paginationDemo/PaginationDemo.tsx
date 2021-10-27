import React from 'react';
import { Pagination } from '@chips/core';

const PaginationDemo = (): JSX.Element => {
  return (
    <div>
      <h2>Basic Pagination</h2>
      <Pagination pageSize={9} />
      <Pagination pageSize={9} color="primary" />
      <Pagination pageSize={9} color="secondary" />
      <hr />
      <h2>Pagination with More Pages</h2>
      <Pagination pageSize={15} siblingCount={2} defaultPage={3} />
      <Pagination
        pageSize={23}
        boundaryCount={3}
        defaultPage={2}
        color="primary"
      />
      <Pagination
        pageSize={23}
        siblingCount={2}
        boundaryCount={3}
        color="secondary"
      />
      <hr />
      <h2>Pagination with Functional Buttons</h2>
      <Pagination pageSize={9} showFirstButton />
      <Pagination pageSize={9} showLastButton />
      <Pagination pageSize={9} hidePrevButton />
      <Pagination pageSize={9} hideNextButton />
      <hr />
      <h2>Disabled Pagination</h2>
      <Pagination pageSize={15} siblingCount={2} defaultPage={3} disabled />
    </div>
  );
};

export default PaginationDemo;
