export type Item = {
  name: string;
  items: {
    name: string;
    slug: string;
    description?: string;
    isDisabled?: boolean;
  }[];
};

export type Notes = {
  id: String;
  title: String;
  content: String;
};

export type Tasks = {
  id: String;
  title: String;
  content: String;
};

export type Provider = {
  id: string;
  name: string;
};
