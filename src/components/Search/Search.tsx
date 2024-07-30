import React from 'react';
import { ReactComponent as SearchIcon } from './../../assets/icon-search.svg';
import styles from './Search.module.scss';
import Button from '../Button/Button';

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement;
};

const Search: React.FC<SearchProps> = ({ hasError, onSubmit }) => {
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement & FormFields>
  ) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (text) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  };

  return (
    <form action="" onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>

        <input
          type="text"
          className={styles.textField}
          id="search"
          name="username"
          placeholder="Search Github username..."
        />

        {hasError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};

export default Search;
