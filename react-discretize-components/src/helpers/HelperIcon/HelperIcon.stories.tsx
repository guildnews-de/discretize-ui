import type { Meta, StoryFn } from '@storybook/react';
import HelperIcon from './HelperIcon';

const meta: Meta<typeof HelperIcon> = {
  title: 'Components/HelperIcon',
  component: HelperIcon,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof HelperIcon>;

const Template: StoryFn<typeof HelperIcon> = (args) => {
const Template: StoryFn<typeof HelperIcon> = (args) => {
  return <HelperIcon {...args} />;
};

export const Example = {
  render: Template,

  args: {
    text: 'Test-Helper',
  },
};
