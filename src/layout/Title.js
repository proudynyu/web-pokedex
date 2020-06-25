import React from 'react';

const Title = ({ title, classname="defaultTitle" }) => {
  return (
      <header className={classname}>
        <h1>{title}</h1>
      </header>
  )
}

export default Title;