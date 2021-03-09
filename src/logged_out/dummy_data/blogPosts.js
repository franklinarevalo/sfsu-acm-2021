import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";

import interviewPrep from "./images/events/interviewPrep.png";
import adventOfCode from "./images/events/AdventOfCode.png";
import mockInterview from "./images/events/mockInterview.jpg";
import iotWorkshop from "./images/events/IoTworkshopflyer.jpeg";
import arvrWorkshop from "./images/events/arvr.png";
import appWorkshop from "./images/events/appDev.png";
import githubWorshop from "./images/events/github.jpg";
import gameSpeaker from "./images/events/speakerGame.png";
import thinkBeyond from "./images/events/thinkBeyondCode.jpg";
import resumeWorkshop from "./images/events/resumeWorkshop.png";
import webDevWorkshop from "./images/events/webWorkshop.png";
import invent from "./images/events/invent.jpg";
import designAlgorithm from "./images/events/designAlgorithms.jpg";
import gameNight from "./images/events/GameNight.png";
import vrPart2 from "./images/events/VRpart2.png";
import careerFair from "./images/events/careerfair.jpg";
import sean from "./images/events/seanInterviewPrep.png";
import speakerSpring from "./images/events/spring2021speaker.png";
import ACMGeneral from "./images/events/ACMGeneral.png";
import cyberSecOne from "./images/events/cyberSecOne.png";
import fiveG from "./images/events/SpeakerFiveG.png";
const careerFairContent = (
  <Fragment>
    <Typography variant="h6" paragraph>
      Register with the link below
    </Typography>
    <Typography paragraph>
    https://www.accelevents.com/e/EngineeringComputerScienceCareerFairSpring2021#about
    </Typography>
  </Fragment>
);
const CyberSecContent = (
  <Fragment>
    <Typography variant="h6" paragraph>
    About this Lecture
    </Typography>
    <Typography>Number of Slides:  60 / Duration:  60 minutes / Languages Available:  English / Last Updated:  10/10/2018</Typography>
    <Typography paragraph>
    This talk offers an introduction for students and practitioners to the application of the scientific method to cybersecurity tools and systems. Creating, using, and evaluating cybersecurity tools and systems are complex tasks. Many cybersecurity professionals are attracted to the challenges of building these tools and systems, and are motivated to use their expertise to bring sanity and solutions to real-world problems. The addition of scientific thinking aids in dealing with uncertainty, unknowns, choices, and crises. It can improve existing products and lead to groundbreaking innovation and applications. In this talk, we’ll focus on practical, real-world applications of science to the practice of cybersecurity. You’ll learn about scientific principles and flexible methodologies for effective security as you design, execute, and evaluate your own experiments. You’ll discover why the application of science is worth the added effort and you’ll glean insights from specific examples of experimentation in cybersecurity. 
    </Typography>
    <Typography variant="h6" paragraph>
    About the Speaker
    </Typography>
    <Typography paragraph>
    Dr. Josiah Dykstra is a Technical Fellow in the Cybersecurity Collaboration Center at the National Security Agency (NSA). He advises leadership and employees on technical matters for integrated cybersecurity operations and provides overall technical direction on projects and programs that enable high impact operational effects in the cyber domain and deny adversaries the ability to influence, exploit, or threaten cyber and information infrastructure domains.

Dr. Dykstra has held a variety of technical and leadership positions at NSA. Most recently, he served as a senior researcher within NSA's Research Directorate studying computer network operations. His work has also included penetration testing, digital forensics, and malware analysis. Dykstra remains an active collaborator with academic, industry, and government researchers around the country. He has received numerous noteworthy awards, including the Presidential Early Career Award for Scientists and Engineers (PECASE), Galileo Award from the Director of National Intelligence, and NSA Research Team of the Year. He was recently named to the NSF CyberCorps Hall of Fame.

Dykstra is a Lifetime and Distinguished Member of ACM. He attended the 2nd Heidelberg Laureate Forum as a Young Researcher in 2014, which motivated his commitment to ACM. He is passionate about developing and empowering the next generation of interdisciplinary computing professionals, particularly in cybersecurity. His active research interests include human augmentation and human factors in cybersecurity. Dr. Dykstra co-authored a 2018 Viewpoint in "Communications of the ACM" proposing hands-off, behind-the-scenes cyber defense.

Josiah received a B.S. in computer science and B.A. in music from Hope College (Holland, MI), M.S in information assurance from Iowa State University, and Ph.D. in computer science from the University of Maryland, Baltimore County. His doctoral research explored new technical and legal mechanisms to support digital forensics for cloud computing environments. Dr. Dykstra is an organizer for the Digital Forensics Research Workshop (DFRWS). He is a Fellow of the American Academy of Forensic Sciences (AAFS), member of the American Association for the Advancement of Science (AAAS), and member of the Human Factors and Ergonomics Society (HFES). 

Dr. Dykstra's book, Essential Cybersecurity Science, is a guide for practitioners and discusses key considerations for conducting scientific experiments in cybersecurity, including domain-specific insights including digital forensics and malware analysis. An experienced presenter and lecturer, he has spoken at major security events including Black Hat USA and RSA Conference.
    </Typography>
  </Fragment>
);

export default [
  {
    title: "Getting Started with Cybersecurity Science",
    id: 3,
    date: "April 7, 2021 6:00 P.M",
    imageSrc: cyberSecOne,
    snippet:
      "Learn the application of the scientific method to cybersecurity tools and systems.",
    content: CyberSecContent,
  },
  {
    title: "Next Generation 5G Wireless Networks",
    id: 3,
    date: "MARCH 15, 2021 6:00 P.M.",
    imageSrc: fiveG,
    snippet:
      "Learn about 5G wireless systems and the importance of its eventual commercialization ",
    content: '',
  },
  {
    title: "Interview Prep",
    id: 3,
    date: "February 24, 6pm",
    imageSrc: sean,
    snippet:
      "",
    content: '',
  },
  {
    title: "ACM General Meeting",
    id: 3,
    date: "Mondays",
    imageSrc: ACMGeneral,
    snippet:
      "",
    content: '',
  },
  {
    title: "Career Fair",
    id: 3,
    date: "February 26, 10-6pm",
    imageSrc: careerFair,
    snippet:
      "Last day to register for the fair will be February 24 @11:59pm",
    content: careerFairContent,
  },
  {
    title: "VR Work Shop",
    id: 3,
    date: "January 28, 6-7:30pm",
    imageSrc: vrPart2,
    snippet:
      "Step by step tutorial on how to make an interactive VR interface",
    content: '',
  },
  {
    title: "Game Night",
    id: 1,
    date: "January 29 @6pm",
    imageSrc: gameNight,
    snippet:
      "Start off the Spring 2021 semester with a blast! Jack Box Party game night. Come meet the gang ",
    content: '',
  },
  {
    title: "Mock Interview",
    id: 2,
    date: "November 12, 2020",
    imageSrc: mockInterview,
    snippet:
      "Ever wondered what a real coding interview will be like?",
    content: ''
  },

  {
    title: "Web Development Workshop",
    id: 5,
    date: '',
    imageSrc: webDevWorkshop,
    snippet:
      "Introduction to core tools and concepts of web development",
    content: ''
  },
  {
    title: "Android Application Workshop",
    id: 6,
    date: '',
    imageSrc: appWorkshop,
    snippet:
      " how to build an Android app that can take input, display output, get data from a network API, and understand how the basic components of android are interrelated.",
    content: ''
  },
  {
    title: "AR / VR Workshop",
    id: 6,
    date: '',
    imageSrc: arvrWorkshop,
    snippet:
      "She will teach us how to use Unity, a cross-platform game engine, to develop an AR app. She will also discuss which design guidelines for both Augmented and Virtual Reality are needed for a compelling game experience",
    content: ""
  },
  {
    title: "IOT Workshop",
    id: 6,
    date: '',
    imageSrc: iotWorkshop,
    snippet:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    content: ''
  },
  {
    title: "ACM Distinguished Speaker",
    id: 6,
    date: '',
    imageSrc: gameSpeaker,
    snippet:
      " These speaker sessions are a perfect opportunity to interface with professionals who you may share a similar passion.",
    content: ''
  },
  {
    title: "ACM Distinguished Speaker",
    id: 6,
    date: '',
    imageSrc: thinkBeyond,
    snippet:
      " These speaker sessions are a perfect opportunity to interface with professionals who you may share a similar passion.",
    content: ''
  },
  {
    title: "ACM Distinguished Speaker",
    id: 6,
    date: '',
    imageSrc: invent,
    snippet:
      " These speaker sessions are a perfect opportunity to interface with professionals who you may share a similar passion.",
    content: ''
  },
  {
    title: "ACM Distinguished Speaker",
    id: 6,
    date: '',
    imageSrc: designAlgorithm,
    snippet:
      " These speaker sessions are a perfect opportunity to interface with professionals who you may share a similar passion.",
    content: ''
  },
  {
    title: "Github Workshop",
    id: 4,
    date: '',
    imageSrc: githubWorshop,
    snippet:
      "Be a team champion with your master Git skills through Github",
    content: ''
  },
  {
    title: "Online Portfolio Workshop",
    id: 6,
    date: '',
    imageSrc: resumeWorkshop,
    snippet:
      "Create a simple resume and host it using Github",
    content: ''
  },
  {
    title: "Interview Prep 2020",
    id: 1,
    date: "Fridays @ 7",
    imageSrc: interviewPrep,
    snippet:
      "Fall 2020 Weekly Interview Prep sessions",
    content: '',
  },
];
