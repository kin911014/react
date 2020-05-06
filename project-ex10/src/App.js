import React from 'react';

class App extends React.Component {
    constructor(){
        super(...arguments);
    }

    onLoginSubmit(event){
        event.preventDefault();
        console.log(event.target.email.value + " : " + event.target.password.value)

    }
    onInputChanged(event){
        // this.setState({
        //     keyword:event.target.value
        // })
        this.setState({
            keyword:event.target.value.substr(0,5)
        })
    }
    onTextareaChanged(event){
        this.setState({
            contents: event.target.value
        })
    }

    onSelectChanged(event){
        this.setState({
            birthYear: event.target.value
        })
    }
    render(){
    return (
        // Fragment는 하나의 리턴에 두개의 컴포넌트가 들어가면 안되니 묶어주는 역할
        <form onSubmit={this.onLoginSubmit.bind(this)}>
            
            <div>
                email: <input name='email' type='text' />
            </div>
            <br />
            <div>
                password: <input name='password' type='password' />
            </div>
            <button type='submit'>login</button>
        </form>
    );
    }
}

export { App};