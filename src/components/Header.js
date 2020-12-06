import React from 'react';
import  PropTypes from "prop-types";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

/*
        const Header = ({players,title}) => {code here}

        introduced destructuring assignment, which is a special kind of syntax you can use to "unpack"
        (or extract) values from arrays, or properties from objects, into distinct variables. Developers
        often use destructuring in React to make their components cleaner and easier to understand.
        It provides a more concise way to write your props.
         */


const Header = ({players,title}) => {

    return (
        <header>
            <Stats players={players}/>
            <h1>{ title }</h1>
            <Stopwatch></Stopwatch>
        </header>
    );
}

Header.propTypes ={
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.object)
}

Header.defaultProps = {
    title: "Scoreboard"
}

export default Header
