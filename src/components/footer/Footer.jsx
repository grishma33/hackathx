/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Box,Container,Row,Column,FooterLink,Heading} from "./FooterStyles";
// import fbimage from '../../assets/images/Facebook.svg';
// import instaimage from '../../assets/images/Instagram.svg';
// import twitterimage from '../../assets/images/Twitter.svg';
// import mailimage from '../../assets/images/Mail.svg';
import './Footer.css'

const Footer = () => {
    return (
      <>
        <Box>
            <Container>
                <Row>
                    <Column>
                    <Heading>COMMITED TO QUALITY</Heading>
                    <h6>
                    We believe in providing the best quality in any of our services. we as a plateform understands our users very well and dedicate whole bunch of opportunities to learn and grow
                    </h6>
                    </Column>
                    <Column >
                    <Heading>STAY CONNECTED</Heading>
                    {/* <FooterLink href="#">
                        
                            <img className='fb'
                                src={fbimage}
                            />
            
                        
                    </FooterLink>

                    <FooterLink href="#">
                        
                            <img className='insta'
                                src={instaimage}
                            />
            
                        
                    </FooterLink>
                    <FooterLink href="#">
                        
                            <img className='twitter'
                                src={twitterimage}
                            />
            
                        
                    </FooterLink>
                    <FooterLink href="#">
                        
                            <img className='mail'
                                src={mailimage}
                            />
            
                        
                    </FooterLink> */}


                    

                    <FooterLink href="#">
                        <i className="fab fa-facebook">
                        <span style={{ marginLeft: "10px" }}>
                            Facebook
                        </span>
                        </i>
                    </FooterLink>
                    
                     <FooterLink href="#">
                        <i className="fab fa-instagram">
                        <span style={{ marginLeft: "10px" }}>
                            Instagram
                        </span>
                        </i>
                    </FooterLink>
                    <FooterLink href="#">
                        <i className="fab fa-twitter">
                        <span style={{ marginLeft: "10px" }}>
                            Twitter
                        </span>
                        </i>
                    </FooterLink>
                    <FooterLink href="#">
                        <i className="fab fa-email">
                        <span style={{ marginLeft: "10px" }}>
                            Email
                        </span>
                        </i>
                    </FooterLink>
                    </Column>
                    <Column>
                    <Heading>CONTACT US</Heading>
                        <h6>
                            (Main) + 91 9099337851<br/>
                            (Support) +91 9016362087
                        </h6>
                    </Column>
                </Row>
            </Container>
        </Box>
        </>
  );
};

export default Footer;