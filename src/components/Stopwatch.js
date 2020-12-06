import React,{Component}  from 'react';

class Stopwatch extends Component{

    state = {
        isRunning:false,
        elapsedTime:0,
    };



    componentDidMount() {
       this.intervalID = setInterval(()=> this.tick(),100);
    }

    componentWillUnMount(){
        clearInterval(this.intervalID);
    }

    tick = () => {
        if(this.state.isRunning){
        const now = Date.now();
            this.setState(prevState =>({
                previousTime:now,
                elapsedTime:prevState.elapsedTime + (now - this.state.previousTime)
            }));
            console.log("cking....");

        }
    }

    handleStopwatch = () => {
        this.setState(prevState=>
            ({
            //Changes isRunning State
            isRunning: !prevState.isRunning,
        }));

        if(!this.state.isRunning){
            console.log("Starting");
            this.setState({previousTime:Date.now()})
        }
    }

    handelReset = () => {
        this.setState({elapsedTime:0});
    }

    render (){

        const secounds = Math.floor(this.state.elapsedTime/1000);

        return(
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">
                    {secounds}
                </span>
                <button onClick={this.handleStopwatch}>
                    {
                       //condition ? exprIfTrue : exprIfFalse
                        this.state.isRunning ? "stop" : 'Start'
                    }
                </button>
                <button onClick={this.handelReset}>Reset</button>
            </div>
        );
    }
}

export default Stopwatch;
