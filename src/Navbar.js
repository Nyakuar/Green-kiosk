import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        
  
        <NavMenu>
          <NavLink to='/products' activeStyle>
            Products
          </NavLink>
          <NavLink to='/vegetables' activeStyle>
            Vegetables
          </NavLink>
          <NavLink to='/fruits' activeStyle>
            Fruits
          </NavLink>
          <NavLink to='/' activeStyle>
            Login
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>

      </Nav>
    </>
  );
};
  
export default Navbar;