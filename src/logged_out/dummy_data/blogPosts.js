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

const content = (
  <Fragment>
    <Typography variant="h6" paragraph>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore.
    </Typography>
    <Typography paragraph>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </Typography>
  </Fragment>
);
const interviewContent = (
  <Fragment>
    <Typography variant="h6" paragraph>
      Hone your interview skills
    </Typography>
    <Typography paragraph>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </Typography>
    <Typography paragraph>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem.
    </Typography>
    <Typography variant="h6" paragraph>
      Title
    </Typography>
    <Typography paragraph>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </Typography>
  </Fragment>
);

export default [
  {
    title: "Interview Prep 2020",
    id: 1,
    date: "Fridays @ 7",
    imageSrc: interviewPrep,
    snippet:
      "Fall 2020 Weekly Interview Prep sessions",
    content: interviewContent
  },
  {
    title: "Mock Interview",
    id: 2,
    date: "November 12, 2020",
    imageSrc: mockInterview,
    snippet:
      "Ever wondered what a real coding interview will be like?",
    content: content
  },
  {
    title: "Advent Of Code",
    id: 3,
    date: "December 2020",
    imageSrc: adventOfCode,
    snippet:
      "Holiday coding challenges, complete 50 fun questions and earn stars! ",
    content: content
  },
  {
    title: "Github Workshop",
    id: 4,
    date: 1572281600,
    imageSrc: githubWorshop,
    snippet:
      "Be a team champion with your master Git skills through Github",
    content: content
  },
  {
    title: "Web Development Workshop",
    id: 5,
    date: 1573281600,
    imageSrc: webDevWorkshop,
    snippet:
      "Introduction to core tools and concepts of web development",
    content: content
  },
  {
    title: "Android Application Workshop",
    id: 6,
    date: 1575281600,
    imageSrc: appWorkshop,
    snippet:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    content: content
  },
  {
    title: "AR / VR Workshop",
    id: 6,
    date: 1575281600,
    imageSrc: arvrWorkshop,
    snippet:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    content: content
  },
  {
    title: "IOT Workshop",
    id: 6,
    date: 1575281600,
    imageSrc: iotWorkshop,
    snippet:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    content: content
  },
  {
    title: "ACM Distinguished Speaker",
    id: 6,
    date: 1575281600,
    imageSrc: gameSpeaker,
    snippet:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    content: content
  },
  {
    title: "ACM Distinguished Speaker",
    id: 6,
    date: 1575281600,
    imageSrc: thinkBeyond,
    snippet:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    content: content
  },
  {
    title: "ACM Distinguished Speaker",
    id: 6,
    date: 1575281600,
    imageSrc: invent,
    snippet:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    content: content
  },
  {
    title: "ACM Distinguished Speaker",
    id: 6,
    date: 1575281600,
    imageSrc: designAlgorithm,
    snippet:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    content: content
  },
  {
    title: "Online Portfolio Workshop",
    id: 6,
    date: 1575281600,
    imageSrc: resumeWorkshop,
    snippet:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    content: content
  }
];
