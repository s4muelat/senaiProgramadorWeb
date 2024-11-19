import React, { Fragment, useRef } from 'react';

function MinhaRef() {
  const meuInputRef = useRef(null);

  const focarNoInput = () => {
    // Acessando o DOM diretamente através da ref
    meuInputRef.current.focus();
  };

  return (
    <Fragment>
      <input ref={meuInputRef} type="text" />
      <button onClick={focarNoInput}>Focar no Input</button>
    </Fragment>
  );
}

export default MinhaRef;