import { collection, getDocs } from 'firebase/firestore';
import { database } from '../fireBaseConfig';
import { cache } from 'react';

const databaseRef = collection(database, 'Notes');
const databaseRefToDo = collection(database, 'ToDo');

export const getNotes = async () => {
  return await getDocs(databaseRef).then((resp) =>
    resp.docs.map((e) => e.data()),
  );
};

export const getToDo = async () => {
  return await getDocs(databaseRefToDo).then((resp) =>
    resp.docs.map((e) => e.data()),
  );
};

export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};
export type Category = {
  name: string;
  slug: string;
};

export const getCategories = cache((): Category[] => [
  {
    name: 'Notes',
    slug: 'notes',
  },
]);

export async function fetchCategoryBySlug(slug: string | undefined) {
  // Assuming it always return expected categories
  return getCategories().find((category) => category.slug === slug);
}

export async function fetchCategories(): Promise<Category[]> {
  return getCategories();
}
