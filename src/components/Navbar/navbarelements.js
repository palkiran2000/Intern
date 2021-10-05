import styled from "styled-components";

export const Nav = styled.nav`
  background: #fff;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
  position: sticky;
  top: 0;
`;

export const NavContainer = styled.div`
  display: flex;
  height: 89px;
  z-index: 1;
  width: 100%;
  font-size: 18px;
  margin-left: 200px;
`;

export const Background = styled.img`
  height: 70px;
  padding-top: 26px;
  position: relative;
  margin-left: 50px;

  @media screen and (max-width: 768px) {
    width: 50vw;
    left:-180px;
  }
`;



export const NavB = styled.text`
  color: #1d252b;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: normal;
`;


export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  margin-left:100px;
  list-style-type: none;
  @media screen and (max-width: 768px) {
  display:none;
  }
`;

export const NavItem = styled.li`
  display:flex;
  height: 89px;
  position: relative;
  align-items: center;
  margin-right: 50px;
  margin-left: 0px;

  @media screen and (max-width: 768px) {
    left: 0px;
  }
`;




export const Navbtn = styled.nav`
  display: flex;
  position: relative;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  height:25px;
  padding:8px 22px;
  color:#fff;
  border-radius: 4px;
  /* margin-top:28px; */
  background-color: #456BCA;
  /* margin-right:750px; */
  

  @media screen and (max-width: 768px) {
    display: none;
  }
`;




