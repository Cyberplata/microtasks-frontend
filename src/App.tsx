import React from 'react';
import {MouseEvent} from 'react';
import {Button} from "./components/Button";

function App() {

    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello im Vasya!')
    // }
    //
    // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello im Ivan!')
    // }

    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }

    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }

    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }

    const StupidBtn = () => {
        console.log('Im stupid button')
    }

    const ColoredButton = (background: string) => {
        console.log('Im colored button')
    }

    return (
        /*<div className={'App'}>
            <button onClick={(event) => onClickHandler('Vasya!')}>MyYouTubeChanel-1</button>
            <button onClick={(event) => onClickHandler('Ivan!')}>MyYouTubeChanel-2</button>
        </div>*/

        <div className={'App'}>
            {/*<button>MyYouTubeChanel-1</button>*/}
            {/*<button>MyYouTubeChanel-2</button>*/}

            <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('Im Vasya!', 21, 'live in Minsk')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo('Im Ivan!')}/>
            <Button name={'Stupid button'} callBack={StupidBtn}/>
            <Button name={'Colored button'} callBack={() => ColoredButton("#f10909")}/>
            {/*<Button name={'Delete'}/>*/}
        </div>
    );
}

export default App;