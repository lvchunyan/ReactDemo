//import React, {Component} from 'react';
import React from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'

const TodoListUI = (props) => {
    return(
        <div style={{margin:'10px'}}>
            <div>
                <Input value={props.inputValue} style={{width:'200px',marginRight:'10px'}} onChange={props.changeInputValue} />
                <Button type="primary" onClick={props.clickBtn}>增加</Button>
            </div>
            <div style={{marginTop:'10px',width:'300px'}}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index) => (
                        <List.Item onClick={() => props.deleteItem(index)}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

// class TodoListUI extends Component {
//     render() {
//         return (
//             <div style={{margin:'10px'}}>
//                 <div>
//                     <Input value={this.props.inputValue} style={{width:'200px',marginRight:'10px'}} onChange={this.props.changeInputValue} />
//                     <Button type="primary" onClick={this.props.clickBtn}>增加</Button>
//                 </div>
//                 <div style={{marginTop:'10px',width:'300px'}}>
//                     <List
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item,index) => (
//                             <List.Item onClick={() => this.props.deleteItem(index)}>
//                                 {item}
//                             </List.Item>
//                         )}
//                     />
//                 </div>
//             </div>
//         );
//     }
// }

export default TodoListUI;