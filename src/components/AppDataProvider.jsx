import { useEffect } from 'react';
import actionTypes from '../context/actionTypes';
import useDataStore from '../hooks/useDataStore';
import { db } from '../services/firebase';

const AppDataProvider = () => {
  const [{ user }, dispatch] = useDataStore();

  useEffect(() => {
    const unSubscribeGetTodo = db
      .collection('todos')
      .where('uid', '==', user.uid)
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) => {
        const listOfItem = [];
        snapshot.forEach((item) => {
          listOfItem.push({ id: item.id, ...item.data() });
        });
        dispatch({
          type: actionTypes.ADD_TODO,
          payload: listOfItem,
        });
      });
    return () => {
      unSubscribeGetTodo();
    };
  }, [user.uid, dispatch]);

  return null;
};

export default AppDataProvider;
