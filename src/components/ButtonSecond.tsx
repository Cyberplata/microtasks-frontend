import React from 'react';

type ButtonSecondType = {
    name: string
    callBack: () => void
    bgc?: string
}

export const ButtonSecond = ({name, callBack}: ButtonSecondType) => {

    const onClickHandler = () => {
        callBack()

        // if ()
    }

    return (
        <button onClick={onClickHandler}>{name}</button>
    );
};