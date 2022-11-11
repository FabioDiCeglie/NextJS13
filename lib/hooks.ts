import { collection, getDocs } from 'firebase/firestore';
import { database } from '../fireBaseConfig';

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
