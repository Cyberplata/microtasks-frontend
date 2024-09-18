import React from 'react';
import {adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";
import styled from "styled-components";

export const Model = () => {
    // Хук useParams возвращает объект пар ключ/значение динамических параметров из текущего URL-адреса, которые были сопоставлены с <Route path>. Дочерние маршруты наследуют все параметры от своих родительских маршрутов.
    const params = useParams()

    // Преобразуем из строки в число и вычитаем - 1 это и получается наша id
    const resultID = Number(params.id) -1
    console.log(resultID) // { id: '1' }

    return (
        <FlexWrapper>
            <h2>{adidasArr[resultID].model}</h2>
            <div>{adidasArr[resultID].collection}</div>
            <div>{adidasArr[resultID].price}</div>
            <PhotoWrapper>
                <StyledPhoto src={adidasArr[resultID].picture}
                             alt={adidasArr[resultID].model}
                />
            </PhotoWrapper>
        </FlexWrapper>
    );
};

const FlexWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
`

export const PhotoWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const StyledPhoto = styled.img`
    width: 600px;
    height: auto;
    object-fit: cover;
`