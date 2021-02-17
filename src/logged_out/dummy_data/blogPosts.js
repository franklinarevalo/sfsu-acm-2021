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


export default [
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
