//import React,{Component} from 'react'

import React from 'react'
import store from './store'
import { changeInputAction, addAction, deleteAction } from './store/actionCreater'
import TodoListUI from './TodoListUI'

const Component = React.Component

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        store.subscribe(this.storeChange)
    }
    render(){
        return(
            <TodoListUI
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                list={this.state.list}
                deleteItem={this.deleteItem}
            />
        )
    }

    storeChange(){
        this.setState(store.getState())
    }

    changeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    clickBtn(){
       const action = addAction()
       store.dispatch(action)
    }

    deleteItem(index){
        const action = deleteAction(index)
        store.dispatch(action)
    }

}

export default TodoList