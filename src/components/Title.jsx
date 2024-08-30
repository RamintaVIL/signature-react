import React from 'react';

function Title({ text }) {
    return <h1>{!text ? 'Your signature' : text}</h1>;
}

export default Title;
