import React from "react";

import {
  Nav,
  NavMenu,
  Navbtn,
  NavContainer,
  NavItem,
  NavB,
  Background
  // LogoLink,
} from "./navbarelements";



class Navbar extends React.Component {
  

  render() {
  
    return (
      <>
       <Nav>
        <NavContainer>
        
            <Background
              src="/assets/LOGO_OF_LOGO.svg"
              alt=""
            />
          <NavMenu>
            <NavItem>
                <NavB>
                About
                </NavB>
            </NavItem>

            <NavItem>
            <NavB>Screener</NavB>
            </NavItem>

            <NavItem>
              <NavB>Stock Ideas</NavB>
            </NavItem>

            <NavItem>
            <NavB>Sign In</NavB>
            </NavItem>
            <Navbtn>Sign Up</Navbtn>
          </NavMenu>
        </NavContainer>
      </Nav>
      </>
    );
  }
}
export default Navbar;
