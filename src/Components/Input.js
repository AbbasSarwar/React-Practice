import PropTypes from 'prop-types';
import { useState } from 'react';
import '../styles/app.css';

const InputTodo = ({ Additem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      Additem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('please add item');
    }
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add todo"
          value={title}
          onChange={handleChange}
          className="input-text"
        />
        <button type="button">Submit</button>
      </form>
      <span>
        message:
        {message}
      </span>
    </>
  );
};

InputTodo.propTypes = {
  Additem: PropTypes.func.isRequired,
};

export default InputTodo;
