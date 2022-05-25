import React from "react";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";

const Footer = () => {
    return ( 
      <footer style={{
          width:"100%",
          height:"56px",
          backgroundColor:"rgb(8, 35, 69)",
          display:"flex",
          alignItems:"center",
          position:"fixed",
          bottom:"0px"
      }}>
          <Container>
              <span>
                  <strong style={{color:"white"}}>&copy; WeTorrent</strong>
                  &nbsp;&nbsp;&nbsp;
                  <Link to="/about" style={{ textDecoration: 'none',marginLeft:'50px'}}>About</Link>
              </span>
          </Container>
      </footer>
     );
}
 
export default Footer;

