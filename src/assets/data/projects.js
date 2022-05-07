import { v4 as uuidv4 } from "uuid";
import ProjectImg from "../images/projectImg.png";
import UTrackerImg from "../images/utracker.jpg";
import GreenCtgImg from "../images/greenctg.jpg";
import CoinTrackerImg from "../images/cointracker.jpg";
import CavinImg from "../images/cavinimg.jpg";

const projects = [
  {
    id: uuidv4(),
    name: "Project 1 ",
    desc: "Some about project..",
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Project 2 ",
    desc: "Some about project..",
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: "Project 3 ",
    desc: "Some about project..",
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Project 4 ",
    desc: "Some about project..",
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: "Project 5 ",
    desc: "Some about project..",
    img: ProjectImg,
  },
];

export default projects;
