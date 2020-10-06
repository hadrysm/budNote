import React, { useContext } from 'react';

import LinkItem from 'components/atoms/LinkItem/LinkItem.style';
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
        <StyledList>
          <StyledListItem>
            <LinkItem to={routes.budget}>
              <StyledButtonIcon icon={paymentIcon} />
            </LinkItem>
          </StyledListItem>
          <StyledListItem>
            <LinkItem to={routes.chart}>
              <StyledButtonIcon icon={chartIcon} />
            </LinkItem>
          </StyledListItem>
          <StyledListItem>
            <LinkItem to={routes.notes}>
              <StyledButtonIcon icon={penIcon} />
            </LinkItem>
          </StyledListItem>
          <StyledListItem>
            <LinkItem to={routes.notes}>
              <StyledButtonIcon icon={logoutIcon} onClick={handleSignout} />
            </LinkItem>
          </StyledListItem>
        </StyledList>
      </Wrapper>
    </Header>
  );
};

export default Sidebar;
