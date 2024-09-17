import React from 'react';
import {adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";

export const Model = () => {
    const params = useParams()
    console.log(params)

    return (
        <div>Model</div>
    );
};