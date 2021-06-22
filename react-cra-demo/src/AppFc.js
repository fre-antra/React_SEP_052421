import { useState, Fragment, useEffect } from 'react';

const AppFc = () => {
  const [name, setName] = useState('Patrick');

  useEffect(() => {
    console.log('useEffect -- didMount.');
    return () => {
      console.log('useEffect -- WillUnmount.');
    };
  }, []);

  useEffect(() => {
    console.log('useEffect -- didUpdate.');
  }, [name]);

  const handleClick = () => {
    if (name === 'Patrick') setName('Sam');
    else setName('Patrick');
  };

  return (
    <Fragment>
      <h1>Hello {name}</h1>
      <button onClick={handleClick}>Change Name</button>
    </Fragment>
  );
};

export default AppFc;
