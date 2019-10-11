import React, {Component} from 'react';
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    //组件第一次存在dom中，函数不执行；如果已经存在于dom中，函数才被执行
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else {
            return false
        }
    }

    render() {
        console.log('child-render')
        return (
            <div>
                <li onClick={this.handleClick}>
                    {this.props.avname}为你服务 - {this.props.content}
                </li>
            </div>
        );
    }

    handleClick() {
        this.props.deleteItem(this.props.index)
    }
}

XiaojiejieItem.propTypes = {
    avname:PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}
XiaojiejieItem.defaultProps={
    avname:'送到'
}
export default XiaojiejieItem;