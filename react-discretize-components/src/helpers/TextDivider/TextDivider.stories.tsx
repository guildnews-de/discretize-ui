import type { Meta, StoryFn } from '@storybook/react';
import TextDivider from './TextDivider';

const meta: Meta<typeof TextDivider> = {
  title: 'Components/TextDivider',
  component: TextDivider,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof TextDivider>;

const Template: StoryFn<typeof TextDivider> = (args) => {
const Template: StoryFn<typeof TextDivider> = (args) => {
  return <TextDivider {...args} />;
};

export const Example = {
  render: Template,

  args: {
    text: 'Test',
  },
};
