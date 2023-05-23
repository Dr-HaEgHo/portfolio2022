import { Icon } from "@iconify/react";
import avidMall from "../src/assets/avidMall.png";
import adminPanel from "../src/assets/avidAdmin.png";
import todoApp from "../src/assets/avidTodo.png";
import restaurant from "../src/assets/41Eatery.png";
import movies from "../src/assets/movies.jpg";
import astro from "./assets/astrolanding1.png";
import metaforeign from "./assets/metaforeign1.png";

const logotext = "Home";
const meta = {
  title: "Timothy",
  description:
    "I’m Timothy Awogbuyi data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
  title: "I’m Timothy Awogbuyi",
  animated: {
    first: "I love coding",
    second: "I code cool websites",
    third: "I am a Frontend Developer",
  },
  description:
    "I build fully responsive pixel-perfect UIs, create stunning interactions, and implement functionality with code",
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "A bit about my self",
  aboutme:
    "I am Timothy Awogbuyi, a dedicated frontend developer with a strong passion for coding. My expertise lies in writing efficient code and leveraging it to solve real-world problems, enabling individuals to streamline their tasks effectively. </br> I have a deep appreciation for art, music, and games, which fuel my creativity and bring me joy. Moreover, I am captivated by emerging technologies such as the metaverse, decentralized internet (Web 3), cryptocurrencies, and NFTs, as they redefine our digital landscape and offer exciting possibilities.",
};
const worktimeline = [
  {
    jobtitle: "Front-end Developer",
    where: "FLIP LABS, Ibadan, Nigeria ",
    date: "Jan 23'",
    endDate: "present",
  },
  {
    jobtitle: "Front-end Developer",
    where: "Dimension11 Studios, Lagos, Nigeria ",
    date: "Sept 22'",
    endDate: "present",
  },
  {
    jobtitle: "Front-end Developer",
    where: "JAM-Forte Technologies, Abuja, Nigeria ",
    date: "Nov 22'",
    endDate: "Feb 23'",
  },
  {
    jobtitle: "Front-end Developer",
    where: "BivestCoin, Ibadan, Nigeria ",
    date: "april 22'",
    endDate: "Sept 22'",
  },
];

const skills = [
  {
    name: "JavaScript",
    value: 90,
    icon: <Icon icon="logos:javascript" />,
  },
  {
    name: "React JS",
    value: 85,
    icon: <Icon icon="logos:react" />,
  },
  {
    name: "Redux | Redux ToolKit",
    value: 85,
    icon: <Icon icon="devicon:redux" />,
  },
  {
    name: "REST APIs",
    value: 85,
    icon: <Icon icon="dashicons:rest-api" />,
  },
  //   {
  //     name: "TypeScript",
  //     value: 80,
  //     icon: <Icon icon="vscode-icons:file-type-typescript-official" />,
  //   },
  {
    name: "GraphQL",
    value: 60,
    icon: <Icon icon="vscode-icons:file-type-graphql" />,
  },
  {
    name: "HTML 5",
    value: 85,
    icon: <Icon icon="devicon:html5" />,
  },
  {
    name: "CSS 3",
    value: 85,
    icon: <Icon icon="devicon:css3" />,
  },
  {
    name: "Bootstrap | TailwindCss | MUI styles | Scss | JSX Styling",
    value: 85,
    icon: <Icon icon="akar-icons:circle-check" />,
  },
  {
    name: "GitHub",
    value: 85,
    icon: <Icon icon="fontisto:github" />,
  },
  {
    name: "Figma",
    value: 85,
    icon: <Icon icon="logos:figma" />,
  },
  {
    name: "Photoshop | Illustrator | inDesign | ",
    value: 85,
    icon: <Icon icon="fontisto:adobe" />,
  },
];

const services = [
  {
    title: "Web Design",
    description:
      "Creating beautiful, user-friendly, minimal, and scalable designs for development",
  },
  {
    title: "Frontend Web Development",
    description:
      "Convert created UI designs and prototypes into responsive, accessible and user-friendly web applications while using up-to-date technologies in production. Also actively and effectively communicating and contributing to the team, handling and converting clients' requirements into effective and efficient solutions, and making necessary revisions as required",
  },
];

const dataportfolio = [
  {
    img: astro,
    title: "Astro Africa",
    description:
      "For this project, I worked collaboratively with a UI/UX designer, a backend engineer, and a project manager to develop a digital asset marketplace. The platform facilitates the trading of gift cards and cryptocurrency. Our team utilized ReactJS, along with various libraries and frameworks, to build the frontend. We seamlessly integrated the backend using REST APIs, handling requests through Redux asyncThunk and managing state efficiently with Redux Toolkit (RTK).",
    github: "",
    demo: "https://astroafrica.site/",
    livesite: true,
  },
  {
    img: metaforeign,
    title: "Meta Foreign Options",
    description:
      "We've created a sophisticated web app for options trading, chart analysis, and seamless forex and cryptocurrency trading. Our intuitive interface and robust charting capabilities empower users to make informed trade decisions. With cutting-edge technology and rigorous testing, our secure and high-performance platform ensures a seamless trading experience. It's a powerful tool for options traders in the forex and cryptocurrency markets. ",
    github: "https://github.com/Dr-HaEgHo/meta-foreign-options",
    demo: "https://meta-foreign-options.vercel.app/",
    livesite: false,
  },
  {
    img: avidMall,
    title: "Ecommerce Website",
    description:
      "This is an ecommerce website I built using React Js library and styled using CSS, JSX styling and MUI styles. Here, I managed the global states like cart, products, addToCart, removeFromCart, incrementQuantity, e.t.c. using reducer technique from Redux ToolKit, and also handled API requests with createAsyncThunk from ReduxToolkit. Handled form input and validation using formik & Yup and I consumed a dummy products' API which I used through out the website. I collaborated with a skilled backend developer to build this web application using a combination of React.js, HTML, CSS, and PHP.",
    github: " https://github.com/Dr-HaEgHo/avid-todo",
    demo: "https://avid-store.vercel.app/",
    livesite: false,
  },
  {
    img: todoApp,
    title: "Todo App",
    description:
      "A simple to-do app to handle daily tasks. All the data are handles in the local storage and all the data were made accessible within components through the use of props. I used ReactJs to build this along with CSS and conditional style rendering with JSX styling, to style the app. ",
    github: "https://github.com/Dr-HaEgHo/admin-panel",
    demo: "https://avid-todo.vercel.app/",
    livesite: false,
  },
  {
    img: adminPanel,
    title: "Admin Panel",
    description:
      "Admin panel for tracking statistics of a company's employees and clients, And a small store to display the company's products. This was achieved with the use of Reactjs, Css, MUI styling for the layout and styling. Consumed data from a dummy API to which a request was made using Axios. Implemented a dynamic data chart with the use of Recharts. Routing with react router dom.",
    github: "https://github.com/Dr-HaEgHo/admin-panel",
    demo: "https://admin-panel-lyart.vercel.app/",
    livesite: false,
  },
  {
    img: restaurant,
    title: "41 Restaurant",
    description:
      "A simple single page application (SPA) that displays all the dishes available. Navigate through routes using React router dom, Consumed data from an API server which was requested using react fetch. Simple search feature on the products page, to get a new filtered array of products. Site built with React Js and JavaScript.",
    github: "https://github.com/Dr-HaEgHo/41-Eatery",
    demo: "https://41-eatery.vercel.app/",
    livesite: false,
  },
  {
    img: movies,
    title: "Movies Search App",
    description:
      "This is a simple app that displays movies from a movie API database. Built with React Js, react fetch, css styling",
    github: "https://github.com/Dr-HaEgHo/Movie-search-app",
    demo: "https://movie-search-app-seven-xi.vercel.app/",
    livesite: false,
  },
];

const contactConfig = {
  YOUR_EMAIL: "awogbuyitimothy@gmail.com",
  YOUR_FONE: "+2348139347195",
  description:
    "I look forward to collaborating with you on your next project. Feel free to reach out whenever convenient, and let's create something extraordinary together!",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_teem",
  YOUR_TEMPLATE_ID: "template_to6r59o",
  YOUR_PUBLIC_KEY: "dVZ5b8SzS0VUnfmxV",
};

const socialprofils = {
  github: "https://github.com/Dr-HaEgHo",
  // facebook: "https://facebook.com",
  linkedin: "https://www.linkedin.com/in/timothyawogbuyi/",
  twitter: "https://twitter.com/TarterCim",
  // youtube: "https://youtube.com",
  // twitch: "https://twitch.com",
};

export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
