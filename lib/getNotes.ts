import { collection, getDocs } from 'firebase/firestore';
import { database } from '../fireBaseConfig';

const databaseRef = collection(database, 'Notes');

export const getNotes = async () => {
  return await getDocs(databaseRef).then((resp) =>
    resp.docs.map((e) => e.data()),
  );
};
