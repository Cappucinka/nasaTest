import './DateSelect.css';

export const DateSelect = ({ date, setDate, formatDate }) => {
  return (
    <div className='date'>
      <label htmlFor='date' className='date__title'>
        Date
      </label>
      <div className='date__container'>
        <div className='date__button'>{formatDate(date)}</div>
        <input
          className='date__input'
          type='date'
          name='date'
          id='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
    </div>
  );
};
