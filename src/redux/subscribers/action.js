import { REMOVE_SUBSCRIBER, ADD_SUBSCRIBER } from "./type";

const addSubscriber = () => {
  return {
    type: ADD_SUBSCRIBER,
  };
};

const removeSubscriber = () => {
  return {
    type: REMOVE_SUBSCRIBER,
  };
};
