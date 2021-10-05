import React from "react";
import { HeroContainer, Herobg,Para,Search,Input,Navbtn,Image,Heading} from "./heroelements";

class HeroSection extends React.Component {
  

  render() {
  
    return (
      <>
       <HeroContainer id="home">
        <Herobg>
          <Heading>
          <p>Stock market analysis for the serious part-time investor</p>
          </Heading>
          <Para>
            <p>
            We use intuitive data visualizations and automated stock 
            analysis to help you understand a stock's fundamentals within
            minutes, even if you don't have a finance background.
            </p>
          </Para>
          <Search>
              <Input placeholder="Search for a Company"></Input>
              <Navbtn>Research</Navbtn>
          </Search>
          <Image src="/assets/herosection.png">
           </Image>    
        </Herobg>
      </HeroContainer>
      </>
    );
  }
}
export default HeroSection;
