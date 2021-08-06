import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';

const NavBarStc = styled(Nav)`
    
  //background-color: ${(props) => props.bg || "#fff"};
  width: ${(props) => props.largeur || "100%"};
  height: ${(props) => props.hauteur || "80%"};
  display: flex;
  align-items: center;
  
  //flex-grow: 1;


  .nav-text {
    width: 100%!important;
    display: inline-flex;
    //justify-content: space-around!important;
    padding-left: 24rem;
  }

  .navbar-light .navbar-nav .nav-link{
    color: #000;
    font-size: 14px;
}

.navbar-light .navbar-nav .nav-link:hover{
    color: red;
    transition: .4s;
}
.navbar-toggler {
    position: fixed;
    right: 0!important;
    margin-right: 1rem;
}

`;
export default NavBarStc;