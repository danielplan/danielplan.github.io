import {MetaInformation} from '@components/atoms/MetaInfo';
import {getAllTags, Tag} from './tags';

export interface BlogPost {
  title: string;
  date: string;
  lead: string;
  previewImage: string;
  readTime: number;
  slug: string;
  tags: Tag[];
  body: string;
  meta: MetaInformation;
}

export function getBlogPost(slug: string) {
  return blogPosts.find((r) => r.slug === slug) as BlogPost;
}

const blogPosts = [
  {
    title: 'How to use the Wastend app',
    date: '2020-01-01',
    lead: 'A simple guide to use the Wastend app.',
    previewImage: '/img/blog/wastend-app.png',
    readTime: 5,
    slug: 'how-to-use-the-wastend-app',
    tags: getAllTags(['app']),
    meta: {
      title: 'How to use the Wastend app - daniel plan',
      description: 'A simple guide to use the Wastend app.',
      image: '/img/references/wastend/landscape.png',
      keywords:
        'wastend, daniel plan, groceries, shopping, organize, modern, shopping list, web app',
    },
    body: 'test.html',
  },
];

export default blogPosts;
