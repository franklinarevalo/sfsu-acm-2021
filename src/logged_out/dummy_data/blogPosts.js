import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import blogPost1 from "./images/blogPost1.jpg";
import blogPost2 from "./images/blogPost2.jpg";
import blogPost3 from "./images/blogPost3.jpg";
import blogPost4 from "./images/blogPost4.jpg";
import blogPost5 from "./images/blogPost5.jpg";
import blogPost6 from "./images/blogPost6.jpg";
import interviewPrep from "./images/events/interviewPrep.png";
import adventOfCode from "./images/events/AdventOfCode.png";
import mockInterview from "./images/events/mockInterview.jpg";
import iotWorkshop from "./images/events/IoTworkshopflyer.jpeg";
import arvrWorkshop from "./images/events/arvr.png";

import appWorkshop from "./images/events/appDev.png";

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
    imageSrc: blogPost4,
    snippet:
      "Be a team champion with your master Git skills through Github",
    content: content
  },
  {
    title: "Web Development Workshop",
    id: 5,
    date: 1573281600,
    imageSrc: blogPost5,
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
  }
];
