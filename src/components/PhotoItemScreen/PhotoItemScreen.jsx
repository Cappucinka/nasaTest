import './PhotoItemScreen.css';

export const PhotoItemScreen = ({ images, photoItemId, screen, setScreen }) => {
  return (
    <div className='photo-item-screen'>
      <span
        className='back-button back-button_color_white'
        onClick={() => setScreen(screen - 1)}
      ></span>
      <span className='share-button'></span>
      <h2 className='subtitle subtitle_color_white'>Photo ID</h2>
      <h1 className='title title_color_white'>{photoItemId}</h1>
      <div className='photo-item-screen__content'>
        <img
          alt={photoItemId}
          src={
            images.find((item) => {
              return item.id === photoItemId;
            }).src
          }
        />
      </div>
    </div>
  );
};
