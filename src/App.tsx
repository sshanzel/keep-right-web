import React from 'react';
import Lottie from 'react-lottie';
import {useDispatch, useSelector} from 'react-redux';
import config from './config';
import KeepRight from './views';
import Login from 'src/views/Login';
import Appbar from './views/layout/Appbar';
import {RootState} from 'src/store/rootReducer';
import {initializeApp} from './store/app.actions';
import animationData from './lottie-files/rocket-lunch.json';

export interface AppProps {}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

const App: React.FC<AppProps> = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(config.isProduction ? true : false);
  const {auth, app} = useSelector((state: RootState) => ({auth: state.auth, app: state.app}));

  React.useEffect(() => {
    if (app.isInitialized) return;

    dispatch(initializeApp());
  }, [dispatch, app.isInitialized]);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (!app.isInitialized || !auth.isObservingState || loading)
    return (
      <div className="w-screen h-screen items-center justify-center lg:p-48 md:p-40">
        <Lottie
          style={{marginTop: '-2rem'}}
          options={defaultOptions}
          isClickToPauseDisabled={true}
        />
      </div>
    );

  if (!auth.user) return <Login />;

  return (
    <div className="w-screen h-screen flex flex-col bg-gray-400">
      <Appbar />
      <KeepRight name={auth.user.firebaseUser.displayName || ''} />
    </div>
  );
};

export default App;
