import type { Meta, StoryFn } from '@storybook/react';
import ConsumableEffect from './ConsumableEffect';

const meta: Meta<typeof ConsumableEffect> = {
  title: 'Components/ConsumableEffect',
  component: ConsumableEffect,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof ConsumableEffect>;

const Template: StoryFn<typeof ConsumableEffect> = (args) => {
const Template: StoryFn<typeof ConsumableEffect> = (args) => {
  return <ConsumableEffect {...args} />;
};

export const Simple = {
  render: Template,

  args: {
    name: 'Enhancement',
  },
};
