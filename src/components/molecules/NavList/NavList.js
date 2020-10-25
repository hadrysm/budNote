import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import routes from 'routes';
import { generateUnicId } from 'helpers';
import NavLinkItem from 'components/atoms/NavLinkItem/NavLinkItem';
import Button from 'components/atoms/Button/Button.style';
import { TransitionContext } from 'context/TransitionContextProvider';
import { useHistory } from 'react-router-dom';
import { Wrapper, StyledList, StyledListItem } from './NavList.style';

const navItemsData = [
  {
    key: generateUnicId(),
    linkPath: routes.about,
    label: 'o nas',
  },
  {
    key: generateUnicId(),
    linkPath: routes.contact,
    label: 'kontakt',
  },
];

const NavList = () => {
  const { setTransition } = useContext(TransitionContext);
  const { push } = useHistory();
  const isAuth = useSelector(({ auth }) => auth.uid) !== null;

  const handleChangeTemplate = () => {
    if (!isAuth) {
      push(routes.login);
      return;
    }
    setTransition(false);
    setTimeout(() => {
      push(routes.budget);
    }, 1800);
  };

  const listItems = navItemsData.map(({ key, linkPath, label }) => (
    <StyledListItem key={key}>
      <NavLinkItem linkPath={linkPath} label={label} />
    </StyledListItem>
  ));

  return (
    <Wrapper>
      <StyledList>
        {listItems}
        <Button onClick={handleChangeTemplate} secondary>
          {isAuth ? 'panel' : 'login'}
        </Button>
      </StyledList>
    </Wrapper>
  );
};

export default NavList;
