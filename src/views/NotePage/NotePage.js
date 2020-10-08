import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';

import { db } from 'firebase/base';

const NotePage = () => {
  const [note, setNote] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      const res = await db.collection('notes').doc(id).get();
      setNote(res.data());
    };

    fetchNote();
  }, [id]);

  return (
    <Wrapper withVariants>
      <div style={{ color: 'white' }}>{note ? note.title : 'loading...'}</div>
    </Wrapper>
  );
};

export default NotePage;
