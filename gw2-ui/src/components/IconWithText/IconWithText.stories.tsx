import type { Meta, StoryFn } from '@storybook/react';
import IconWithText from './IconWithText';

const meta: Meta<typeof IconWithText> = {
  title: 'Helper Components/IconWithText',
  component: IconWithText,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof IconWithText>;

const Template: StoryFn<typeof IconWithText> = (args) => {
const Template: StoryFn<typeof IconWithText> = (args) => {
  return (
    <>
      <IconWithText {...args} />
    </>
  );
};

export const BaneSignet = {
  render: Template,

  args: {
    icon: 'https://render.guildwars2.com/file/9FF294A9CC489D4FE8CED934A0C4359964B67443/103638.png',
    text: 'Bane Signet',
  },
};

export const Loading = {
  render: Template,

  args: {
    loading: true,
  },
};
