import React, {Component, Fragment} from 'react'
import './style.css' //webpack功劳
import axios from 'axios'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

class Xiaojiejie extends Component {
    //生命周期：在某一时刻可以自动执行的函数
    //js的构造函数，由于其他任何函数执行，定义数据，constructor是es6的语法
    constructor(props) {
        super(props) //调用父类的构造函数，固定写法，调用Component中的方法
        this.state = {
            inputValue: '躺式采耳',
            list: ['基础按摩', '精油推背']
        }
    }

    UNSAFE_componentWillMount() {
        console.log('组件将挂载到页面')
    }

    componentDidMount() {
        console.log('组件挂载完成')
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
            .then(res => {
                console.log('获取数据成功' + JSON.stringify(res))
            }).catch(error => {
            console.log('获取信息失败' + error)
        })
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true
    }

    UNSAFE_componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    //渲染，生命周期函数
    render() {
        console.log('挂载中')
        return (
            //flex
            <Fragment>
                {/*第一次注释 command + / */}
                {
                    //第一次注释
                }
                <div>
                    <label htmlFor="input">增加服务：</label>
                    <input
                        id="input"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                        ref={input => (this.input = input)}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={ul => (this.ul = ul)}>
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <CSSTransition
                                        timeout={2000}
                                        classNames='boss-text'
                                        unmountOnExit
                                        appear={true}
                                        key={index+item}
                                    >
                                        <XiaojiejieItem
                                            key={index + item}
                                            content={item}
                                            index={index}
                                            deleteItem={this.deleteItem.bind(this)}
                                        />
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
                <Boss/>
            </Fragment>
        );
    }

    inputChange() {
        // console.log(this)
        // this.state.inputValue = e.target.value
        this.setState({
            inputValue: this.input.value
        })
    }

    addList() {
        //setState异步方法
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            //list:['基础按摩','精油推背',this.state.inputValue]

            inputValue: ''
        }, () => {
            //虚拟dom
            console.log(this.ul.querySelectorAll('li').length)
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