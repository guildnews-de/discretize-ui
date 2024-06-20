import type { Meta, StoryFn } from '@storybook/react';
import Boon from './Boon';

const meta: Meta<typeof Boon> = {
  title: 'Components/Boon',
  component: Boon,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof Boon>;

const Template: StoryFn<typeof Boon> = (args) => {
const Template: StoryFn<typeof Boon> = (args) => {
  return <Boon {...args} />;
};

export const BoonMight = {
  render: Template,

  args: {
    name: 'Might',
  },
};
