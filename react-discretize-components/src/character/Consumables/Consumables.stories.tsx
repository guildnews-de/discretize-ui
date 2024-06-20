import type { Meta, StoryFn } from '@storybook/react';
import Consumables from './Consumables';

const meta: Meta<typeof Consumables> = {
  title: 'Character/Consumables',
  component: Consumables,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof Consumables>;

const Template: StoryFn<typeof Consumables> = (args) => {
const Template: StoryFn<typeof Consumables> = (args) => {
  return <Consumables {...args} />;
};

export const Example = {
  render: Template,

  args: {
    foodId: 91805,
    utilityId: 50082,
  },
};
