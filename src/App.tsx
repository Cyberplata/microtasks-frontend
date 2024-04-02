import React from 'react';
import {MouseEvent} from 'react';

function App() {

    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello im Vasya!')
    // }
    //
    // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello im Ivan!')
    // }

    const onClickHandler = (name: string) => {
        console.log(name)
    }


    return (
        <div className={'App'}>
            <button onClick={(event) => onClickHandler('Vasya!')}>MyYouTubeChanel-1</button>
            <button onClick={(event) => onClickHandler('Ivan!')}>MyYouTubeChanel-2</button>
        </div>
    );
}

export default App;