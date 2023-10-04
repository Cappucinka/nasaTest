import './PhotosScreen.css';
import { ImagesList } from '../ImagesList/ImagesList';
import { formatDate } from '../../helpers/formatDate';
import { CAMERAS_OPTIONS } from '../../constants';

export const PhotosScreen = ({
  camera,
  date,
  screen,
  images,
  setPhotoItemId,
  setScreen,
  loading,
}) => {
  return (
    <div className='photos-screen'>
      <h1 className='title'>
        {
          CAMERAS_OPTIONS.find((item) => {
            return item.value === camera;
          }).name
        }
      </h1>
      <h2 className='subtitle'>{formatDate(date)}</h2>
      <span
        className='back-button'
        onClick={() => setScreen(screen - 1)}
      ></span>
      <div className='images-list'>
        <ImagesList
          images={images}
          setPhotoItemId={setPhotoItemId}
          setScreen={setScreen}
          loading={loading}
        />
      </div>
    </div>
  );
};
