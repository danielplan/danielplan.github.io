export interface Tag {
  name: string;
  color: string;
}

export function getAllTags(t: string[]): Tag[] {
  return t.map((tag) => tags.find((t) => t.name === tag) as Tag);
}

const tags: Tag[] = [
  {
    name: 'app',
    color: '#FF5935',
  },
  {
    name: 'photography',
    color: '#47d8be',
  },
  {
    name: 'nature',
    color: '#47d87f',
  },
  {
    name: 'design',
    color: '#f779af',
  },
  {
    name: 'seo',
    color: '#49b0f4',
  },
  {
    name: 'tech',
    color: '#5a49f4',
  },
  {
    name: 'basics',
    color: '#81d323',
  },
];

export default tags;
