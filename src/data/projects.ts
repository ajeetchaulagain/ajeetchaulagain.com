import { ProjectMetaDetails } from 'markdown-types';

export const projects: ProjectMetaDetails[] = [
  {
    title: 'Page Insight Tool',
    description:
      'A minimalistic web tool to measure the performance of the web application.',
    actions: [
      {
        text: 'Source',
        to: 'https://github.com/ajeetchaulagain/page-insight-tool',
        iconName: 'Github',
      },
      {
        text: 'Demo',
        to: 'https://pageinsight.ajeetchaulagain.com/',
        iconName: 'ExternalLink',
      },
    ],
  },
  {
    title: 'Stay Productive API Node',
    description:
      'API for task management application with Pomodoro features built using Node and Express',
    actions: [
      {
        text: 'Source',
        to: 'https://github.com/ajeetchaulagain/stay-productive-api-node',
        iconName: 'Github',
      },
    ],
  },
  {
    title: 'React Server Rendering',
    description: 'Demonstrates how React app can be server rendered',
    actions: [
      {
        text: 'Source',
        to: 'https://github.com/ajeetchaulagain/react-server-rendering-demo',
        iconName: 'Github',
      },
    ],
  },
  {
    title: 'React CRUD API Consumption',
    description:
      'This project demonstrates consuming CRUD api endpoints on React application using Axios',
    actions: [
      {
        text: 'Source',
        to: 'https://github.com/ajeetchaulagain/react-crud-api-consumption',
        iconName: 'Github',
      },
    ],
  },
  {
    title: 'React Image Gallery',
    description:
      'A light-weight image gallery project created using react-image-gallery npm package',
    actions: [
      {
        text: 'Source',
        to: 'https://github.com/ajeetchaulagain/react-image-gallery-demo',
        iconName: 'Github',
      },
      {
        text: 'Article',
        to: '/blog/react-image-gallery',
        iconName: 'Book',
      },
    ],
  },
];
