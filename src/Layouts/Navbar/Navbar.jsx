import React, { useEffect, useState, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { auth } from '../../Utils/Firebase';
import { connect } from 'react-redux';
import CartIcon from '../../Components/Navbar/CartIcon/CartIcon';
import { createStructuredSelector } from 'reselect';
import { SelectCurrentUser } from '../../Redux/User/UserSelectors';
import LogoImage from '../../Assets/Images/logo.png';
import {
  NavbarContainer,
  ToolbarContainer,
  Hamburger,
  Logo,
  DesktopMenu,
  Grow,
  NavbarMenu,
  SvgIcon,
  SearchSignin,
  Profile,
  MenuContainer,
  Menu
} from './Navbar.Style';
import PropTypes from 'prop-types';

const Navbar = ({ Container, history, currentUser }) => {
  const [getShowNav, setShowNav] = useState(true);
  const [getNavScrollDown, setNavScrollDown] = useState(false);
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    let windowOffset = 0;
    window.onscroll = () => {
      let currentScroll = window.scrollY;
      if (currentScroll > 70) {
        setShowNav(false);
        if (currentScroll < windowOffset) {
          setNavScrollDown(true);
        } else {
          setNavScrollDown(false);
        }
      } else {
        setShowNav(true);
      }
      windowOffset = window.pageYOffset;
    };
    //TODO: profile image i need to change this image later
    currentUser
      ? setProfileImage(currentUser.photoURL)
      : setProfileImage('https://image.flaticon.com/icons/png/512/64/64572.png');
  }, [currentUser]);

  return (
    <Fragment>
      <NavbarContainer getshownav={getShowNav ? 1 : 0} getnavscrolldown={getNavScrollDown ? 1 : 0}>
        <Container>
          <ToolbarContainer>
            <Hamburger disableRipple disableFocusRipple aria-label='Menu' edge='start'>
              <SvgIcon viewBox='0 0 24 24'>
                <path stroke='none' d='M0 0h24v24H0z' />
                <line x1='4' y1='6' x2='20' y2='6' />
                <line x1='4' y1='12' x2='20' y2='12' />
                <line x1='4' y1='18' x2='20' y2='18' />
              </SvgIcon>
            </Hamburger>
            <Logo src={LogoImage} alt='logo' />
            <Grow />
            <DesktopMenu>
              <NavbarMenu variant='h6' component={Link} to='/'>
                HOME
              </NavbarMenu>
              <NavbarMenu>NEW ARRIVALS</NavbarMenu>
              <NavbarMenu variant='h6' component={Link} to='/shop'>
                SHOP
              </NavbarMenu>
              <NavbarMenu>ABOUT</NavbarMenu>
              <NavbarMenu>FAQS</NavbarMenu>
              <NavbarMenu>CONTACT</NavbarMenu>
              <SearchSignin disableRipple disableFocusRipple aria-label='Search' title='Search'>
                <SvgIcon viewBox='0 0 24 24'>
                  <path stroke='none' d='M0 0h24v24H0z' />
                  <circle cx='10' cy='10' r='7' />
                  <line x1='21' y1='21' x2='15' y2='15' />
                </SvgIcon>
              </SearchSignin>
              {currentUser ? (
                currentUser.photoURL ? (
                  <Profile disableRipple disableFocusRipple aria-label='Current User'>
                    <img
                      src={profileImage}
                      alt='User'
                      title={currentUser.displayName}
                      onError={() =>
                        setProfileImage('https://image.flaticon.com/icons/png/512/64/64572.png')
                      }
                    />
                    <MenuContainer>
                      <Menu>
                        <li onClick={() => history.push('/profile')}>MY PROFILE</li>
                        <li onClick={() => auth.signOut()}>SIGN OUT</li>
                      </Menu>
                    </MenuContainer>
                  </Profile>
                ) : (
                  <Profile disableRipple disableFocusRipple aria-label='Current User'>
                    <img src='https://image.flaticon.com/icons/png/512/64/64572.png' alt='User' />
                    <MenuContainer>
                      <Menu>
                        <li onClick={() => history.push('/profile')}>MY PROFILE</li>
                        <li onClick={() => auth.signOut()}>SIGN OUT</li>
                      </Menu>
                    </MenuContainer>
                  </Profile>
                )
              ) : (
                <SearchSignin
                  disableRipple
                  disableFocusRipple
                  aria-label='Signin'
                  component={Link}
                  to='/signin'>
                  <SvgIcon viewBox='0 0 24 24'>
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <circle cx='12' cy='7' r='4' />
                    <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
                  </SvgIcon>
                </SearchSignin>
              )}
              <CartIcon getShowNav={getShowNav} getNavScrollDown={getNavScrollDown} />
            </DesktopMenu>
          </ToolbarContainer>
        </Container>
      </NavbarContainer>
    </Fragment>
  );
};

Navbar.propTypes = {
  Container: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  currentUser: PropTypes.object
};

// We will use creaTeStructuredSelector if we have more selectors to call
const mapStateToProps = createStructuredSelector({
  currentUser: SelectCurrentUser
});

// const mapStateToProps = state => ({
//   currentUser: SelectCurrentUser(state)
// });

// const mapStateToProps = ({ User: { currentUser } }) => ({
//   currentUser
// });

export default withRouter(connect(mapStateToProps)(Navbar));
