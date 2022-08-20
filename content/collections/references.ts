import {MetaInformation} from '@components/atoms/MetaInfo';
import {getAllTags, Tag} from './tags';

export interface Reference {
  name: string;
  description: string;
  meta: MetaInformation;
  slug: string;
  color: string;
  imagePortrait: string;
  imageLandscape: string;
  images: string[];
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

const references = [
  {
    name: 'wastend',
    description: 'A modern way to organize your _groceries_.',
    meta: {
      title: 'wastend - daniel plan',
      description: 'A modern way to organize your groceries.',
      image: '/img/references/wastend/landscape.png',
      keywords:
        'wastend, daniel plan, groceries, shopping, organize, modern, shopping list, web app',
    },
    images: [],
    slug: 'wastend',
    color: '#ff0000',
    imageLandscape: '/img/references/wastend/landscape.png',
    imagePortrait: '/img/references/wastend/portrait.png',
    previewSize: 'large',
    tags: getAllTags(['app']),
  },
];

export default references;
