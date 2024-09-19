import React from 'react';
import {adidasArr, AdidasItem} from "./Adidas";
import {Navigate, useParams} from "react-router-dom";
import styled from "styled-components";
import {ModelMissing} from "./ModelMissing";
import {pumaArr, PumaItem} from "./Puma";

export type ModelType = {
    items: AdidasItem[] | PumaItem[]
}

export const Model = ({items}: ModelType) => {
    // const { items } = props;

    // Хук useParams возвращает объект пар ключ/значение динамических параметров из текущего URL-адреса, которые были сопоставлены с <Route path>. Дочерние маршруты наследуют все параметры от своих родительских маршрутов.
    const params = useParams()

    // Преобразуем из строки в число и вычитаем - 1 это и получается наша id
    // const resultID = Number(params.id) - 1
    const resultID = Number(params.id)
    console.log(params) // { id: '1' }

    const currentModel = items.find((el) => el.id === resultID);

    // const findAdidas = adidasArr.find((el) => el.id === resultID)
    // // if (!findAdidas) {
    // //     // return <Navigate to="/adidas/missing" />;
    // //     return <ModelMissing />;
    // // }
    //
    // const findPuma = pumaArr.find((el) => el.id === resultID)
    // // if (!findPuma) {
    // //     // return <Navigate to="/adidas/missing" />;
    // //     return <ModelMissing />;
    // // }


    return (
        // Через resultID
        // <FlexWrapper>
        //     <h2>{adidasArr[resultID].model}</h2>
        //     <h4>{adidasArr[resultID].collection}</h4>
        //     <h3>{adidasArr[resultID].price}</h3>
        //     {/*<PhotoWrapper>*/}
        //     <StyledPhoto src={adidasArr[resultID].picture}
        //                  alt={adidasArr[resultID].model}
        //     />
        //     {/*</PhotoWrapper>*/}
        // </FlexWrapper>

        // // Через find
        // <FlexWrapper>
        //     <h2>{findAdidas.model}</h2>
        //     <h4>{findAdidas.collection}</h4>
        //     <h3>{findAdidas.price}</h3>
        //     <StyledPhoto src={findAdidas.picture}
        //                  alt={findAdidas.model}
        //     />
        // </FlexWrapper>

        // <>
        //     {findAdidas ? (
        //             <FlexWrapper>
        //                 <h2>{findAdidas.model}</h2>
        //                 <h4>{findAdidas.collection}</h4>
        //                 <h3>{findAdidas.price}</h3>
        //                 <StyledPhoto src={findAdidas.picture} alt={findAdidas.model}/>
        //             </FlexWrapper>
        //         ) :
        //
        //         findPuma ? (
        //             <FlexWrapper>
        //                 <h2>{findPuma.model}</h2>
        //                 <h4>{findPuma.collection}</h4>
        //                 <h3>{findPuma.price}</h3>
        //                 <StyledPhoto src={findPuma.picture} alt={findPuma.model}/>
        //             </FlexWrapper>
        //         ) : (
        //             <ModelMissing/>
        //         )
        //     }
        // </>

        <>
            {currentModel ? (
                <FlexWrapper>
                    <h2>{currentModel.model}</h2>
                    <h4>{currentModel.collection}</h4>
                    <h3>{currentModel.price}</h3>
                    <StyledPhoto src={currentModel.picture} alt={currentModel.model} />
                </FlexWrapper>
            ) : (
                <ModelMissing />
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