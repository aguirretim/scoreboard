import React, {Component} from "react";

class AddPlayerForm extends Component{

   /* state = {
        value:""
    };*/

    playerInput = React.createRef();

    /*handleValueChange = (e) => {
     this.setState({value: e.target.value})
    }*/

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addPlayer(
            //this.state.value
            this.playerInput.current.value
        );

        e.currentTarget.reset();
       /* this.setState({value:""})*/
    }

    render() {
       // console.log(this.state.value)
        return (
          <form onSubmit={this.handleSubmit}>
              <input

                  type="text"
                  ref ={this.playerInput}
                 /* value={this.state.value}
                  onChange={this.handleValueChange}*/
                  placeholder="Enter a player's name"


              />


              <input

                type="submit"
                value="Add Player"

              />

          </form>

        );
    }
}

export default AddPlayerForm;
