import {
  FETCH_NOTES_START,
  FETCH_NOTES_FAIL,
  FETCH_NOTES_SUCCESS,
  ADD_NOTE,
  CLEAR_NOTES,
} from './types';

export const fetchNotestStart = () => ({
  type: FETCH_NOTES_START,
});

export const fetchNotesFail = (error) => ({
  type: FETCH_NOTES_FAIL,
  payload: {
    error,
  },
});

export const fetchNotesSuccess = (notes) => ({
  type: FETCH_NOTES_SUCCESS,
  payload: {
    notes,
  },
});

export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: {
    note,
  },
});

export const clearNotes = () => ({ type: CLEAR_NOTES });
