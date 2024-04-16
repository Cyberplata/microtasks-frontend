import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'},
        {message: 'message5'}
    ])

    let [title, setTitle] = useState('')
    console.log(title)


    const addMessage = (title: string) => {
        // передали значение title, что вводим в input-е в newMessage и выводим через setMessage
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
        setTitle('')
    }

    return (
        <div className="App">

            {/*Задача передать title и setTitle из глобального стейта в компоненту Input*/}
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={ () => {addMessage(title) }}/>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;