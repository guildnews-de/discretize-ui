import type { Meta, StoryFn } from '@storybook/react';
import Specialization from './Specialization';

const meta: Meta<typeof Specialization> = {
  title: 'Components/Specialization',
  component: Specialization,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof Specialization>;

const Template: StoryFn<typeof Specialization> = (args) => {
const Template: StoryFn<typeof Specialization> = (args) => {
  return <Specialization {...args} />;
};

export const Simple = {
  render: Template,

  args: {
    id: 42,
  },
};
