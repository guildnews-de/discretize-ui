import type { Meta, StoryFn } from '@storybook/react';
import Progress from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Helper Components/Progress',
  component: Progress,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof Progress>;

const Template: StoryFn<typeof Progress> = (args) => {
const Template: StoryFn<typeof Progress> = (args) => {
  return (
    <>
      <Progress {...args} />
    </>
  );
};

export const Simple = {
  render: Template,
};
