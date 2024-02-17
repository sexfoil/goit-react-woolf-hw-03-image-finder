import css from './Button.module.css';

export const Button = ({ loadMore, query, page }) => {
  return (
    <button
      onClick={() => loadMore(query, page)}
      type="button"
      className={css.button}
    >
      Load more
    </button>
  );
};
