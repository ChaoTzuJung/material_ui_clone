import React, { useState } from 'react';
import { Collapse, Button } from '@chips/core';

import './collapseDemo.scss';

const CollapseDemo = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2>Collapse</h2>
      <div className="demo-section-container">
        <Button
          variant="contained"
          onClick={() => setIsOpen(isOpen ? false : true)}
        >
          Open
        </Button>
        <div className="collapse-text">
          <Collapse isOpen={isOpen}>You can&lsquo;t see me!</Collapse>
        </div>
      </div>
    </div>
  );
};

export default CollapseDemo;
