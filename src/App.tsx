import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import KeepRight from './views';
import Login from 'src/views/Login';
import Appbar from './views/layout/Appbar';
import {RootState} from 'src/store/rootReducer';
import {initializeApp} from './store/app.actions';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  const dispatch = useDispatch();
  const {auth, app} = useSelector((state: RootState) => ({auth: state.auth, app: state.app}));

  React.useEffect(() => {
    if (app.isInitialized) return;

    dispatch(initializeApp());
  }, [dispatch, app.isInitialized]);

  if (!app.isInitialized) return <div>Loading...</div>;

  if (!auth.user) return <Login />;

  return (
    <div className="w-screen h-screen flex flex-col">
      <Appbar />
      <KeepRight />
    </div>
  );
};

export default App;
