/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Dhruv",
  logo_name: "Dhruv",
  nickname: "Dhruv",
  full_name: "Dhruv Shah",
  subTitle: "Full Stack Developer, Competitive Coder. Always learning.",
  resumeLink: "https://drive.google.com/drive/u/1/my-drive",
  mail: "dhruvs2912d@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Dhruv2997",
  linkedin: "https://www.linkedin.com/in/shah-dhruv-4715a9162/",
  gmail: "dhruvs2912d@gmail.com",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in Node, Express & MongoDB",
        "⚡ Integration of third party services such as  AWS, Netlify and Heroku",
        "⚡ Integration of Payment Gateaway such Stripe,Paypal and Paytm",
        "⚡ Styling Website with Ant-Design,Material-Ui and Bootstrap",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "ISI, L'institut Supérieur d'Informatique",
      subtitle: "Post Graduation in Programming and Internet Technologies",
      logo_path: "logo.png",
      alt_name: "ISI",
      duration: "2020 - 2022",
      descriptions: [
        "⚡ I have studied core subjects like C, C++, JAVA, Advanced JAVA, C#, HTML Web Programming, JavaScript, PHP, DBMS,  etc.",
        "⚡ I have also completed various online courses for Frontend ,Backend , Web , Mobile App Development, AI , IOT etc.",
        "⚡ I have implemented several projects based on react, android and many more new technologies. ",
      ],
      website_link: "https://isi-mtl.com/en/",
    },
    {
      title: "Institute of Technology and Management",
      subtitle:
        "Bachelors of Engineering in Computer Engineering , CGPA - 8.13",
      logo_path: "logo4.png",
      alt_name: "ITM",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also attended various workshop like Android studio, Big-data analysis, etc.",
      ],
      website_link: "https://www.itmbu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python Bootcamp ",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-1bb7cf28-656c-4a8e-bd79-8658a17d5be8/",
      alt_name: "Udemy",
      color_code: "#F0FFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    " I've mostly done projects on my own . I love sharing my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Web Developer",
          company: "MultiCIM Technologies Inc.",
          company_url: "https://www.multicim.com/",
          logo_path: "multicim_logo.jpg",
          duration: "March 2022 - July 2022",
          location: "Canada",
          description:
            "Worked as a React Developer on a live project, Completed different task and upload it on Git, Website is related to care chain where patient can book appointment and select the care provider and time slots and care provider can accept the request and start their session.",
          color: "#040f26",
        },
        {
          title: "Application Engineer",
          company: "Tech-Robo Solutions",
          company_url: "http://tech-robo.com/",
          logo_path: "c1.jpg",
          duration: "Aug 2020 - Nov 2020",
          location: "Vadodara",
          description:
            "Worked on a live project called Sapas Telematics based on tracking and monitoring clients’ vehicle and display it on the web application.",
          color: "#040f26",
        },
        {
          title: "Full Stack Developer",
          company: "Drona & Jigar Enterprises Pvt. Ltd",
          company_url: "#",
          logo_path: "c4.gif",
          duration: "May 2019 - July 2020",
          location: "Vadodara",
          description:
            "Worked as a Full Stack Developer and managed many live projects.",
          color: "#040f26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, FrontEnd Projects, and React Project. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "dhruv.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Dishantsingh5",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "FIFO",
      url: "https://github.com/Dhruv2997/isi-final-2021",
      description:
        "The Objective of the project is user can select a one store from the list of stores and join the waiting line to enter the store. User can see the expected waiting time and queue number.",
      languages: [
        {
          name: "Kotlin",
          iconifyClass: "logos-kotlin",
        },
        {
          name: "JAVA",
          iconifyClass: "logos-java",
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "GIT",
          iconifyClass: "logos-git",
        },
      ],
    },
    {
      id: "1",
      name: "Brampton Burger",
      url: "https://github.com/Dhruv2997/SwingProject",
      description:
        "The Objective of the project is user can select 3 options from the menu and then they also can select the toppings and according to that final bill will be generate.",
      languages: [
        {
          name: "JAVA",
          iconifyClass: "logos-java",
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
        },
      ],
    },
    {
      id: "2",
      name: "Sapas Telematics",
      url: "http://www.sapastelematics.com/",
      description:
        "The main objective is, client can see the movement of the vehicles and also they can monitor fuel level, vehicle activities, driver’s information, temperature of the products etc.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "3",
      name: "WireCom India",
      url: "https://wirecomindia.com/",
      description:
        "Display companies products and projects and contact information",
      languages: [
        {
          name: "Wordpress",
          iconifyClass: "logos-wordpress",
        },
        {
          name: "HTML",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
      ],
    },
    {
      id: "4",
      name: "JAVA Notes",
      url: "https://github.com/Dhruv2997/CNotes_JAVA",
      description:
        "users can enter names and write notes that they can edit their note and also update their note. ",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
      ],
    },
    {
      id: "5",
      name: "React Website",
      url: "https://github.com/Dhruv2997/React_Project",
      description:
        "In this project, I included sidebar, login and registeration and also switch and route concept",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "javascript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
