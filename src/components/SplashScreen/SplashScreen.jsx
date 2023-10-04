import './SplashScreen.css';
export const SplashScreen = ({ setScreen }) => {
  return <div className='splash-screen' onClick={() => setScreen(2)}></div>;
};
