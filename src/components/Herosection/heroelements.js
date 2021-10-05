import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FAFBFF;
  height: 800px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 768px) {
      height: 750px;
      padding-top:0px;
  }
`;

export const Herobg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Montserrat, Verdana, sans-serif;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-top: 50px;
  p{
      text-align: center;
      @media screen and (max-width: 768px) {
            text-align: left;
        }
  }
  @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
  }
`;

export const Para = styled.div`
  display: flex;
  justify-content: center;
  width: 587px;
  color: #A4A9B2;
  height: 126px;
  opacity: 1;
  font-size: 20px;
  line-height: 26px;

  @media screen and (max-width: 768px) {
   margin-top: 200px;
    width:200px;
  }
`;


export const Heading = styled.div`
  display: flex;
  width: 700px;
  color: #000;
  height: 200px;
  opacity: 1;
  font-size: 44px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    width:200px;
  }
`;


export const Search=styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: spac; */
    justify-content: center;
    margin-top:50px;
    @media screen and (max-width: 768px) {
     margin-top: 150px;
    }
`

export const Input=styled.input`
    display: flex;
    flex-direction: row;
    height: 50px;
    width:300px;
    border-radius: 4px;
    font-size: 20px;
    @media screen and (max-width: 768px) {
     width:50px;
    }
`
export const Navbtn = styled.nav`
  display: flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  height:42px;
  padding:8px 22px;
  color:#fff;
  border-radius: 2px;
  background-color: #456BCA;
  margin-left: 20px;
`;

export const Image= styled.img`
  height: 400px;
  width:100%;
  margin-top:30px;


  @media screen and (max-width: 768px) {
    display: none;
  }
`;