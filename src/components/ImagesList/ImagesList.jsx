import './ImagesList.css';
export const ImagesList = ({ images, setPhotoItemId, setScreen, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (images.length === 0) {
    return <p>No data</p>;
  }
  return (
    <>
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.id}
          className='images-list__item'
          width='100'
          height='100'
          onClick={() => {
            setPhotoItemId(image.id);
            setScreen(4);
          }}
        />
      ))}
    </>
  );
};
