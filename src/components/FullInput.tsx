import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (value: string) => void
}

export const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement> ) => {
        setTitle(event.currentTarget.value)
    }

    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={() => {props.addMessage('')}}>+</button>
        </div>
    );
};