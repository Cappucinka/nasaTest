import React, { useState } from 'react';
import './app.css';
import { getRequestUrl } from './helpers/getRequestUrl';
import { usePhotosRequest } from './hooks/usePhotosRequest';
import { formatDate } from './helpers/formatDate';
import { SplashScreen } from './components/SplashScreen/SplashScreen';
import { FormScreen } from './components/FormScreen/FormScreen';
import { PhotosScreen } from './components/PhotosScreen/PhotosScreen';
import { PhotoItemScreen } from './components/PhotoItemScreen/PhotoItemScreen';
import { Wrapper } from './components/Wrapper/Wrapper';

function App() {
  const [screen, setScreen] = useState(1);
  const [date, setDate] = useState('2021-10-18');
  const [camera, setCamera] = useState('fhaz');
  const newUrl = getRequestUrl(camera, date);
  const [url, setUrl] = useState(newUrl);
  const [photoItemId, setPhotoItemId] = useState();

  const { images, loading } = usePhotosRequest({ url });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(newUrl);
    setScreen(3);
  };

  if (screen === 1) {
    return (
      <Wrapper>
        <SplashScreen setScreen={setScreen} />
      </Wrapper>
    );
  }
  if (screen === 2) {
    return (
      <Wrapper>
        <FormScreen
          camera={camera}
          setCamera={setCamera}
          date={date}
          setDate={setDate}
          formatDate={formatDate}
          handleSubmit={handleSubmit}
        />
      </Wrapper>
    );
  }
  if (screen === 3) {
    return (
      <Wrapper>
        <PhotosScreen
          camera={camera}
          date={date}
          screen={screen}
          images={images}
          setPhotoItemId={setPhotoItemId}
          setScreen={setScreen}
          loading={loading}
        />
      </Wrapper>
    );
  }
  if (screen === 4) {
    return (
      <Wrapper>
        <PhotoItemScreen
          photoItemId={photoItemId}
          images={images}
          screen={screen}
          setScreen={setScreen}
        />
      </Wrapper>
    );
  }
}

export default App;
