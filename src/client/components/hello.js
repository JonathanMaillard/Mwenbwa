/* becodeorg/mwenbwa
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import * as React from "react";

const HelloWorld = ({onClick: handleClick}) => (
    <div>
        <h1>{"Hello, branquignole ultime!"}</h1>
        <hr />
        <small>{"becode/mwenbwa"}</small>
        <button onClick={handleClick}>test</button>
    </div>
);

export default HelloWorld;
