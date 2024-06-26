import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState('')
    console.log(title)

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement> ) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)  // передали значение title, что вводим в input-е
        setTitle('')
    }

    return (
        <div>
            {/*Привязываем title к value input-а чтобы очистить input при клике*/}
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};