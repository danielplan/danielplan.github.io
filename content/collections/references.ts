import {MetaInformation} from '@components/atoms/MetaInfo';
import {getAllTags, Tag} from './tags';

export interface Reference {
  name: string;
  description: string;
  meta: MetaInformation;
  slug: string;
  color?: string;
  imagePortrait: string;
  imageLandscape: string;
  previewImageAlt: string;
  images: {
    image: string;
    alt: string;
    color?: string;
  }[];
  video?: string;
  title?: string;
  text?: string;
  link?: string;
  previewSize: 'small' | 'large';
  tags: Tag[];
}

export function getReference(slug: string) {
  return references.find((r) => r.slug === slug) as Reference;
}

const references: Reference[] = [
  {
    name: 'wastend',
    description: 'A modern way to organize your _groceries_.',
    previewImageAlt: 'Screenshots of the user interface of wastend',
    meta: {
      title: 'wastend',
      description: 'A modern way to organize your groceries.',
      image: '/img/references/wastend/preview.png',
      keywords:
        'wastend, daniel plan, groceries, shopping, organize, modern, shopping list, web app',
    },
    images: [
      {
        image: '/img/references/wastend/1.png',
        alt: 'Screenshots of wastend',
        color: '#ECF6F6',
      },
    ],
    slug: 'wastend',
    link: 'https://github.com/danielplan/wastend-demo',
    color: '#DCFFFF',
    imageLandscape: '/img/references/wastend/landscape.png',
    imagePortrait: '/img/references/wastend/portrait.png',
    previewSize: 'small',
    tags: getAllTags(['app', 'design']),
  },
  {
    name: 'hazy days',
    description: '_Photos_ taken on days where others would stay at home.',
    previewImageAlt: 'Spiky mountain covered in clouds',
    previewSize: 'large',
    meta: {
      title: 'hazy days',
      description: 'Photos taken on days where others would stay at home.',
      image: '/img/references/hazy-days/1.jpg',
      keywords:
        'hazy days, daniel plan, photography, mountains, clouds, modern',
    },
    images: [
      {
        image: '/img/references/hazy-days/1.jpg',
        alt: 'Spiky mountain covered in clouds',
      },
      {
        image: '/img/references/hazy-days/2.jpg',
        alt: 'Mountain covered in clouds',
      },
      {
        image: '/img/references/hazy-days/3.jpg',
        alt: 'Dark woods covered in fog',
      },
      {
        image: '/img/references/hazy-days/4.jpg',
        alt: 'Mountain covered clouds with green grass',
      },
      {
        image: '/img/references/hazy-days/5.jpg',
        alt: 'Little hut in the middle of a meadow',
      },
      {
        image: '/img/references/hazy-days/6.jpg',
        alt: 'Little hut in the middle of a meadow',
      },
      {
        image: '/img/references/hazy-days/7.jpg',
        alt: 'Silhouette of a mountain covered with trees',
      },
      {
        image: '/img/references/hazy-days/8.jpg',
        alt: 'A path through nature hidden in fog',
      },
      {
        image: '/img/references/hazy-days/9.jpg',
        alt: 'Last sunlight in the woods covered in fog',
      },
    ],
    slug: 'hazy-days',
    imagePortrait: '/img/references/hazy-days/8.jpg',
    imageLandscape: '/img/references/hazy-days/4.jpg',
    tags: getAllTags(['photography', 'nature']),
  },
  {
    name: 'ryoko',
    description: 'Plan your projects like a _journey_ with ryoko.',
    previewImageAlt: 'Screenshot of the interface of ryoko.',
    meta: {
      title: 'ryoko',
      description: 'Plan your projects like a journey with ryoko.',
      image: '/img/references/ryoko/landscape.png',
      keywords:
        'ryoko, daniel plan, projects, planning, web app, web development, modern, project management tool',
    },
    link: 'https://github.com/rolandbernard/ryoko',
    images: [
      {
        image: '/img/references/ryoko/1.png',
        alt: 'Landing page of ryoko',
      },
    ],
    slug: 'ryoko',
    color: '#F2FFFF',
    imageLandscape: '/img/references/ryoko/landscape.png',
    imagePortrait: '/img/references/ryoko/portrait.png',
    previewSize: 'small',
    tags: getAllTags(['app', 'design']),
  },
  {
    name: 'hikari',
    description: 'Edit your images _online._ Fast and safely.',
    previewImageAlt: 'Screenshot of the landing page of hikari.',
    meta: {
      title: 'hikari',
      description: 'Edit your images online. Fast and safely.',
      image: '/img/references/hikari/landscape.png',
      keywords:
        'hikari, daniel plan, images, online, fast, safely, web app, web development, modern',
    },
    link: 'https://github.com/danielplan/hikari/',
    images: [
      {
        image: '/img/references/hikari/landscape.png',
        alt: 'Landing page of hikari',
      },
    ],
    slug: 'hikari',
    imageLandscape: '/img/references/hikari/landscape.png',
    imagePortrait: '/img/references/hikari/landscape.png',
    previewSize: 'small',
    tags: getAllTags(['app']),
  },
];

export default references;
