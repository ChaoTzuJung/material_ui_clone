import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from '@chips/core/components/select/Select';
import { Option } from '@chips/core/components/option/Option';

export default {
  title: 'Components/Select',
  component: Select,
  subcomponents: { Option },
  decorators: [
    Story => (
      <div style={{ height: '160px' }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof Select>;

export const DefaultSelect: ComponentStory<typeof Select> = args => (
  <Select {...args}>
    <Option value="Ant">Ant</Option>
    <Option value="Bear">Bear</Option>
    <Option value="Cat">Cat</Option>
  </Select>
);

export const LabeledSelect: ComponentStory<typeof Select> = args => (
  <Select {...args} label="animal">
    <Option value="Ant">Ant</Option>
    <Option value="Bear">Bear</Option>
    <Option value="Cat">Cat</Option>
  </Select>
);

export const OutlinedSelect: ComponentStory<typeof Select> = args => (
  <Select {...args} label="animal" variant="outlined">
    <Option value="Ant">Ant</Option>
    <Option value="Bear">Bear</Option>
    <Option value="Cat">Cat</Option>
  </Select>
);

export const FilledSelect: ComponentStory<typeof Select> = args => (
  <Select {...args} label="animal" variant="contained">
    <Option value="Ant">Ant</Option>
    <Option value="Bear">Bear</Option>
    <Option value="Cat">Cat</Option>
  </Select>
);
export const DisabledSelect: ComponentStory<typeof Select> = args => (
  <Select {...args} disabled={true}>
    <Option value="Ant">Ant</Option>
    <Option value="Bear">Bear</Option>
    <Option value="Cat">Cat</Option>
  </Select>
);
