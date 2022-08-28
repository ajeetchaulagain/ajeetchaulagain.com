import { css } from 'styled-components';

export const BaseStyles = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-size: 100%;
  }

  .main {
    font-family: Source Sans Pro, -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    font-weight: 400;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // Enabling Flex
    display: flex;
    flex-wrap: wrap;
  }

  h1 {
    font-family: 'Domine', serif;
    font-weight: 700;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: inherit;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  input[type='text'],
  input[type='email'],
  input[type='url'],
  input[type='password'],
  input[type='search'],
  input[type='number'],
  input[type='tel'],
  input[type='range'],
  input[type='date'],
  input[type='month'],
  input[type='week'],
  input[type='time'],
  input[type='datetime'],
  input[type='datetime-local'],
  input[type='color'],
  textarea {
    border: 1px solid #d9d8da;
    padding: 0.8rem 1rem;
    font-weight: 300;
    border-radius: 2px;
    letter-spacing: 1px;
    &:focus {
      border-color: #5c257f;
      box-shadow: none;
      outline: none;
      color: #5c257f;
    }
  }
  input[type='submit'],
  button {
    cursor: pointer;
  }

  form {
    label {
      width: 100%;
      font-size: inherit;
      display: block;
      color: #333;
    }
  }

  textarea {
    width: 100%;
  }

  em {
    font-weight: 600;
    font-style: inherit;
  }
`;
