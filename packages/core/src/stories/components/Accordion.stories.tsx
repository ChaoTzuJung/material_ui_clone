import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Accordion } from '@chips/core/components/accordion/Accordion';
import { AccordionSummary } from '@chips/core/components/accordionSummary/AccordionSummary';
import { AccordionDetail } from '@chips/core/components/accordionDetail/AccordionDetail';
import { MdKeyboardArrowUp } from 'react-icons/md';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  subcomponents: {
    AccordionSummary,
    AccordionDetail
  }
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = args => (
  <Accordion {...args}>
    <AccordionSummary expandIcon={<MdKeyboardArrowUp />}>
      Accordion 1
    </AccordionSummary>
    <AccordionDetail>Accordion Content 1</AccordionDetail>
  </Accordion>
);

export const Default = Template.bind({});
Default.args = {
  defaultExpanded: false,
  expanded: false,
  disabled: false
};

export const BasicAccordion: ComponentStory<typeof Accordion> = () => {
  return (
    <>
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
        <AccordionDetail>Disabled Accordion</AccordionDetail>
      </Accordion>
    </>
  );
};

export const ControlledAccordion: ComponentStory<typeof Accordion> = () => {
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
    <>
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
    </>
  );
};

export const ExpandedAccordion: ComponentStory<typeof Accordion> = () => {
  return (
    <>
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
    </>
  );
};

export const NestedAccordion: ComponentStory<typeof Accordion> = () => {
  return (
    <>
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
    </>
  );
};
