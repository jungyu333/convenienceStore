import React, { useEffect } from 'react';
import { loadMyInfo } from '../action/user';
import { useAppDispatch } from '../store/store';

function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadMyInfo());
  }, [dispatch]);
  return <div>Home</div>;
}

export default Home;
