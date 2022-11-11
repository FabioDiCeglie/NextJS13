import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBLOqQrPdGg5kAZAwDVkxTK87qcJIjoqRw',
  authDomain: 'nextjs13-a4547.firebaseapp.com',
  projectId: 'nextjs13-a4547',
  storageBucket: 'nextjs13-a4547.appspot.com',
  messagingSenderId: '945011151184',
  appId: '1:945011151184:web:2920f94899826dbb639c55',
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
