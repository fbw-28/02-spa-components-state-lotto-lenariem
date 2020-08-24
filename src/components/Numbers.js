import React, {Component} from "react";

export default class Numbers extends Component {
    
    state = {
        numberLotto: [1,2,3,4,5,6,7],
        display: "flex"
    }
        
    makeRandomNumber = () => {
        let newNumbers = [];
        
        for (let i = 0; i < 6; i++ ) {
            let randomN = Math.floor(Math.random() * 49);
            if (newNumbers.indexOf(randomN) !=-1) {
                i--
            } else {
                newNumbers.push (randomN)
            }            
        }
        
        newNumbers = [...newNumbers, Math.floor(Math.random() * 10)]

        this.setState({
            numberLotto: newNumbers 
        })
    }

    hideNumbers = () => {
        this.setState({
            display: "none"
        })
    }

    render() {
        const style = {
            display: this.state.display
        }
        return (
            <>
                <div className="numbers" style={style}>
                    {this.state.numberLotto.map((item) => 
                        <span>{item}</span>
                    )}
  
                </div>
                <div className="btns">
                    <button 
                        className="btn reset-btn"
                        onClick={this.hideNumbers}>
                        Reset</button>
                    <button 
                        className="btn numbers-btn"
                        onClick={this.makeRandomNumber}
                        >
                        Show me lucky numbers</button>
                </div>
            </>
        )
    }
} 