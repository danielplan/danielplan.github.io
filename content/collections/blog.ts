import {readFileSync} from 'fs';
import {MetaInformation} from '@components/atoms/MetaInfo';
import {getAllTags, Tag} from './tags';

export interface BlogPost {
  title: string;
  publishDate: string;
  updateDate: string;
  lead: string;
  previewImage: string;
  previewImageAlt: string;
  readTime: number;
  slug: string;
  tags: Tag[];
  body: string;
  meta: MetaInformation;
}

export function getBlogPost(slug: string) {
  const post = blogPosts.find((r) => r.slug === slug) as BlogPost;
  return {
    ...post,
    body: parseBlogPostBody(post.body),
  };
}

function parseBlogPostBody(body: string) {
  const content = readFileSync(
    `${process.cwd()}/content/collections/posts/${body}`
  );
  const regex = /<code(.*?)>(.*?)<\/code>/gs;

  const escapedContent = content.toString().replace(regex, (match, p1, p2) => {
    return `<code${p1}>${escapeHtml(p2)}</code>`;
  });
  return escapedContent;
}

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const blogPosts: BlogPost[] = [
  {
    title: 'SEO for Web Developers: The basics of SEO',
    publishDate: '2022-08-31',
    updateDate: '2022-08-31',
    lead: `While creating this website I needed to learn about the basics of SEO. After reading lots of articles
    I realized that most of them are mainly focused on the content of a website (texts, images, structure of your content etc.) and usually do not cover the technical aspects of SEO.
    Oftentimes, we as developers, don't have any control over the final content that is displayed on the websites we create, since that is usually managed
    experts in that field. Nevertheless we still have a lot to consider to ensure that our pages are optimized for search engines.
    In this article I will cover the basics of SEO and how to optimize your website for search engines - from a technical perspective.`,
    previewImage: '/img/blog/seo-for-developers-basic/banner.png',
    previewImageAlt: 'HTML code used for search engine optimization',
    readTime: 10,
    slug: 'seo-for-web-developers-the-basics',
    tags: getAllTags(['seo', 'tech', 'basics']),
    meta: {
      title: 'SEO for Web Developers: The basics of SEO',
      description:
        'SEO for Web Developers. This article will help you understand the basics of SEO and how to optimize the technical aspect of your web page for search engines.',
      image: '/img/references/seo-for-developers-basic/banner.png',
      keywords:
        'seo, web development, seo for developers, search engine optimization, web page optimization, search engines, blog, web development blog',
    },
    body: 'seo-for-developers-basics.html',
  },
];

export default blogPosts;
