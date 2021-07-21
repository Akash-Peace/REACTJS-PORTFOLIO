import React from 'react';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import Popup from "reactjs-popup";
import './about.css'

const About = () => {
    return(
        <>
        <div className='me'><h1>Hi, I'm a Computer Science Engineer, &#128206; <Popup trigger={<a name='Series_list' href='#Series_list' style={{color: 'tomato', textDecoration: 'none'}}>Series </a>} 
        position="bottom center"><div className='pop'><h4>Watched Series: </h4>Stranger Things, The Mist, The Rain, The Society, The End of the World, Dark, The OA, The 100,
         12 Monkeys, Money Heist, GOT, Never Have I Ever, Vikings, Lost, ATLA, The Legend of Korra, Anne with an E.</div></Popup>
         binger and there is nothing more to tell about me &#128578;. I hope you got about who I am with this mini portfolio. Liked? Follow me.</h1></div>
        <Button disabled
            className='label'
            size="large"
            startIcon={<AlternateEmailIcon style={{fontSize: 30, color: 'gray'}} />}
        >
            <h3 style={{ fontFamily: 'Quicksand', textTransform: 'lowercase', color: 'black'}}>akashcse2000@gmail.com</h3>
        </Button>
        <Button disabled
            className='label'
            size="large"
            startIcon={<PhoneIphoneIcon style={{fontSize: 30, color: 'gray'}} />}
        >
            <h3 style={{ fontFamily: 'Quicksand', textTransform: 'lowercase', color: 'black'}}>8608550403</h3>
        </Button>
        <Button disabled
            className='label'
            size="large"
            startIcon={<LocationOnIcon style={{fontSize: 30, color: 'gray'}} />}
        >
            <h3 style={{ fontFamily: 'Quicksand', textTransform: 'capitalize', color: 'black'}}>Chennai, India</h3>
        </Button>
        <p style={{paddingTop: '3px'}}></p>
        <a style={{ textDecoration: 'none' }} href='https://www.instagram.com/nocturnal_lad/'>
        <Button
            className='label'
            size="large"
            startIcon={<InstagramIcon style={{fontSize: 90, color: 'black'}} />}
        >
        </Button></a>
        <a style={{ textDecoration: 'none' }} href='https://www.facebook.com/profile.php?id=100061841000593'>
        <Button
            className='label'
            size="large"
            startIcon={<FacebookIcon style={{fontSize: 90, color: 'black'}} />}
        >
        </Button></a>
        <a style={{ textDecoration: 'none' }} href='https://twitter.com/AkashA53184506'>
        <Button
            className='label'
            size="large"
            startIcon={<TwitterIcon style={{fontSize: 90, color: 'black'}} />}
        >
        </Button></a>
        </>
    )
}
export default About