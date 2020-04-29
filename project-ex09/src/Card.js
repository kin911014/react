import React from 'react';
import TaskList from './TaskList';

export default class Card extends React.Component{
    constructor(){
        super(...arguments)
        // ...는 스프레드 라고 불리우며 배열을 벗겨내준다.
        this.state={
            showDetails: false
        }

    }

    render(){
        let cardDetails;
        if(this.state.showDetails){
            cardDetails =(
                <div className='Card__Details'>
                    {this.props.description}
                    <TaskList key={this.props.name} tasks={this.props.tasks}/>
                </div>
            ) 
        }
        return (
            <div className='Card'>
                <div className='Card__Title' onClick={() => this.setState({showDetails: !this.state.showDetails})}>
                    {this.props.title}
                </div>
                {cardDetails}
            </div>

        )
    }
}