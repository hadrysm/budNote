import React from 'react';
import Logo from './Logo';

export default {
  title: 'Components/atoms/Logo',
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: 'budNote' };
