

import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Link from 'react-router-dom/Link';

import BackgroundSVG from 'Assets/svg/background.svg';

const Header = styled.nav`
    
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};

    font-size: 22pt;
    font-weight: bold;

    line-height: 100px;


    display: grid;
    grid-template-columns: repeat(3, auto);
    


    .authentication {
        justify-self: end;
        padding: 0 30px;

        p {
            margin: 0;
        }

        a {
            color: white;
            text-decoration: none;
            font-size: 12.5pt;
            vertical-align: middle;
            line-height: 100px;
        }

        .italic {
            font-style: italic;
            font-size: 9pt;
            vertical-align: middle;
            line-height: 100px;
        }
    }

    .logo {
        padding: 0 50px;
        justify-self: start;
    }

    ul {
        justify-self: start;
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
    background: url(${BackgroundSVG});
    background-size: 33.333%;
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
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/snippets">Snippets</Link></li>
      </ul>

      <div className="authentication">
        <p><Link to="/login">Login</Link> <span className="italic">or</span> <Link to="/sign-up">Sign-up</Link></p>
      </div>
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
