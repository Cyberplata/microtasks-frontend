import React from 'react';

type FooterType = {
    titleForFooter: string
}

export const Footer = (props: FooterType) => {
    return (
        <div>
            {props.titleForFooter}
        </div>
    );
};