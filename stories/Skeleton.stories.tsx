import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Skeleton } from '../components/Plugins';

export default {
  title: 'Example/Skeleton',
  component: Skeleton,
  argTypes: {
    // grid: { control: 'color' }
  }
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const GreySkeleton = Template.bind({});
GreySkeleton.args = {
  grid: {
    children: [
      {
        skeletons: [{ w: '100%', h: '100px' }]
      }
    ]
  }
};
