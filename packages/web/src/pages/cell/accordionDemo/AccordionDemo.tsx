import React from 'react';
import { Accordion, AccordionDetail, AccordionSummary } from '@chips/core';
import { MdKeyboardArrowUp } from 'react-icons/md';

const AvatarDemo = (): JSX.Element => {
  const [expanded, setExpanded] = React.useState<string | boolean>(false);

  const handleChange =
    (panel: string) =>
      (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        isExpanded: boolean
      ): void => {
        setExpanded(isExpanded ? panel : false);
      };

  return (
    <div>
      <h2>Basic Accordion</h2>
      <div className="demo-section-container">
        <Accordion>
          <AccordionSummary expandIcon={<MdKeyboardArrowUp />}>
            Accordion 1
          </AccordionSummary>
          <AccordionDetail>Accordion Content 1</AccordionDetail>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<MdKeyboardArrowUp />}>
            Accordion 2
          </AccordionSummary>
          <AccordionDetail>Accordion Content 2</AccordionDetail>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary expandIcon={<MdKeyboardArrowUp />}>
            Disabled Accordion
          </AccordionSummary>
          <AccordionDetail>Disabled Accordion Content</AccordionDetail>
        </Accordion>
      </div>
      <hr />
      <h2>Controlled Accordion</h2>
      <div className="demo-section-container">
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary expandIcon={<MdKeyboardArrowUp />}>
            Accordion 1
          </AccordionSummary>
          <AccordionDetail>ccordion Content 1</AccordionDetail>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary expandIcon={<MdKeyboardArrowUp />}>
            Accordion 2
          </AccordionSummary>
          <AccordionDetail>ccordion Content 2</AccordionDetail>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary expandIcon={<MdKeyboardArrowUp />}>
            Accordion 3
          </AccordionSummary>
          <AccordionDetail>ccordion Content 3</AccordionDetail>
        </Accordion>
      </div>
      <hr />
      <h2>Default Expanded Accordion</h2>
      <div className="demo-section-container">
        <Accordion defaultExpanded={true}>
          <AccordionSummary expandIcon={<MdKeyboardArrowUp />}>
            Accordion 1
          </AccordionSummary>
          <AccordionDetail>Accordion Content 1</AccordionDetail>
        </Accordion>
        <Accordion defaultExpanded={true}>
          <AccordionSummary expandIcon={<MdKeyboardArrowUp />}>
            Accordion 2
          </AccordionSummary>
          <AccordionDetail>Accordion Content 2</AccordionDetail>
        </Accordion>
        <Accordion defaultExpanded={true}>
          <AccordionSummary expandIcon={<MdKeyboardArrowUp />}>
            Accordion 3
          </AccordionSummary>
          <AccordionDetail>Accordion Content 3</AccordionDetail>
        </Accordion>
      </div>
      <hr />
      <h2>Nested Accordion</h2>
      <div className="demo-section-container">
        <Accordion>
          <AccordionSummary expandIcon={<MdKeyboardArrowUp />}>
            Accordion 1
          </AccordionSummary>
          <AccordionDetail>
            <Accordion>
              <AccordionSummary expandIcon={<MdKeyboardArrowUp />}>
                Accordion 1-1
              </AccordionSummary>
              <AccordionDetail>Accordion Content 1-1</AccordionDetail>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<MdKeyboardArrowUp />}>
                Accordion 1-1
              </AccordionSummary>
              <AccordionDetail>Accordion Content 1-2</AccordionDetail>
            </Accordion>
          </AccordionDetail>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<MdKeyboardArrowUp />}>
            Accordion 2
          </AccordionSummary>
          <AccordionDetail>
            <Accordion>
              <AccordionSummary expandIcon={<MdKeyboardArrowUp />}>
                Accordion 2-1
              </AccordionSummary>
              <AccordionDetail>Accordion Content 2-1</AccordionDetail>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<MdKeyboardArrowUp />}>
                Accordion 2-2
              </AccordionSummary>
              <AccordionDetail>Accordion Content 2-2</AccordionDetail>
            </Accordion>
          </AccordionDetail>
        </Accordion>
      </div>
      <hr />
    </div>
  );
};

export default AvatarDemo;
