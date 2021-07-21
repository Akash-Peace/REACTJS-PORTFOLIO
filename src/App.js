import react, {useState} from 'react';
import './App.css';
import {Navbar, Nav, Card, Carousel} from 'react-bootstrap'
import mypic from './akash.png'
import Wave from 'react-wavify'
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";
import { scroller } from 'react-scroll'

function App() {
  const project_details = new Array(['https://github.com/Akash-Peace/REACTJS-FIREBASE/blob/main/Screenshot/BP_mobile_classic_mode.png?raw=true', 'https://github.com/Akash-Peace/REACTJS-FIREBASE/raw/main/Screenshot/BingersPlayLogo.png', 'BINGERS PLAY', 'A Reactjs Webapp', "Bingers Play project objective is to showcase user's watched movies and series list with their perspective via the webapp.", 'https://bingers-play.web.app/', 'https://github.com/Akash-Peace/REACTJS-FIREBASE', 'v'],
                                    ['https://github.com/Akash-Peace/AR-VIDEO/blob/main/screenshots/ARV_output4.png?raw=true', 'https://github.com/Akash-Peace/AR-VIDEO/raw/main/screenshots/AR_Video_logo.png', 'AR VIDEO', 'A Python Library', "AR Video project objective is to make a Augmented Reality based virtual video.", 'https://www.youtube.com/watch?v=NDMQut1VcB8', 'https://github.com/Akash-Peace/AR-VIDEO', 'h'],
                                    ['https://github.com/Akash-Peace/FIREBASE-ANDROIDSTUDIO/blob/main/screenshots/9-dark_mode.jpg?raw=true', 'https://github.com/Akash-Peace/FIREBASE-ANDROIDSTUDIO/raw/main/drawable/tent.png', 'EVENT BOOKER', 'Android Studio App', 'Event Booker project objective is to create and participate in events.', 'https://drive.google.com/file/d/1fOo9mwI7Qe7AYYuPR31_liXdXGdyxBm7/view', 'https://github.com/Akash-Peace/FIREBASE-ANDROIDSTUDIO', 'v'],
                                    ['https://github.com/Akash-Peace/IOT-PI-DL/blob/main/Screenshots/2021-03-27%2009:34:42.906453.jpg?raw=true', 'https://github.com/Akash-Peace/IOT-PI-DL/raw/main/Screenshots/theft_detector_logo.png', 'THEFT DETECTOR', 'IoT . Raspberry Pi', 'Theft detector project objective is to track the surveillance area and alert the user if any movement is detected.', 'github.com/akash-peace/iot-pi-dl/tree/main/documentations', 'https://github.com/Akash-Peace/IOT-PI-DL', 'h'],
                                    ['https://github.com/Akash-Peace/ML-CHATBOT/blob/master/Screenshots/Beccabot-infos.jpg?raw=true', 'https://github.com/Akash-Peace/ML-CHATBOT/raw/master/beccaboticon.png', 'BECCA BOT', 'A Discord Chatbot', 'Becca Bot project objective is to make a bot chat with users and help them by transferring information about what they ask.', 'https://discord.com/invite/aWwZDR8MVm', 'https://github.com/Akash-Peace/ML-CHATBOT', 'v'],
                                    ['https://github.com/Akash-Peace/INDUSTRIAL-WEBSITE/blob/main/Screenshots/ssi-homepage.png?raw=true', 'https://github.com/Akash-Peace/INDUSTRIAL-WEBSITE/raw/main/templates/ssititlelogo.png', 'SRI SAI INDUSTRIES', 'A Static Website', 'Sri Sai Industries project objective is to showcase their industrial products via the website.', 'https://srisaiindustriesinchennai.web.app/', 'https://github.com/Akash-Peace/INDUSTRIAL-WEBSITE', 'h'],
                                    ['https://github.com/Akash-Peace/FACE-RECOGNITION/blob/main/output_imgs_&_vdos/fr_arya_with_grp.jpg?raw=true', 'https://github.com/Akash-Peace/FACE-RECOGNITION/raw/main/testing_imgs/fr_logo.png', 'AJ FACE RECOGNIZER', 'A Face Recognition System', 'AJ Face Recognizer project objective is to make a face recognizing model from own dataset of two faces.', 'https://www.youtube.com/watch?v=i2S8GCwqooY', 'https://github.com/Akash-Peace/FACE-RECOGNITION', 'h'],
                                    ['https://github.com/Akash-Peace/CV-SHAPE-COLOR-DETECTION/blob/main/screenshots/vs_output3.png?raw=true', 'https://github.com/Akash-Peace/CV-SHAPE-COLOR-DETECTION/raw/main/screenshots/Virtual_sketch_logo.png', 'VIRTUAL SKETCH', 'A Python Library', 'Virtual Sketch project objective is to make a drawing tab that can be controllable by hand movement.', 'https://www.youtube.com/watch?v=-f0HSaFVn4w', 'https://github.com/Akash-Peace/CV-SHAPE-COLOR-DETECTION', 'h'],
                                    ['https://github.com/Akash-Peace/TEXT-RECOGNITION/blob/main/Screenshots/tr_output_2.png?raw=true', 'https://github.com/Akash-Peace/TEXT-RECOGNITION/raw/main/Dataset/tr_logo.png', 'TEXT RECOGNIZER', 'Optical Character Recognition System', 'Text Recognizer project objective is to make a text recognising model with Tesseract-OCR.', 'https://vimeo.com/546017900', 'https://github.com/Akash-Peace/TEXT-RECOGNITION', 'h'],
                                    ['https://github.com/Akash-Peace/ANDROIDSTUDIO-GAME/blob/main/Screenshots/XO-play.jpg?raw=true', 'https://github.com/Akash-Peace/ANDROIDSTUDIO-GAME/raw/main/XO_app_icon.png', 'XO', 'Android Studio App', 'XO project objective is to initiate a playable game between user and computer.', 'https://drive.google.com/file/d/1QkP4m2DsjfI8AGd4S1L9L4wHXeKlUTro/view', 'https://github.com/Akash-Peace/ANDROIDSTUDIO-GAME', 'v'],
                                    ['https://github.com/Akash-Peace/OPENCV-KIVY-WINDOWSAPP/blob/main/Screenshots/4-Justwink-result.png?raw=true', 'https://github.com/Akash-Peace/OPENCV-KIVY-WINDOWSAPP/raw/main/images/winkicon.png', 'JUST WINK', 'A Kivy Windows App', 'Just Wink project objective is to detect & count how many members are in front of the camera and it detects wink.', 'https://drive.google.com/file/d/1lnDRZlmfm5E2U3aLnVL1h4zDeL7Z4Yfa/view', 'https://github.com/Akash-Peace/OPENCV-KIVY-WINDOWSAPP', 'h'],
                                    ['https://github.com/Akash-Peace/KIVY-PLYER-ANDROIDAPP/blob/main/Screenshots/Disco-bulb.jpg?raw=true', 'https://github.com/Akash-Peace/KIVY-PLYER-ANDROIDAPP/raw/main/images/disco_icon.png', 'DISCO', 'A Kivy Android App', 'Disco project objective is to make a flash light app with multiple functions.', 'https://drive.google.com/file/d/14L7Qs4PUK-1w3C_nfr8vK7PbeL0edX8P/view', 'https://github.com/Akash-Peace/KIVY-PLYER-ANDROIDAPP', 'v'],
                                    ['https://github.com/Akash-Peace/DJANGO-WEBAPP/blob/master/Screenshots/friender-result.png?raw=true', 'https://camo.githubusercontent.com/34bbc8e885b221d0ead50394dd0be9ba9491cafd3fe7e2bbc407818f72c12753/68747470733a2f2f69636f6e2d6c6962726172792e6e65742f2f696d616765732f667269656e64732d69636f6e2d706e672f667269656e64732d69636f6e2d706e672d352e6a7067', 'FRIENDER', 'A Django Web Application', 'Friender project objective is to find friends based on your favorites of whoever registered on friender website.', 'https://friender.pythonanywhere.com/', 'https://github.com/Akash-Peace/DJANGO-WEBAPP', 'h'],
                                    ['https://github.com/Akash-Peace/CV-MOVEMENT-DETECTION/blob/main/screenshot/dac_test2.png?raw=true', 'https://github.com/Akash-Peace/CV-MOVEMENT-DETECTION/raw/main/screenshot/DAC_logo.png', 'DINO AIR CONTROLLER', 'A Python Library', 'Dino Air Controller project objective is to make a virtual controller of two key functions which can be controllable with hand movements.', 'https://www.youtube.com/watch?v=mg_czzvBm0g', 'https://github.com/Akash-Peace/CV-MOVEMENT-DETECTION', 'h'],
                                    ['https://github.com/Akash-Peace/CV-ARUCO-DETECTION/blob/main/screenshots/ARP_output1.png?raw=true', 'https://github.com/Akash-Peace/CV-ARUCO-DETECTION/raw/main/screenshots/APE_logo.png', 'ARUCO PHOTO EMBEDDING', 'A Python Library', 'ArUco Photo Embedding project objective is to make a photo embedding from source image to target image.', 'https://github.com/Akash-Peace/CV-ARUCO-DETECTION/blob/main/screenshots/ARP_output3.png?raw=true', 'https://github.com/Akash-Peace/CV-ARUCO-DETECTION', 'h'],
                                    ['https://github.com/Akash-Peace/OPENCV-GAME/blob/main/screenshot/output1.jpg?raw=true', 'https://github.com/Akash-Peace/OPENCV-GAME/raw/main/screenshot/Boring_jump_logo.png', 'BORING JUMP', 'A Python Library', 'Boring Jump project objective is to make a game by manipulating the pixels.', 'https://github.com/Akash-Peace/OPENCV-GAME/blob/main/screenshot/output3.png?raw=true', 'https://github.com/Akash-Peace/OPENCV-GAME', 'h'],
                                    ['https://github.com/Akash-Peace/CV-IMAGE-PLOTTER/blob/main/screenshot/test1_output.jpg?raw=true', 'https://github.com/Akash-Peace/CV-IMAGE-PLOTTER/raw/main/screenshot/Terminal_plotter_logo.png', 'TERMINAL PLOTTER', 'A Python Library', 'Terminal Plotter project objective is to plot images in terminal/cmd with multiple functions.', 'https://github.com/Akash-Peace/CV-IMAGE-PLOTTER', 'https://github.com/Akash-Peace/CV-IMAGE-PLOTTER/blob/main/screenshot/test5_output.jpg?raw=true', 'h'],)
  const changeNavbarColor = () =>{
    if(window.scrollY === 0){
      document.getElementById('bgc').style.backgroundColor = 'transparent'
    } else{
      document.getElementById('bgc').style.backgroundColor = '#121212';}};
  window.addEventListener('scroll', changeNavbarColor);
  const [data, setData] = useState([]);
  const getData = () => {
      fetch('https://api.github.com/users/Akash-Peace', { 
                      headers: {
                          'Accept' : 'application/vnd.github.v3+json'
                      }})
              .then(response => {return response.json()})
              .then( data => {setData(data.public_repos)})
              .catch( error => console.error(error));
  }
  getData()
  console.log(data)
  const [expanded, setExpanded] = useState(false);                           
  return (
    <div>
      <Particles
        style={{position: 'absolute', width: '100%', height: '100%', zIndex: '-1'}}
        id="tsparticles"
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 0.3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 500,
              },
              value: 80,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 1,
            },
          },
          detectRetina: true,
        }}
      />
      <Navbar expanded={expanded} id='bgc' sticky='top' expand="lg">
        <Navbar.Brand className='akash'><strong>Akash A</strong></Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} style={{border: 'none'}} aria-controls="basic-navbar-nav"><img src="https://img.icons8.com/material-rounded/24/f5f5f5/menu.png"/></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-5">
            <Nav.Link className='navbtn' onClick={() => scroller.scrollTo('home', {smooth: true, offset: (window.innerWidth > 995 ? -120 : -340), duration: 500}, setExpanded(false))}>Home</Nav.Link>
            <Nav.Link className='navbtn' onClick={() => scroller.scrollTo('education', {smooth: true, offset: (window.innerWidth > 995 ? -120 : -340), duration: 500}, setExpanded(false))}>Education</Nav.Link>
            <Nav.Link className='navbtn' onClick={() => scroller.scrollTo('skills', {smooth: true, offset: (window.innerWidth > 995 ? -120 : -340), duration: 500}, setExpanded(false))}>Skills</Nav.Link>
            <Nav.Link className='navbtn' onClick={() => scroller.scrollTo('projects', {smooth: true, offset: (window.innerWidth > 995 ? -120 : -340), duration: 500}, setExpanded(false))}>Projects</Nav.Link>
            <Nav.Link className='navbtn' onClick={() => scroller.scrollTo('contributions', {smooth: true, offset: (window.innerWidth > 995 ? -120 : -340), duration: 500}, setExpanded(false))}>Contributions</Nav.Link>
            <Nav.Link className='navbtn' onClick={() => scroller.scrollTo('contact', {smooth: true, offset: (window.innerWidth > 995 ? -120 : -340), duration: 500}, setExpanded(false))}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div id='home' className='homestyle'>
        <div className='homemypic'>
          <img className='homeimg' alt='My Pic' src={mypic} />
          <h1 className='homename'>I'm <span className='akasha'>Akash A</span></h1>
        </div>
        <div className='homeabout'>
          <div className='homedesc'>
          <Typewriter options={{delay: 50}} onInit={(Typewriter) => {Typewriter.typeString('Hi, I am a Computer Science Engineer with a good Computer Vision, Web development and python background. I also managed to work with Software, ML/DL, Mobile app development and IoT.').start()}} />
          </div>
      </div>
    </div>
    <Wave fill='whitesmoke' options={{points: 3, speed: 0.25}}/>
    <div id='education' style={{background: 'whitesmoke'}}>
      <h3 style={{textAlign: 'center', marginBottom: '50px', color: '#121212'}}>EDUCATION</h3>
      <div className='carddiv'>
      <Card className='cardstyle'>
        <Card.Body>
          <Card.Title style={{textAlign: 'center'}}>B.E</Card.Title>
          <hr/>
          <Card.Text>
            <strong>College Name:</strong> Rajalakshmi Engineering<br/>
            <strong>Course:</strong> Computer Science<br/>
            <strong>CGPA:</strong> 8.3<br/>
            <strong>Period:</strong> 2018-2022
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='cardstyle'>
        <Card.Body>
          <Card.Title style={{textAlign: 'center'}}>12th</Card.Title>
          <hr/>
          <Card.Text>
            <strong>School Name:</strong> Leo<br/>
            <strong>Course:</strong> Computer Science (102)<br/>
            <strong>Score:</strong> 86.4%<br/>
            <strong>Period:</strong> 2017-2018
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='cardstyle'>
        <Card.Body>
          <Card.Title style={{textAlign: 'center'}}>10th</Card.Title>
          <hr/>
          <Card.Text>
            <strong>School Name:</strong> Christ<br/>
            <strong>Course:</strong> TN State Board<br/>
            <strong>Score:</strong> 93.8%<br/>
            <strong>Period:</strong> 2015-2016
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <br/><br/><br/>
    </div>
    <div id='skills' style={{background: 'whitesmoke'}}>
      <h3 style={{textAlign: 'center', marginBottom: '50px', color: '#121212'}}>SKILLS</h3>
      <div className='skilldiv'>
      <div className='skillimg'><img style={{width: '90px', height: '90px'}} alt='OpenCV' src="https://img.icons8.com/color/146/000000/opencv.png"/><p>OpenCV</p></div>
      <div className='skillimg'><img style={{width: '90px', height: '90px'}} alt='Reactjs' src="https://img.icons8.com/color/146/000000/react-native.png"/><p>Reactjs</p></div>
      <div className='skillimg'><img style={{width: '90px', height: '90px'}} alt='Python' src="https://img.icons8.com/color/146/000000/python--v1.png"/><p>Python</p></div>
      <div className='skillimg'><img style={{width: '90px', height: '90px'}} alt='Linux' src="https://img.icons8.com/color/146/000000/linux--v1.png"/><p>Linux</p></div>
      <div className='skillimg'><img style={{width: '90px', height: '90px'}} alt='Firebase' src="https://img.icons8.com/color/146/000000/firebase.png"/><p>Firebase</p></div>
      <div className='skillimg'><img style={{width: '90px', height: '90px'}} alt='Html 5' src="https://img.icons8.com/color/146/000000/html-5--v1.png"/><p>HTML</p></div>
      <div className='skillimg'><img style={{width: '90px', height: '90px'}} alt='CSS 3' src="https://img.icons8.com/color/146/000000/css3.png"/><p>CSS</p></div>
      <div className='skillimg'><img style={{width: '90px', height: '90px'}} alt='JavaScript' src="https://img.icons8.com/color/146/000000/javascript--v1.png"/><p>JavaScript</p></div>
      <div className='skillimg'><img style={{width: '90px', height: '90px'}} alt='Bootstrap' src="https://img.icons8.com/color/146/000000/bootstrap.png"/><p>Bootstrap</p></div>
      <div className='skillimg'><img style={{width: '90px', height: '90px'}} alt='Django' src="https://img.icons8.com/material-outlined/146/006400/django.png"/><p>Django</p></div>
      <div className='skillimg'><img style={{width: '90px', height: '90px'}} alt='Android Studio' src="https://www.freepnglogos.com/uploads/android-logo-png/android-logo-android-studio-appjoy-25.png"/><p>Android Studio</p></div>
      <div className='skillimg'><img style={{width: '90px', height: '90px'}} alt='ML/DL' src="https://img.icons8.com/fluent/146/000000/learning.png"/><p>ML/DL</p></div>
      <div className='skillimg'><img style={{width: '90px', height: '90px'}} alt='Raspberry Pi' src="https://img.icons8.com/color/146/000000/raspberry-pi.png"/><p>IoT</p></div>
      <div className='skillimg'><img style={{width: '90px', height: '90px'}} alt='Chat Bot' src="https://img.icons8.com/color/146/000000/chat--v1.png"/><p>Chat Bot</p></div>
      <div className='skillimg'><img style={{borderRadius: '50px', width: '80px', height: '80px', marginTop: '8px'}} alt='Kivy' src="https://pbs.twimg.com/profile_images/562300519008333825/6WcGRXLU_400x400.png" /><p>Kivy</p></div>
      </div>
      <br/><br/><br/>
    </div>
    <div id='projects' style={{background: 'whitesmoke'}}>
      <h3 style={{textAlign: 'center', marginBottom: '0px', color: '#121212'}}>PROJECTS</h3>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
      <Carousel interval={null} className='slide'>
        {project_details.map((p) =>
        <Carousel.Item>
          <div className='pwhole'>
          <div className='ppdiv'>
            <img className={p[7] === 'v' ? 'pp' : 'pph'} alt='project pic' src={p[0]} />
          </div>
          <div className='pdesc'>
            <div><img style={{height: '48px', width: '48px', margin: '0 auto', marginBottom: '10px'}} alt='Logo' src={p[1]}></img>
            <h4><strong>{p[2]}</strong></h4><p>{p[3]}</p>
            <p style={{textAlign:'left', width: '250px', margin: '0 auto'}}>{p[4]}</p></div>
            <div className='plinks'><a href={p[5]}><img style={{cursor: 'pointer'}} alt='Link' src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"/></a><a href={p[6]}><img style={{cursor: 'pointer'}} alt='Github' src="https://img.icons8.com/material-outlined/48/000000/github.png"/></a></div>
          </div>
          </div>
        </Carousel.Item>)}
      </Carousel>
      </div>
      <br/><br/><br/>
    </div>
    <div id='contributions' style={{backgroundColor:'whitesmoke', paddingTop: '50px'}}>
      <h3 style={{textAlign: 'center', color: '#121212'}}>CONTRIBUTIONS</h3>
      <div style={{textAlign: 'center', marginTop: '50px'}}>
        <a href='https://github.com/Akash-Peace' style={{cursor: 'pointer', color: 'black', fontSize: '50px', fontWeight: '800'}}><img style={{height: '72px', width: '72px'}} src="https://img.icons8.com/material-outlined/122/000000/github.png"/> {data} Projects</a>
        <br /><br />
        <a href='https://pypi.org/user/Akash-Peace/' style={{cursor: 'pointer', color: '#006dad', fontSize: '50px', fontWeight: '800'}}><img style={{height: '72px', width: '72px'}} src="https://img.icons8.com/material-sharp/122/006dad/sugar-cube.png"/> 7 Libraries</a>
      </div>
      <br/><br/><br/>
      <Wave fill='#121212' options={{points: 3, speed: 0.25}}/>
    </div>
    <div id='contact' style={{textAlign: 'center'}}>
      <a href='https://www.instagram.com/nocturnal_lad/'><img className='iconspace' style={{backgroundColor:'whitesmoke', borderRadius: '25px 25px 0px 25px'}} src="https://img.icons8.com/material-outlined/96/121212/instagram-new--v1.png"/></a>
      <a href='https://www.facebook.com/profile.php?id=100061841000593'><img className='iconspace' style={{backgroundColor:'whitesmoke', borderRadius: '25px 25px 0px 25px'}} src="https://img.icons8.com/material-sharp/96/121212/facebook-new.png"/></a>
      <a href='https://www.linkedin.com/in/akash-2000-cse/'><img className='iconspace' style={{backgroundColor:'whitesmoke', borderRadius: '25px 25px 0px 25px'}} src="https://img.icons8.com/ios-glyphs/96/121212/linkedin-2--v1.png"/></a>
      <a href='https://github.com/Akash-Peace'><img className='iconspace' style={{backgroundColor:'whitesmoke', borderRadius: '25px 25px 0px 0px'}} src="https://img.icons8.com/material-outlined/96/121212/github.png"/></a>
      <a href='https://twitter.com/AkashA53184506'><img className='iconspace' style={{backgroundColor:'whitesmoke', borderRadius: '25px 25px 25px 0px'}} src="https://img.icons8.com/metro/96/121212/twitter.png"/></a>
      <a href='https://pypi.org/user/Akash-Peace/'><img className='iconspace' style={{backgroundColor:'whitesmoke', borderRadius: '25px 25px 25px 0px'}} src="https://img.icons8.com/material-sharp/96/121212/sugar-cube.png"/></a>
      <a href='https://wa.me/918608550403?text=Hi'><img className='iconspace' style={{backgroundColor:'whitesmoke', borderRadius: '25px 25px 25px 0px'}} src="https://img.icons8.com/material-outlined/96/121212/whatsapp--v1.png"/></a>
      <div className='mailno'><p style={{color: 'whitesmoke'}}><img style={{height: '24px', width: '24px'}} src="https://img.icons8.com/material-outlined/96/ffffff/gmail-new.png"/>&nbsp;&nbsp;&nbsp;<strong>akashcse2000@gmail.com</strong></p>
      <p style={{color: 'whitesmoke'}}><img style={{height: '24px', width: '24px'}} src="https://img.icons8.com/material-rounded/96/ffffff/iphone-x.png"/>&nbsp;&nbsp;&nbsp;<strong>91+ 8608550403</strong></p></div>
      <p style={{marginTop: '50px', color: 'gray'}}>HandCrafted by me @ Akash A</p>  
    </div>
    </div>
  );
}

export default App;
