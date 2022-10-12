import { Meta, StoryObj } from '@storybook/react';
import { Center, CenterProps } from './Center';
import { Text } from './Text';

export default {
  title: 'Components/Center',
  component: Center,
  args: {
    children: <Text>lorem ipsum</Text>,
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
  },
} as Meta<CenterProps>;

export const Default: StoryObj<CenterProps> = {};
