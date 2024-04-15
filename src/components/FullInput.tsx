import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement> ) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        {props.addMessage(title)}  // передали значение title, что вводим в input-е
    }

    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};