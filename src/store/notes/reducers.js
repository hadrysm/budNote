import { FETCH_NOTES_START, FETCH_NOTES_FAIL, FETCH_NOTES_SUCCESS, ADD_NOTE } from './types';

const INITIAL_STATE = {
  notes: [],
  loading: false,
  error: null,
};

const notesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_NOTES_START:
      return {
        ...state,
        loading: true,
      };

    case FETCH_NOTES_FAIL:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };

    case FETCH_NOTES_SUCCESS:
      return {
        ...state,
        loading: false,
        notes: payload.notes,
      };

    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, payload.note],
      };

    default:
      return state;
  }
};

export default notesReducer;
