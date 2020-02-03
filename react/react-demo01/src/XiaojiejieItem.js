import React, { Component, Fragment } from 'react';
class XiaojiejieItem extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    state = {  }
    render() {
        return (
            <li onClick={this.handleClick}>{this.props.content}</li>
        );
    }
    handleClick(){
        console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}
 
export default XiaojiejieItem;