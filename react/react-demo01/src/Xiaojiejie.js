import React, { Component, Fragment } from 'react';

class Xiaojiejie extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['精油推背', '头部按摩']
        }
    }

    render() {
        return (
            <Fragment>
                <div><input value={this.state.inputValue} onChange={this.inputChange.bind(this)} type="text" /> <button onClick={this.addList.bind(this)}>增加服务</button></div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    inputChange(e) {
        console.log(e.target.value)
        this.setState({
            inputValue: e.target.value
        })
    }
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }



}

export default Xiaojiejie