import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import AppWrapper from './AppWrapper';

const AppButton = ({ title, Icon, primary, onClick, type }) => {
  return (
    <Button primary={primary} onClick={onClick} type={type}>
      <AppWrapper>
        {Icon && <Icon />}
        {title && <span>{title}</span>}
      </AppWrapper>
    </Button>
  );
};

AppButton.propTypes = {
  title: PropTypes.string,
  Icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.bool]),
  primary: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  min-height: 36px;
  padding: 0.4rem 1rem;
  margin-right: 0.5rem;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.primary ? colors.primary500 : 'transparent'};

  span {
    font-size: 0.7rem;
    font-weight: ${fonts.semibold};
    color: ${(props) => (props.primary ? colors.white : colors.black)};
  }

  .MuiSvgIcon-root {
    width: 1.2rem;
    margin-right: 0.4rem;
    fill: ${(props) => (props.primary ? colors.white : colors.black)};
  }
`;
export default AppButton;
