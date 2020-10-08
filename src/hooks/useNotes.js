import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { db } from 'firebase/base';
import { fetchNotestStart, fetchNotesSuccess, fetchNotesFail } from 'store/notes/actions';

export const useNotes = () => {
  const dispatch = useDispatch();
  const uId = useSelector(({ auth }) => auth.uid);

  const handleAddNote = async (data) => {
    const noteData = {
      title: data.title,
      content: data.content,
      authorId: uId,
      createNoteData: null,
    };

    dispatch(fetchNotestStart());

    try {
      await db.collection('notes').add(noteData);
    } catch (error) {
      dispatch(fetchNotesFail(error));
    }
  };

  const handleDelete = async (id) => {
    dispatch(fetchNotestStart());

    try {
      await db.collection('notes').doc(id).delete();
    } catch (error) {
      dispatch(fetchNotesFail(error));
    }
  };

  useEffect(() => {
    const unsubscribe = db.collection('notes').onSnapshot((snapshot) => {
      if (snapshot) {
        const notes = [];
        snapshot.forEach((doc) => notes.push({ id: doc.id, ...doc.data() }));
        dispatch(fetchNotesSuccess(notes));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return { handleAddNote, handleDelete };
};
