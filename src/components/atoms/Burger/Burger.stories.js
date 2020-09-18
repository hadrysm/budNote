import React from 'react';

// import { motion } from 'framer-motion';

// import Navigation from 'components/Organisms/Navigation/Navigation';
import Burger from './Burger';

export default {
  title: 'Components/atoms/Burger',
  component: Burger,

  // decorators: [
  //   (Story) => {
  //     const [isMenuVisible, setMenuVisibility] = useState(false);

  //     const handleBurgerClick = () => setMenuVisibility((prevState) => !prevState);
  //     return (
  //       <motion.div initial={false} animate={isMenuVisible ? 'open' : 'closed'}>
  //         <Story />
  //       </motion.div>
  //     );
  //   },
  // ],
};

const Template = (args) => <Burger {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  handleClick: () => {},
};
