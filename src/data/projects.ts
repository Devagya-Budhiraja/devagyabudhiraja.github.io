export interface Project {
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  images: string[];
  startDate: string;
  endDate: string;
}

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio to showcase my skills and projects. Built with React, TypeScript, and Tailwind CSS, featuring a modern, responsive design with a sidebar layout and smooth page transitions.',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    repoUrl: 'https://github.com/Devagya-Budhiraja/devagyabudhiraja.github.io',
    images: [
      'https://img-wrapper.vercel.app/image?url=https://placehold.co/1280x720/0d1117/ffffff?text=Portfolio+Screenshot+1',
      'https://img-wrapper.vercel.app/image?url=https://placehold.co/1280x720/0d1117/ffffff?text=Mobile+View',
    ],
    startDate: 'Jan 2023',
    endDate: 'Mar 2023',
  },
  {
    title: 'Weather App',
    description: 'A simple and elegant weather application that provides real-time weather data for any city using the OpenWeatherMap API. Features a clean UI that changes based on the weather conditions.',
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    repoUrl: 'https://github.com/Devagya-Budhiraja/Weather-App',
    liveUrl: 'https://devagya-budhiraja.github.io/Weather-App/',
    images: [
      'https://img-wrapper.vercel.app/image?url=https://placehold.co/1280x720/0d1117/ffffff?text=Weather+App+Main',
      'https://img-wrapper.vercel.app/image?url=https://placehold.co/1280x720/0d1117/ffffff?text=City+Search',
    ],
    startDate: 'Jan 2023',
    endDate: 'Mar 2023',
  },
  {
    title: 'To-Do List',
    description: 'A classic to-do list application to manage daily tasks. Features include adding, deleting, and marking tasks as complete, with data persisted in local storage.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/Devagya-Budhiraja/To-Do-List',
    liveUrl: 'https://devagya-budhiraja.github.io/To-Do-List/',
    images: [
      'https://img-wrapper.vercel.app/image?url=https://placehold.co/1280x720/0d1117/ffffff?text=To-Do+List+UI',
    ],
    startDate: 'Jan 2023',
    endDate: 'Mar 2023',
  },
  {
    title: 'Tribute Page',
    description: 'A tribute page dedicated to a notable personality, built as part of a web development course. It is fully responsive and focuses on semantic HTML structure.',
    tags: ['HTML', 'CSS'],
    repoUrl: 'https://github.com/Devagya-Budhiraja/Tribute-Page',
    liveUrl: 'https://devagya-budhiraja.github.io/Tribute-Page/',
    images: [
      'https://img-wrapper.vercel.app/image?url=https://placehold.co/1280x720/0d1117/ffffff?text=Tribute+Page+Hero',
    ],
    startDate: 'Jan 2023',
    endDate: 'Mar 2023',
  },
  {
    title: 'Survey Form',
    description: 'A responsive survey form for collecting user data, featuring various input types and validation. Designed to be clean and user-friendly.',
    tags: ['HTML', 'CSS'],
    repoUrl: 'https://github.com/Devagya-Budhiraja/Survey-Form',
    liveUrl: 'https://devagya-budhiraja.github.io/Survey-Form/',
    images: [
      'https://img-wrapper.vercel.app/image?url=https://placehold.co/1280x720/0d1117/ffffff?text=Survey+Form+Layout',
    ],
    startDate: 'Jan 2023',
    endDate: 'Mar 2023',
  },
  {
    title: 'Technical Documentation',
    description: 'A technical documentation page layout, designed to be easy to read and navigate with a fixed sidebar for quick access to different sections.',
    tags: ['HTML', 'CSS'],
    repoUrl: 'https://github.com/Devagya-Budhiraja/Technical-Documentation',
    liveUrl: 'https://devagya-budhiraja.github.io/Technical-Documentation/',
    images: [
      'https://img-wrapper.vercel.app/image?url=https://placehold.co/1280x720/0d1117/ffffff?text=Documentation+Page',
    ],
    startDate: 'Jan 2023',
    endDate: 'Mar 2023',
  },
  // --- 8 more placeholder projects below ---
  {
    title: 'Expense Tracker',
    description: 'A web app to track daily expenses and visualize spending habits with charts and graphs.',
    tags: ['React', 'TypeScript', 'Chart.js'],
    repoUrl: '',
    liveUrl: '',
    images: [
      'https://img-wrapper.vercel.app/image?url=https://placehold.co/1280x720/0d1117/ffffff?text=Expense+Tracker',
    ],
    startDate: 'Apr 2023',
    endDate: 'May 2023',
  },
  {
    title: 'Blog Platform',
    description: 'A full-stack blogging platform with user authentication, markdown support, and comments.',
    tags: ['Node.js', 'Express', 'MongoDB', 'React'],
    repoUrl: '',
    liveUrl: '',
    images: [
      'https://img-wrapper.vercel.app/image?url=https://placehold.co/1280x720/0d1117/ffffff?text=Blog+Platform',
    ],
    startDate: 'May 2023',
    endDate: 'Jun 2023',
  },
  {
    title: 'Recipe Finder',
    description: 'A recipe search app that fetches recipes from an external API and allows users to save favorites.',
    tags: ['React', 'API', 'CSS'],
    repoUrl: '',
    liveUrl: '',
    images: [
      'https://img-wrapper.vercel.app/image?url=https://placehold.co/1280x720/0d1117/ffffff?text=Recipe+Finder',
    ],
    startDate: 'Jun 2023',
    endDate: 'Jul 2023',
  },
  {
    title: 'Chat App',
    description: 'A real-time chat application using WebSockets, supporting multiple rooms and emojis.',
    tags: ['React', 'Node.js', 'Socket.io'],
    repoUrl: '',
    liveUrl: '',
    images: [
      'https://img-wrapper.vercel.app/image?url=https://placehold.co/1280x720/0d1117/ffffff?text=Chat+App',
    ],
    startDate: 'Jul 2023',
    endDate: 'Aug 2023',
  },
  {
    title: 'Fitness Tracker',
    description: 'A mobile-friendly app to log workouts, track progress, and set fitness goals.',
    tags: ['React', 'TypeScript', 'PWA'],
    repoUrl: '',
    liveUrl: '',
    images: [
      'https://img-wrapper.vercel.app/image?url=https://placehold.co/1280x720/0d1117/ffffff?text=Fitness+Tracker',
    ],
    startDate: 'Aug 2023',
    endDate: 'Sep 2023',
  },
  {
    title: 'E-commerce Store',
    description: 'A demo e-commerce store with product listings, cart, and checkout functionality.',
    tags: ['React', 'Redux', 'Stripe'],
    repoUrl: '',
    liveUrl: '',
    images: [
      'https://img-wrapper.vercel.app/image?url=https://placehold.co/1280x720/0d1117/ffffff?text=E-commerce+Store',
    ],
    startDate: 'Sep 2023',
    endDate: 'Oct 2023',
  },
  {
    title: 'Quiz App',
    description: 'A quiz application with multiple categories, scoring, and instant feedback.',
    tags: ['React', 'TypeScript'],
    repoUrl: '',
    liveUrl: '',
    images: [
      'https://img-wrapper.vercel.app/image?url=https://placehold.co/1280x720/0d1117/ffffff?text=Quiz+App',
    ],
    startDate: 'Oct 2023',
    endDate: 'Nov 2023',
  },
  {
    title: 'Personal Finance Dashboard',
    description: 'A dashboard to visualize personal finances, budgets, and investments.',
    tags: ['React', 'D3.js', 'TypeScript'],
    repoUrl: '',
    liveUrl: '',
    images: [
      'https://img-wrapper.vercel.app/image?url=https://placehold.co/1280x720/0d1117/ffffff?text=Finance+Dashboard',
    ],
    startDate: 'Nov 2023',
    endDate: 'Dec 2023',
  },
  {
    title: 'Language Learning App',
    description: 'A language learning app with flashcards, quizzes, and spaced repetition.',
    tags: ['React', 'TypeScript', 'PWA'],
    repoUrl: '',
    liveUrl: '',
    images: [
      'https://img-wrapper.vercel.app/image?url=https://placehold.co/1280x720/0d1117/ffffff?text=Language+Learning+App',
    ],
    startDate: 'Dec 2023',
    endDate: 'Jan 2024',
  },
];
