import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import SectionHomeStc from './sectionHome.stc';
import Title from '../../atomes/Title';
import { AiOutlineArrowRight, AiOutlinePlusCircle, AiOutlineInstagram } from 'react-icons/ai';
import { Button } from 'reactstrap';
import ManPs from '../../../img/ManPs.png';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

    
    const SectionHome = (props) => {

      return (
    <SectionHomeStc>
        <div className="row d-flex justify-content-space-between">
            <div className="col-1 col-md-6">
                <Title
                    coulor="#000"
                    text__transform="text-capitalize"
                    weight="smaler"
                    font__size="54px"
                    text={
                        <span>
                            PS4 V2 <strong>Dualshock 4</strong>
                        </span>
                    }
                />
                <h3>Wireless Controller for PlayStation 4</h3>
                <p>(Compatible/Generic)</p>
                <h4>$32.50</h4>
                <Button type="button">Buy Now <AiOutlineArrowRight className='icon' size={30}/></Button>
            </div>
            <div className="col-2 col-md-6">
                <img src={ManPs} className="manette" width="20px" alt="Commandes" />
                <div className='manette-box d-flex'></div>
                <div className='add-btn'>
                    <AiOutlinePlusCircle className='icon_btn' size={40}/>
                    <p className='text-align-center'><strong>Add to Cart</strong></p>
                </div>
            </div>
            </div>

            <div className='row'>
                <div className='social-links'>
                    <FaFacebookF className='icons' />
                    <FaTwitter className='icons' />
                    <AiOutlineInstagram className='icons' />
                </div>
            </div>          
        
        </SectionHomeStc>
      );
    }
    
    export default SectionHome;