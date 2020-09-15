import React from 'react';
import Headline from './Headline';

export default {
  title: 'Components/atoms/Headline',
  component: Headline,
};

const Template = (args) => <Headline {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: `It’s all coming together`,
};

export const CustomFontSize = Template.bind({});
CustomFontSize.args = {
  children: `It’s all coming together - 6rem`,
  customFontSize: '6',
};
