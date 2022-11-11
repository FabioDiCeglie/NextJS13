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
        name: 'Your Notes',
        slug: 'route-groups',
        description: 'Organize your notes',
      },
      {
        name: 'Create notes',
        slug: 'layouts',
        description: 'Create Notes',
      },
    ],
  },
];
