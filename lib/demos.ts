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
        slug: 'your-notes',
        description: 'Organize your notes',
      },
      {
        name: 'Create notes',
        slug: 'create-notes',
        description: 'Create Notes',
      },
    ],
  },
  {
    name: 'Work',
    items: [
      {
        name: 'To Do',
        slug: 'to-do',
        description: 'To Do List',
      },
      {
        name: 'Create To Do',
        slug: '',
        description: 'create a to-do',
      },
    ],
  },
];
