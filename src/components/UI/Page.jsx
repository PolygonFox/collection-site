

import React from 'react';
import PropTypes from 'prop-types';


import styled from 'styled-components';
import Link from 'react-router-dom/Link';

const Header = styled.nav`
    
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};

    font-size: 22pt;
    font-weight: bold;

    line-height: 100px;


    display: grid;
    grid-template-columns: 1fr 3fr;
    

    .logo {
        padding: 0 50px;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
            display: inline;

            a {
                color: #fff;
                font-size: 12.5pt;
                text-decoration: none;
                margin: 15px;
                padding-bottom: 2px;
                color:  ${({ theme }) => theme.colors.white};   

                &:hover {
                    border-bottom: 2px solid ${({ theme }) => theme.colors.white};                
                }
            }
        }
    }
`;

const Content = styled.div`
    position: relative;
`;

const Footer = styled.footer`
    p {
        color: ${({ theme }) => theme.colors.white};
        text-align: center;
    }
`;

const StyledPage = styled.div`
    
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 100vh;
    background: ${({ theme }) => theme.colors.darkGray};
    
    font-family: 'Lato', 'sans-serif';

    /* Grid */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr 50px;
    
    ${Header}, ${Footer} {
        
    }
`;

const Page = props => (
  <StyledPage>
    <Header>
      <span className="logo">PolygonFox</span>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/snippets">Snippets</Link></li>
      </ul>
    </Header>
    <Content>
      { props.children }
    </Content>
    <Footer>
      <p>&copy; 2018 - PolygonFox</p>
    </Footer>
  </StyledPage>
);

Page.defaultProps = {
  children: null,
};

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
