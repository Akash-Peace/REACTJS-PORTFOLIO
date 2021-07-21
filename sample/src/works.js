import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import CountUp from 'react-countup';
import './works.css';
const Works = () => {
    const [data, setData] = useState([]);
    const getData = () => {
        fetch('https://api.github.com/users/Akash-Peace', { 
                        headers: {
                            'Accept' : 'application/vnd.github.v3+json'
                        }})
                .then(response => {return response.json()})
                .then( data => {setData(data.public_repos)})
                .catch( error => console.error(error));
    };
    useEffect(()=>{getData()}, []);
    return(
        <>
        <div className='done'><h1>I have done projects with <span style={{ color: 'purple' }}>Computer Vision</span>, <span style={{ color: 'green' }}>Web App</span> / <span style={{ color: 'red' }}>Mobile App</span> / <span style={{ color: 'orange' }}>Software development</span>, <span style={{ color: 'violet' }}>ML/DL</span> and <span style={{ color: 'blue' }}>IoT</span>.</h1><br></br>
        <h1><DoubleArrowRoundedIcon style={{color: 'gray'}}/>Check it out, here</h1></div>
        <a style={{ textDecoration: 'none' }} href='https://github.com/Akash-Peace'>
        <Button
            variant="outlined"
            className='gitbut'
            size="large"
            startIcon={<GitHubIcon style={{fontSize: 60}} />}
        >
            <h1 style={{fontFamily: 'Quicksand'}}>&nbsp;<CountUp start={0} end={data} duration={5} />&nbsp;
            Projects</h1>
        </Button></a>
        <div className='resume'><h1><DoubleArrowRoundedIcon style={{color: 'gray'}}/>Resume</h1></div>
        <a style={{ textDecoration: 'none' }} href='https://www.linkedin.com/in/akash-2000-cse/'>
        <Button
            variant="outlined"
            className='gitbut'
            size="large"
            startIcon={<LinkedInIcon style={{fontSize: 70}} />}
        >
            <h1 style={{fontFamily: 'Quicksand'}}>LinkedIn</h1>
        </Button></a>
        <div className='resume'><h1><DoubleArrowRoundedIcon style={{color: 'gray'}}/>Services</h1></div>
        <a style={{ textDecoration: 'none' }} href='https://pypi.org/user/Akash-Peace/'>
        <Button
            variant="outlined"
            className='gitbut'
            size="large"
            startIcon={<InsertDriveFileIcon style={{fontSize: 70}} />}
        >
            <h1 style={{fontFamily: 'Quicksand'}}>&nbsp;<CountUp start={0} end={7} duration={5} />&nbsp;
            Pypi</h1>
        </Button></a>
        <p>&nbsp;</p>
        </>
    )
}
export default Works