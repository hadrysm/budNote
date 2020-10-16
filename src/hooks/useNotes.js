import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { db } from 'firebase/base';
import { fetchNotestStart, fetchNotesSuccess, fetchNotesFail } from 'store/notes/actions';
import routes from 'routes';

export const useNotes = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const uId = useSelector((state) => state.auth.uid);
  const notesCollectionRef = db.collection('users').doc(uId).collection('notes');

  const fetchNotesData = async () => {
    const results = await notesCollectionRef.get();
    const notes = [];
    results.docs.map((doc) => notes.push({ id: doc.id, ...doc.data() }));
    dispatch(fetchNotesSuccess(notes));
  };

  const memoizedFetchNotesData = useCallback(fetchNotesData, []);

  const handleAddNote = async (data) => {
    const noteData = {
      title: data.title,
      content: data.content,
      createAt: Date.now(),
    };

    dispatch(fetchNotestStart());

    try {
      await notesCollectionRef.add(noteData);
      memoizedFetchNotesData();
    } catch (error) {
      dispatch(fetchNotesFail(error));
    }
  };

  const handleDeleteNote = async (id) => {
    dispatch(fetchNotestStart());

    try {
      await notesCollectionRef.doc(id).delete();
      history.push(routes.notes);
    } catch (error) {
      dispatch(fetchNotesFail(error));
    }
  };

  const handleUpdateNote = async (id, updateData) => {
    dispatch(fetchNotestStart());

    try {
      await notesCollectionRef.doc(id).set({ ...updateData });
      history.push(routes.notes);
    } catch (error) {
      dispatch(fetchNotesFail(error));
    }
  };

  useEffect(() => {
    memoizedFetchNotesData();
  }, [memoizedFetchNotesData]);

  return { handleAddNote, handleDeleteNote, handleUpdateNote };
};
