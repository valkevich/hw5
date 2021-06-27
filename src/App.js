import React from 'react';
import './App.css';

class App extends React.Component {

    state = {
        loading: false,
        greeting: ''
    }

    onChange = () => {
        setTimeout(() => {
            this.sayHi()
        }, 3000)

        this.setState({loading: true});
    }

    sayHi = () => {
        this.setState({greeting:'Hello', loading:false})
    }

    render(){
        return (
            <div>
                <button onClick={this.onChange}>Say hi</button>
                {this.state.loading &&
                    <div className='loader'></div>
                }
                {this.state.greeting && (
                    <span>{this.state.greeting}</span>
                )}
            </div>
               
        )
    }
}

export default App;