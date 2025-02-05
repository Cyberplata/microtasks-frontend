import React from 'react';
import {useParams} from "react-router-dom";
import styled from "styled-components";
import {adidasArr, AdidasItem} from "./Adidas";
import {ModelMissing} from "./ModelMissing";
import {pumaArr, PumaItem} from "./Puma";

// export type ModelType = {
//     items: AdidasItem[] | PumaItem[]
// }

type CrossModels = {
    [key: string]: (AdidasItem[] | PumaItem[])
}

const crossModels: CrossModels = {
    adidas: adidasArr,
    puma: pumaArr
}

// export const Model = ({items}: ModelType) => {
export const Model = () => {
    // const { items } = props;

    // Хук useParams возвращает объект пар ключ/значение динамических параметров из текущего URL-адреса, которые были сопоставлены с <Route path>. Дочерние маршруты наследуют все параметры от своих родительских маршрутов.
    const {model, id} = useParams()

    // Преобразуем из строки в число и вычитаем - 1 это и получается наша id
    const resultID = Number(id)

    const currentModel = model
        ? crossModels[model].find(el => el.id === resultID)
        : null

    return (
        <>
            {currentModel ? (
                <FlexWrapper>
                    <h2>{currentModel.model}</h2>
                    <h4>{currentModel.collection}</h4>
                    <h3>{currentModel.price}</h3>
                    <StyledPhoto src={currentModel.picture} alt={currentModel.model}/>
                </FlexWrapper>
            ) : (
                <ModelMissing/>
            )}
        </>
    );
};

const FlexWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    //gap: 50px;
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