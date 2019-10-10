import React, {Component, Fragment} from 'react'
import './style.css' //webpack功劳
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component {
    //js的构造函数，由于其他任何函数执行，定义数据
    constructor(props) {
        super(props) //调用父类的构造函数，固定写法，调用Component中的方法
        this.state = {
            inputValue: '躺式采耳',
            list: ['基础按摩', '精油推背']
        }
    }

    render() {
        return (
            //flex
            <Fragment>
                {/*第一次注释 command + / */}
                {
                    //第一次注释
                }
                <div>
                    <label htmlFor="input">增加服务：</label>
                    <input id="input" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <XiaojiejieItem
                                    key={index+item}
                                    content={item}
                                    index={index}
                                    deleteItem={this.deleteItem.bind(this)}
                                />
                            )
                        })
                    }
                </ul>
            </Fragment>
        );
    }

    inputChange(e) {
        // console.log(this)
        // this.state.inputValue = e.target.value
        this.setState({
            inputValue: e.target.value
        })
    }

    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            //list:['基础按摩','精油推背',this.state.inputValue]

            inputValue: ''
        })
    }

    deleteItem(index) {
        //React是禁止直接操作state的，性能优化麻烦
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default Xiaojiejie