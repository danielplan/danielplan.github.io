import {getReference} from '@content/collections/references';

const content = {
  meta: {
    title: 'home',
    description:
      "Hey I'm daniel plan. I'm a computer science student focused on web development from South Tyrol, Italy. If you want to know more about me, explore my page.",
    keywords:
      'computer science, web development, photography, design, nextjs, flutter, reactjs, daniel plan',
    image: '/img/meta/general.png',
  },
  intro: {
    titleSmall: "Hey I'm",
    titleLargeBlack: 'daniel',
    titleLargeColor: 'plan',
    description: 'Welcome to my website. Let me show you around.',
    references: [
      getReference('wastend'),
      getReference('ryoko'),
      getReference('hazy-days'),
    ],
  },
  introText: "I'm a _computer science_ student from South Tyrol, Italy.",
  skills: {
    titleSmall: 'this is',
    titleLarge: 'what I do',
    list: [
      {
        name: 'development',
        references: [
          getReference('ryoko'),
          getReference('ryoko'),
          getReference('ryoko'),
        ],
      },
      {
        name: 'photography',
        references: [
          getReference('hazy-days'),
          getReference('hazy-days'),
          getReference('hazy-days'),
        ],
      },
      {
        name: 'design',
        references: [
          getReference('wastend'),
          getReference('wastend'),
          getReference('wastend'),
        ],
      },
    ],
  },
  callToAction: {
    title: 'have a look at my _projects_',
    description: "I'm always looking for new projects to work on.",
    button: 'explore my projects',
  },
};

export default content;
