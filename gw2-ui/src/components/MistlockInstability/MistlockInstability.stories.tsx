import type { Meta, StoryFn } from '@storybook/react';
import MistlockInstability from './MistlockInstability';

const meta: Meta<typeof MistlockInstability> = {
  title: 'Components/MistlockInstability',
  component: MistlockInstability,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof MistlockInstability>;

const Template: StoryFn<typeof MistlockInstability> = (args) => {
const Template: StoryFn<typeof MistlockInstability> = (args) => {
  return <MistlockInstability {...args} />;
};

export const Simple = {
  render: Template,

  args: {
    name: 'Adrenaline Rush',
  },
};
