import React, { useContext } from 'react';

import Logo from 'components/atoms/Logo/Logo';
import LinkItem from 'components/atoms/LinkItem/LinkItem.style';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon.style';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import paymentIcon from 'assets/icons/payment.svg';
import chartIcon from 'assets/icons/chart.svg';
import routes from 'routes';
import { AuthContext } from 'context/AuthContext';
import { Wrapper, StyledButtonIcon, StyledList, StyledListItem, Header } from './Sidebar.style';

const Sidebar = () => {
  const { handleSignout } = useContext(AuthContext);

  return (
    <Header>
      <Wrapper>
        <Logo label="budNote" path={routes.notes} />
        <StyledList>
          <StyledListItem>
            <LinkItem to={routes.budget}>
              <ButtonIcon icon={paymentIcon} />
            </LinkItem>
          </StyledListItem>
          <StyledListItem>
            <LinkItem to={routes.chart}>
              <ButtonIcon icon={chartIcon} />
            </LinkItem>
          </StyledListItem>
          <StyledListItem>
            <LinkItem to={routes.notes}>
              <ButtonIcon icon={penIcon} />
            </LinkItem>
          </StyledListItem>
        </StyledList>
        <StyledButtonIcon icon={logoutIcon} onClick={handleSignout} />
      </Wrapper>
    </Header>
  );
};

export default Sidebar;
