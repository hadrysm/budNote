import React from 'react';
import Button from './Button';

export default {
  title: 'Components/atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: 'try for free' };

export const Secondary = Template.bind({});
Secondary.args = { secondary: true, children: 'login' };
