import React, { Fragment } from 'react';

class App extends React.Component {
    constructor(){
        super(...arguments);
        this.state = {
            keyword:'',
            contents:'',
            birthYear:1985
        }
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
        <Fragment>
            
            <div>
                검색: <input type='text' value={this.state.keyword} onChange={ this.onInputChanged.bind(this)}/>
            </div>
            <br />
            <div>
                내용: <textarea value={this.state.contents} onChange={ this.onTextareaChanged.bind(this)}></textarea>
            </div>
            <div>
                생년:
                <select value={this.state.birthYear} onChange={ this.onSelectChanged.bind(this)} >
                    <option value='1984'>1984년</option>
                    <option value='1985'>1985년</option>
                    <option value='1986'>1986년</option>
                </select>
            </div>

        </Fragment>
    );
    }
}

export { App};