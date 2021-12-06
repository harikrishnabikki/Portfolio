// Website related settings
const settings = {
  isSplash: true,
  useCustomCursor: false,
  googleTrackingID: "",
  defaultTheme: "light",
};

//Home Page
const greeting = {
  title: "Hello 👋",
  title2: "hk_bikk[i]",
  logo_name: "hk_bikk[i]",
  full_name: "Hari",
  subTitle:
    "Full Stack Web & Mobile Developer, Cross Platform Enthusiast, Life Long Learner.",
  resumeLink:
    "https://drive.google.com/file/d/1qC5NUbmdAlICZQCqq-S45mE-Xf1mZA_X/view?usp=sharing",
  mail: "bikkiharikrishna@gmail.com",
};

const socialMediaLinks = {
  /* Social Media Link */
  github: "https://github.com/harikrishnabikki",
  linkedin: "https://www.linkedin.com/in/hari-krishna-bikki/",
  gmail: "bikkiharikrishna@gmail.com",
  telephone: "+61421220200",
};

const skills = {
  data: [
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive UI and Backend for web apps",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend using Node and Express",
        "⚡ Integration of third party services - AWS / GCP",
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
          skillName: "JQuery",
          fontAwesomeClassname: "fontisto:jquery",
          style: {
            color: "#0868ac",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "React JS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Node JS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "logos:typescript-icon",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Alexa",
          fontAwesomeClassname: "simple-icons:amazonalexa",
          style: {
            color: "#01cafe",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Spring MVC",
          fontAwesomeClassname: "logos:spring-icon",
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with CI and CD",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "logos:google-cloud",
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
        {
          skillName: "BitBucket",
          fontAwesomeClassname: "logos:bitbucket",
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "vscode-icons:file-type-azurepipelines",
        },
      ],
    },
    {
      title: "Mobile Development",
      fileName: "MobileDevImg",
      skills: [
        "⚡ Passion for UI/UX ",
        "⚡ Creating cross platform apps using Flutter",
        "⚡ Have written my own apps in my own time",
        "⚡ Experience with Cross Platform framework",
        "⚡ Integration of third party services using Firebase",
      ],
      softwareSkills: [
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "IOS",
          fontAwesomeClassname: "simple-icons:apple",
          style: {
            color: "#959595",
          },
        },
        {
          skillName: "Swift",
          fontAwesomeClassname: "logos:swift",
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "logos:flutter",
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#2bb7f6",
          },
        },
        {
          skillName: "Play Store",
          fontAwesomeClassname: "logos:google-play-icon",
        },
        {
          skillName: "App Store",
          fontAwesomeClassname: "logos:apple-app-store",
        },
      ],
    },
  ],
};

const educationPage = {
  education: {
    title: "Education",
    subtitle: "Qualifications and Certifications",
    bodyText: "Experience is the only school from which no one graduates.",
  },
  degrees: [
    {
      title: "Monash University",
      subtitle: "Masters in Information Technology",
      logo_path: "Education/Monash-shield.png",
      alt_name: "Monash",
      duration: "2018 - 2019",
      descriptions: [
        "🖥️  Web Development units: Java Web Development, Databases.",
        "📱  Mobile Development units: Android and iOS and IoT Development.",
        "🧮  Data Science units: Python, Machine Learning, Data Visualization, Data Mining.",
        "👨🏻‍💼  Professional units: Software Engineering, Project Management, Professional Practice.",
      ],
      website_link: "https://www.monash.edu/",
    },
    {
      title: "Panimalar Engineering College",
      subtitle: " Bachelor of Computer Science and Engineering",
      logo_path: "Education/PEC-logo.png",
      alt_name: "PEC",
      duration: "2011 - 2015",
      descriptions: [
        "🎯 Core units: C, C++, Java, Data Structures and Algorithms, Object-Oriented Programming.",
        "✨ Essential units: Computer Architecture, Artificial Intelligence and Network Security.",
      ],
      website_link: "https://panimalar.ac.in/",
    },
  ],
  certifications: [
    {
      title: "ACS PY",
      subtitle: "Professional Year",
      logo_path: "ACS-PY-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/11VNoE5kDN9X0dqVhZaYLUGTpckNU2vMu/view?usp=sharing",
      alt_name: "ATMC",
      color_code: "#2AAFED",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Software Development",
  description:
    "Even if you are on the right track, you will get run over if you just sit there.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Developer",
          company: "ConnecX",
          company_url: "https://www.connecx.com.au/",
          client: "The Healey",
          client_url: "https://thehealey.com.au/",
          logo_path: "Company/connecx-logo.png",
          duration: "Sep 2021 - Present",
          location: "Hybrid",
          color: "#294b6a",
        },
        {
          title: "Graduate Software Developer",
          company: "SRC Innovations",
          company_url: "https://www.srcinnovations.com.au/",
          client: "Readings.com.au",
          client_url: "https://www.readings.com.au/",
          logo_path: "Company/src-logo.png",
          duration: "April 2021 - Sept 2021",
          location: "Hybrid",
          color: "#294b6a",
        },
        {
          title: "Software Developer",
          company: "DXC Technology",
          company_url: "https://dxc.com/au/en",
          client: "Fiat Chrysler Automobiles",
          client_url: "http://www.fiatchrysler.com.au/",
          logo_path: "Company/DXC.png",
          duration: "Sep 2016 - Jan 2018",
          location: "On-site",
          color: "#603494",
        },
        {
          title: "Graduate Software Developer",
          company: "DXC Technology",
          company_url: "https://dxc.com/au/en",
          client: "Modria",
          client_url: "https://www.tylertech.com/products/Modria",
          logo_path: "Company/DXC.png",
          duration: "Sep 2015 - Aug 2016",
          location: "On-site",
          color: "#603494",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "SOMETHING AWESOME IS COMING SOON..!",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Say Hello 🙋🏻‍♂️",
    profile_image_path: "Contact/hari_profile_pic.jpeg",
    description: "Interested in working together? Let's talk 🤙",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Portfolio Website",
      url: socialMediaLinks.github + "/Portfolio",
      description: "You are stalking it right now 😉",
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
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React JS",
          iconifyClass: "logos-react",
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
  educationPage,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
