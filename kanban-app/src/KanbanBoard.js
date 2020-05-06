import React from 'react';
import CardList from './CardList'
import PropTypes from 'prop-types'

export default class KanbanBoard extends React.Component{
    render(){
        
        const allCards = this.props.cards
        let cards = {
            "todo": [],
            "in-progress": [],
            "done": []
        }
        allCards.forEach(card => cards[card.status].push(card));
        return (
                // 속성이 무엇이 들어가는지 정해놓는 것을 validation이라고 한다.
                <div className='KanbanBoard'>
                    {/* key는 속성을 validation하지 않는다 */}
                    <CardList key='todo' cards={cards['todo']} title='To Do'/>
                    <CardList key='in-progress' cards={cards['in-progress']} title='In Progress'/>
                    <CardList key='done' cards={cards['done']} title='Done'/>
                </div>
        )
    }
}

KanbanBoard.propTypes ={
    cards:PropTypes.arrayOf(PropTypes.object).isRequired
}