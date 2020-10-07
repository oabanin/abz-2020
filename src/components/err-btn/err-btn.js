import React, {useState} from 'react';

const ErrBtn = () => {
  const [makeErr, setMakeErr] = useState(false);
  if(makeErr) func();
  return (
    <button onClick={setMakeErr}>make error</button>

    );
}

export default ErrBtn;
