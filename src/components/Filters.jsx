import '../styles/layout/Filters.scss';

const Filters = ({
  movieFilter,
  handleChange,
  yearFilter,
  handleChangeYear,
  years,
}) => {
    const handleSubmit = (ev) => {
      ev.preventDefault();
    };

    const handleInput = (ev) => {
      handleChange(ev.target.value);
    };

    const handleSelectYear = (ev) => {
      handleChangeYear(ev.target.value);
    };

    const renderYearsOptions = () => {
      return years.map((year, index) => (
        <option value={year} key={index}>
          {year}
        </option>
      ));
    };

    return (
      <>
        <form className='form' onSubmit={handleSubmit}>
          <label className='form__label' htmlFor='search_name'>
            Movie:
            <input
              className='form__input'
              type='text'
              name='search_movie'
              id='search_movie'
              value={movieFilter}
              onChange={handleInput}
            />
          </label>
          <label className='form__label' htmlFor='search_city'>
            Year:
            <select
              className='form__input'
              name='search_year'
              id='search_year'
              value={yearFilter}
              onChange={handleSelectYear}
            >
              <option value=''>All</option>
              {renderYearsOptions()}
            </select>
          </label>
        </form>
      </>
    );
};

export default Filters;
