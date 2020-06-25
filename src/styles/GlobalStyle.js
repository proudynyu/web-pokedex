import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  :root {
    --first: #B8D8D8;
    --second: #7A9E9F;
    --third: #4F6367;
    --fourth: #EEF5DB;
    --fifth: #FE5F55;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: var(--fourth);
  }

  .container {
    display: flex;
  }

  .content {
    margin-top: 15px;
  }


`;