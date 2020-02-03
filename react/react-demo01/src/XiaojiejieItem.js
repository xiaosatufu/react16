import React, { Component } from 'react';
import PropTypes from 'prop-types'
class XiaojiejieItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    state = {}
    render() {
        return (
            <li onClick={this.handleClick}>{this.props.avname}-{this.props.content}</li>
        );
    }
    handleClick() {
        console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}


XiaojiejieItem.propTypes = {
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}

XiaojiejieItem.defaultProps = {
    avname:'xxx'
}

export default XiaojiejieItem;