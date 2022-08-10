import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetings } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.greetings);
  useEffect(() => {
    dispatch(getGreetings());
  }, []);
  return (
    <div>
      <h1>
        Greeting
      </h1>
      <h2>
        {greetings.text}
      </h2>
    </div>
  );
};

export default Greeting;
