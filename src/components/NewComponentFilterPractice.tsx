import React from 'react';
import {FilterType} from "../App";

type NewComponentPropsType = {
    currentMoney: Array<{ banknote: string, nominal: number, number: string }>
    onClickFilterHandler: (nameButton: FilterType) => void
}

export const NewComponentFilterPractice = (props: NewComponentPropsType) => {

    return (
            <>
                <ul>
                    {props.currentMoney.map((objFromMoneyArr, index) => {
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
                    <button onClick={() => props.onClickFilterHandler('all')}>all</button>
                    <button onClick={() => props.onClickFilterHandler('ruble')}>rubles</button>
                    <button onClick={() => props.onClickFilterHandler('dollar')}>dollars</button>
                </div>
            </>
    );
};