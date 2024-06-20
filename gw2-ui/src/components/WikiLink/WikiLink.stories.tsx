import type { Meta, StoryFn } from '@storybook/react';
import WikiLink from './WikiLink';

const meta: Meta<typeof WikiLink> = {
  title: 'Helper Components/WikiLink',
  component: WikiLink,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof WikiLink>;

const Template: StoryFn<typeof WikiLink> = (args) => {
const Template: StoryFn<typeof WikiLink> = (args) => {
  return (
    <>
      <WikiLink {...args} />
    </>
  );
};

export const BaneSignet = {
  render: Template,

  args: {
    to: 'Bane Signet',
  },
};
