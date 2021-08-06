import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

const SectionHomeStc = styled(Container)`
    
    margin: 100px 0;
    text-align: start;
    box-sizing: border-box;
    
  min-height: 100vh;

    .row{
        flex-wrap: nowrap;
        width: 100%;
    }
    
  /*background-color: ${(props) => props.bg || "#fff"};
  width: ${(props) => props.largeur || "100%"};
  height: ${(props) => props.hauteur || "80%"};
  border-radius: ${(props) => props.border__raduis|| "4px"};*/

  .col-1{
    flex-basis: 40%;
    margin-left: 5rem;
}

.col-1 h3{
    font-size: 28px;
    color: #707070;
    font-weight: 100;
    margin: 20px 0 10px;
}

.col-1 p{
    font-size: 16px;
    color: #b7b7b7;
    font-weight: 100;
    margin: 20px 0 10px;
}

button{
    width: 140px;
    border: 0;
    padding: 12px 10px;
    outline: none;
    color: #fff;
    background: linear-gradient(to right, #fb5283, #ff3527);
    cursor: pointer;
    border-radius: .4rem;
    transition: width 1s;
}

.icon{
    display: none;
}

button:hover .icon{
    display: block;
}
button:hover{
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.col-1::after{
    content: '';
    width: 8px;
    height: 62%;
    background: linear-gradient(#ff469f, #ff6062);
    display: inline-flex;
    align-items: flex-start;
    position: relative;
    left: -11rem;
    top: -21.6rem;
    overflow: hidden;
}

.col-2{
    position: relative;
    flex-basis: 60%;
    display: flex;
    align-items: center;
    overflow: hidden;
}

.col-2 .manette{
    width: 60%;
    hoverflow: hidden;
}

.manette-box{
    position: absolute;
    right: 0;
    top: 0;
    background: linear-gradient(#ff54a2, #ff575a);
    border-radius: 20px 0 0 20px;
    height: 100%;
    width: 100%;
    z-index: -1;
    transform: translateX(140px);
}

.add-btn .icon_btn{
    width: 35px;
    margin-bottom: 5px;
}

.add-btn{
    text-align: center;
    color: #fff;
    cursor: pointer;
}

.social-links .icons{
    height: 13px;
    margin: 20px;
    cursor: pointer;
}

.social-links{
    text-align: center;
}

@media only screen and (max-width:700px){
    .row{
        flex-direction: column-reverse;
        margin: 50px 0;
    }
    .col-1{
        width: initial;
        margin: auto;
    }
    .col-2{
        flex-basis: 100%;
        margin-bottom: 50px;
        width: -webkit-fill-available;
    }
    .col-2 .manette{
        width: 77%;
    }
} 

`;
export default SectionHomeStc;