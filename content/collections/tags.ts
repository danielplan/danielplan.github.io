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
    color: '#ff0000',
  },
];

export default tags;
