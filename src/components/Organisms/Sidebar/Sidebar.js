import React from 'react';

import Logo from 'components/atoms/Logo/Logo';
import LinkItem from 'components/atoms/LinkItem/LinkItem.style';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon.style';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import paymentIcon from 'assets/icons/payment.svg';
import chartIcon from 'assets/icons/chart.svg';
import routes from 'routes';
import { useAuthUser } from 'hooks/useAuthUser';
import { Wrapper, StyledButtonIcon, StyledList, StyledListItem, Header } from './Sidebar.style';

const Sidebar = () => {
  const { signout } = useAuthUser();

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
        <StyledButtonIcon icon={logoutIcon} onClick={signout} />
      </Wrapper>
    </Header>
  );
};

export default Sidebar;
