import type { Meta, StoryFn } from '@storybook/react';
import Condition from './Condition';

const meta: Meta<typeof Condition> = {
  title: 'Components/Condition',
  component: Condition,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof Condition>;

const Template: StoryFn<typeof Condition> = (args) => {
const Template: StoryFn<typeof Condition> = (args) => {
  return <Condition {...args} />;
};

export const Bleed = {
  render: Template,

  args: {
    name: 'Bleeding',
  },
};
