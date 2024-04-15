import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";


function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'},
        {message: 'message5'}
    ])

    const addMessage = (title: string) => {
        // передали значение title, что вводим в input-е в newMessage и выводим через setMessage
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    return (
        <div className="App">
            {/*<div>*/}
            {/*    <input />*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}

            <FullInput addMessage={addMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;