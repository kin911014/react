import React from 'react';
import TaskList from './TaskList';
import PropTypes from 'prop-types'


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
        const sideColorBar = {
            position:'absolute',
            zIndex: -1,
            top:0,
            left:0,
            bottom:0,
            width: 7,
            backgroundColor: this.props.color
        };
        return (
            <div className='Card'>
                <div style={sideColorBar} />
                <div className='Card__Title' onClick={() => this.setState({showDetails: !this.state.showDetails})}>
                    {this.props.title}
                </div>
                {cardDetails}
            </div>

        )
    }
}
var titleLengthValidator = (props, propName, component) =>
    !props[propName] || typeof props[propName] !== 'string' || props[propName].length > 50 ? new Error(`${propName} in ${component} is longer than 50 Characters`) : null

Card.propTypes ={
    title: titleLengthValidator,
    description: PropTypes.string.isRequired,
    color: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.object)
}