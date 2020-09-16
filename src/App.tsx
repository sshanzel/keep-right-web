import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Login from 'src/views/Login';
import {logout} from './services/auth.service';
import {RootState} from 'src/store/rootReducer';
import {initializeApp} from './store/app.actions';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  const dispatch = useDispatch();
  const {auth, app} = useSelector((state: RootState) => ({auth: state.auth, app: state.app}));

  React.useEffect(() => {
    if (app.isInitialized) return;

    dispatch(initializeApp());
  }, [app.isInitialized]);

  if (!app.isInitialized) return <div>Loading...</div>;

  if (!auth.user) return <Login />;

  return (
    <div className="root">
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default App;
