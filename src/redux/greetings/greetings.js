// import axios from 'axios';

const url = 'http://127.0.0.1:3000/v1/greetings';
const GET_GREETINGS = 'GET_GREETINGS';

export const getGreetings = () => async (dispatch) => {
  const response = await fetch(url);
  const greeting = await response.json();
  if (response.ok) {
    dispatch({
      type: GET_GREETINGS,
      payload: greeting,
    });
  }
};

function greetingReducer(state = {}, action) {
  switch (action.type) {
    case GET_GREETINGS:
      return action.payload;
    default:
      return state;
  }
}

export default greetingReducer;
