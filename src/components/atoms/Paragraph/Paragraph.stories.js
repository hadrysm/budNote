import React from 'react';
import Paragraph from './Paragraph';

export default {
  title: 'Components/atoms/Paragraph',
  component: Paragraph,
};

const Template = (args) => <Paragraph {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: `When you’re on top of your money life is good.
We help you effortlessly manage
your finances in one place.`,
};
