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
      },
    ],
    slug: 'wastend',
    color: '#DCFFFF',
    imageLandscape: '/img/references/wastend/landscape.png',
    imagePortrait: '/img/references/wastend/portrait.png',
    previewSize: 'small',
    tags: getAllTags(['web app']),
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
    color: '#FBFDFD',
    imageLandscape: '/img/references/ryoko/landscape.png',
    imagePortrait: '/img/references/ryoko/portrait.png',
    previewSize: 'small',
    tags: getAllTags(['web app']),
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
    tags: getAllTags(['web app']),
  },
];

export default references;
