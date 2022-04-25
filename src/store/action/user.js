import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    user,
  };
};

export const handleUser = (data) => {
  return async (disaptch) => {
    try {
      (async () => {
        const user = await getDoc(doc(db, 'users', data));
        if (user.exists()) {
          disaptch(setUser(user.data()));
        }
      })();
    } catch (error) {
      console.log(error);
    }
  };
};
