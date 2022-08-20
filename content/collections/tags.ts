export interface Tag {
  name: string;
  color: string;
}

export function getAllTags(t: string[]): Tag[] {
  return t.map((tag) => tags.find((t) => t.name === tag) as Tag);
}

const tags: Tag[] = [
  {
    name: 'web app',
    color: '#FF5935',
  },
];

export default tags;
