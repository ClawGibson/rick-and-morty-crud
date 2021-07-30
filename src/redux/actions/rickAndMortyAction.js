import {
  ADD_CHARACTER,
  DELETE_CHARACTER,
  EDIT_CHARACTER,
  ADD_CURRENT_CHARACTER,
  FETCH_CHARACTERS,
} from '../Constants';

export const fetchCharactersAction = (payload) => {
  return {
    type: FETCH_CHARACTERS,
    payload,
  };
};

export const addCharacterAction = (payload) => {
  return {
    type: ADD_CHARACTER,
    payload,
  };
};

export const deleteCharacterAction = (payload) => {
  return {
    type: DELETE_CHARACTER,
    payload,
  };
};

export const editCharacterAction = (payload) => {
  return {
    type: EDIT_CHARACTER,
    payload,
  };
};

export const addCurrentCharacterAction = (payload) => {
  return {
    type: ADD_CURRENT_CHARACTER,
    payload,
  };
};
