import React, {PureComponent}from 'react';
import  PropTypes from "prop-types";
import Icon from './Icon';
import Counter from "./Counter";

     /*
     React provides a special type of component, called PureComponent, that helps prevent unnecessary
     re-renders. If your component’s render() method renders the same result given the same props
     and state, you can use PureComponent for a performance boost in some cases.
     */

class Player extends PureComponent{

    static propTypes = {
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        name:PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        id: PropTypes.number,
        index: PropTypes.number,
    }

    render() {

        /*
        const{x} = this.props

        introduced destructuring assignment, which is a special kind of syntax you can use to "unpack"
        (or extract) values from arrays, or properties from objects, into distinct variables. Developers
        often use destructuring in React to make their components cleaner and easier to understand.
        It provides a more concise way to write your props.
         */

        const {
            name,
            removePlayer,
            id,
            score,
            index,
            changeScore,

        }=this.props;


        console.log(name + ' rendered');
        return (
            <div className="player">
        <Icon isHighScore={this.props.isHighScore}></Icon>
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          { name }
      </span>

                <Counter
                    score={score}
                    index={index}
                    changeScore={changeScore}
                />
            </div>
        );

    }


}

export default Player
