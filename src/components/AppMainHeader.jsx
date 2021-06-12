import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import fonts from '../styles/fonts';
import colors from '../styles/colors';

const AppMainHeader = ({ title, description }) => {
  return (
    <div>
      <Header>
        <h2>{title}</h2>
        <p>{description}</p>
      </Header>
    </div>
  );
};

AppMainHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

const Header = styled.header`
  h2 {
    font-size: 2.5rem;
    font-weight: ${fonts.semibold};
  }
  p {
    color: ${colors.gray};
  }
`;

export default AppMainHeader;
