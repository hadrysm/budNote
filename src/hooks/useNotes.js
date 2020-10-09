import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { db } from 'firebase/base';
import { fetchNotestStart, fetchNotesSuccess, fetchNotesFail } from 'store/notes/actions';
import routes from 'routes';

export const useNotes = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const uId = useSelector(({ auth }) => auth.uid);

  const handleAddNote = async (data) => {
    const noteData = {
      title: data.title,
      content: data.content,
      authorId: uId,
      createNoteData: Date.now(),
    };

    dispatch(fetchNotestStart());

    try {
      await db.collection('notes').add(noteData);
    } catch (error) {
      dispatch(fetchNotesFail(error));
    }
  };

  const handleDeleteNote = async (id) => {
    dispatch(fetchNotestStart());

    try {
      await db.collection('notes').doc(id).delete();
      history.push(routes.notes);
    } catch (error) {
      dispatch(fetchNotesFail(error));
    }
  };

  const handleUpdateNote = async (id, updateData) => {
    dispatch(fetchNotestStart());

    try {
      await db
        .collection('notes')
        .doc(id)
        .set({ ...updateData });
      history.push(routes.notes);
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

  return { handleAddNote, handleDeleteNote, handleUpdateNote };
};
