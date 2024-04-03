import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {

    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])

    let currentMoney = money.filter((filteredMoney) => {
        return filteredMoney.banknote === 'ruble'
    })

    // type onClickFilterHandlerType = {
    //     name: string
    // }

    const onClickFilterHandler = (name: string) => {
        console.log('fffffffffffff')
    }

    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>  {objFromMoneyArr.banknote}</span>
                            <span>  {objFromMoneyArr.nominal}</span>
                            <span>  {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <Button onClick={onClickFilterHandler} name={'all'} callBack={()=> {}}></Button>
                <Button onClick={onClickFilterHandler} name={'ruble'}></Button>
                <Button onClick={onClickFilterHandler} name={'dollar'}></Button>
            </div>
        </>
    );
}

export default App;