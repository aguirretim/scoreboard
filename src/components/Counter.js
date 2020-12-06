import React from 'react';
import  PropTypes from "prop-types";

const Counter = ({index,score, changeScore}) => {

        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={()=>changeScore(index,-1)} > - </button>
                <span className="counter-score">{ score }</span>
                <button className="counter-action increment" onClick={()=>changeScore(index,1)} > + </button>
            </div>
        );

}

/*
validate props with the PropTypes library. PropTypes not only help you catch and avoid bugs,
they also serve as a documentation for components.
 */

Counter.propTypes ={
        index:PropTypes.number,
        score:PropTypes.number,
        changeScore: PropTypes.func
};

export default Counter
