import React, { useState } from 'react';

const useMyForm = () => {
    const [choosedFilename, setchoosedFilename] = useState(null);
    const [submitError, setSubmitError] = useState(null);
    const [disabledSubmitBtn, setSubmitDisabledButton] = useState(false);

    const clearChoosedFilename = () => setchoosedFilename(null);
    const chooseFilename = (name) => setchoosedFilename(name);
    const clearSubmitError = () => setSubmitError(null);
    const enableSubmitBtn = () => setSubmitDisabledButton(false);
    const disableSubmitBtn = () => setSubmitDisabledButton(true);

    return {
        choosedFilename,
        clearChoosedFilename,
        chooseFilename,
        submitError,
        clearSubmitError,
        setSubmitError,
        disabledSubmitBtn,
        enableSubmitBtn,
        disableSubmitBtn
    }
}

export { useMyForm };