import {
  CssIcon,
  JavascriptIcon,
  ReactIcon,
  SvelteIcon,
  TailwindIcon,
  TypescriptIcon,
} from "../../../svg/stack-icons";
import chatImage from "../../../../assets/images/chat.png";
import foroImage from "../../../../assets/images/foro.png";
import readinglistImage from "../../../../assets/images/readinglist.png";
import atraImage from "../../../../assets/images/atra.png";
import VueIcon from "../../../svg/stack-icons/VueIcon.tsx";

export interface Project {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  links: {
    code: string;
    app: string;
  };
  icons: {
    svg: JSX.Element;
    isModified: boolean;
  }[];
}

export const ProjectsData: Project[] = [
  {
    id: 1,
    title: "ATRA arquitectura",
    date: "17 August 2023",
    image: atraImage,
    description: "Architecture portfolio for ATRA client",
    links: {
      code: "https://github.com/oscarprdev/atra-architecture",
      app: "https://atra-architecture.netlify.app/#/",
    },
    icons: [
      {
        svg: TypescriptIcon(),
        isModified: false,
      },
      {
        svg: VueIcon(),
        isModified: false,
      },
    ],
  },
  {
    id: 2,
    title: "Reading List",
    date: "20 July 2023",
    image: readinglistImage,
    description:
      "App where the user can add books to a list and manage the book state",
    links: {
      code: "https://github.com/oscarprdev/midudev-pruebas-tecnicas/tree/oscarprdev/reading-list/pruebas/01-reading-list/oscarprdev",
      app: "https://books-oscarprdev.netlify.app/",
    },
    icons: [
      {
        svg: TypescriptIcon(),
        isModified: false,
      },
      {
        svg: SvelteIcon(),
        isModified: true,
      },
      {
        svg: TailwindIcon(),
        isModified: true,
      },
    ],
  },
  {
    id: 3,
    title: "Forum",
    date: "23 June 2022",
    image: foroImage,
    description: "A forum app where users can create and comment topics",
    links: {
      code: "https://github.com/oscarprdev/REACT--Foro_social",
      app: "https://react-foro.netlify.app",
    },
    icons: [
      {
        svg: JavascriptIcon(),
        isModified: false,
      },
      {
        svg: ReactIcon(),
        isModified: false,
      },
      {
        svg: CssIcon(),
        isModified: true,
      },
    ],
  },
  {
    id: 4,
    title: "Chat",
    date: "11 July 2022",
    image: chatImage,
    description: "A real time chat app done with sockets.io",
    links: {
      code: "https://github.com/oscarprdev/REACT-Chat-Socket",
      app: "https://react-chat-socket-oscar.netlify.app/",
    },
    icons: [
      {
        svg: JavascriptIcon(),
        isModified: false,
      },
      {
        svg: ReactIcon(),
        isModified: false,
      },
      {
        svg: CssIcon(),
        isModified: true,
      },
    ],
  },
];
