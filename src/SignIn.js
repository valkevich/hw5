import React from 'react'

class SignIn extends React.Component {
    state = {
        isSignedIn: false
    }

    onSign = () => {
        setTimeout(() => {
            this.setState({isSignedIn:true})
        }, 3000)
    }

    render(){
        return (
            <div>
            {this.state.isSignedIn ? 
                (<span>Hello</span>) : 
                (<button onClick={this.onSign}>Sign in</button>)
            }
            </div>
        )
    }
}

export default SignIn;