import React, {useState} from 'react';

type NewComponentFilterPractice = {

}

export const NewComponentFilterPractice = () => {



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
                    <button onClick={() => onClickFilterHandler('all')}>all</button>
                    <button onClick={() => onClickFilterHandler('ruble')}>rubles</button>
                    <button onClick={() => onClickFilterHandler('dollar')}>dollars</button>
                </div>
            </>
    );
};