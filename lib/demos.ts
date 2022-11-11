type Item = {
  name: string;
  items: {
    name: string;
    slug: string;
    description?: string;
    isDisabled?: boolean;
  }[];
};

export const demos: Item[] = [
  {
    name: 'Notes',
    items: [
      {
        name: 'Create notes',
        slug: 'layouts',
        description: 'Create Notes',
      },
      {
        name: 'Read Notes',
        slug: 'route-groups',
        description: 'Organize your notes',
      },
    ],
  },
];
