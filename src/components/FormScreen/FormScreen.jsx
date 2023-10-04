import { CameraSelect } from '../CameraSelect/CameraSelect';
import { DateSelect } from '../DateSelect/DateSelect';
import './FormScreen.css';

export const FormScreen = ({
  camera,
  setCamera,
  date,
  setDate,
  formatDate,
  handleSubmit,
}) => {
  return (
    <div className='form-screen'>
      <h1 className='title form-screen__title'>Select Camera and Date</h1>
      <form
        className='form-screen__form form'
        method='post'
        onSubmit={handleSubmit}
      >
        <CameraSelect camera={camera} setCamera={setCamera} />
        <DateSelect date={date} setDate={setDate} formatDate={formatDate} />
        <button type='submit' className='form__button'>
          Explore
        </button>
      </form>
    </div>
  );
};
