import '../styles/layout/Filters.scss';

const Filters = () => {
  return (
    <>
      <form className='form'>
        <label className='form__movie' htmlFor='search_name'>
          Movie:
          <input
            className='form__input--movie'
            type='text'
            name='search_name'
            id='search_name'
            //   value={nameFilter}
            //   onChange={handleInput}
          />
        </label>
        <label className='form__year' htmlFor='search_city'>
          Year:
          <select
            className='form__input--year'
            name='search_city'
            id='search_city'
            value=''
            //   onChange={handleSelect}
          >
            <option value=''>All</option>
            {/* {renderCountriesOptions()} */}
          </select>
        </label>
      </form>
    </>
  );
};

export default Filters;
