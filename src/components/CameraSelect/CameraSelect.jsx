import { CAMERAS_OPTIONS } from '../../constants';
import './CameraSelect.css';

export const CameraSelect = ({ camera, setCamera }) => {
  return (
    <div className='select form__select'>
      <label className='select__title'>Rover Camera</label>
      <div className='select__container'>
        <div className='select__button'>
          {
            CAMERAS_OPTIONS.find((item) => {
              return item.value === camera;
            }).name
          }
        </div>
        <select
          className='select__list'
          onChange={(e) => setCamera(e.target.value)}
          value={camera}
        >
          {CAMERAS_OPTIONS.map((camera) => (
            <option value={camera.value} key={camera.value}>
              {camera.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
