'use client';

import { useState } from 'react';
import Button from './Button';
import Assessment from './Assessment';

export default function AssessmentTrigger({ children }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>{children}</Button>
      {show && <Assessment onClose={() => setShow(false)} />}
    </>
  );
}
