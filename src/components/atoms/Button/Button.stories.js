import React from 'react';
import Button from './Button';

export default {
  title: 'Components/atoms/Button',
  component: Button,
};

// export const Primary = () => <Button>try for free</Button>;
// export const Secondary = () => <Button secondary>login</Button>;

// Button.stories.js

// We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

// Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { children: 'try for free' };

export const Secondary = Template.bind({});
Secondary.args = { secondary: true, children: 'login' };
