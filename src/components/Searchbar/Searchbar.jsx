import css from './Searchbar.module.css';

export const Searchbar = ({ getImages }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.query.value;
    if (query) {
      return getImages(query, 1);
    }
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.label}>Search</span>
        </button>

        <input
          className={css.input}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
