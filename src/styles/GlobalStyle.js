import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  :root {
    --first: #283845;
    --second: #7A9E9F;
    --third: #4F6367;
    --fourth: #202C39;
    --fifth: #AD343E;

    --word: #D9DCD6;

    --default-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.5);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: var(--fourth);

    --webkit-smoothing: antialiased;
  }

  .container {
    display: flex;
  }

  .content {
    margin-top: 15px;
  }


`;