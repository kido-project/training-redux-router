import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }
    render() {
            var { isChecked } = this.state;
            return (
                <div>
                    Contact <br/>
                    <button type="button" onClick={ () => this.onClick(false) }
                    class="btn btn-info">Accept</button>
                    <button type="button" onClick={ () => this.onClick(true) }
                    class="btn btn-danger">Denied</button>

                    <Prompt
                        when={ isChecked }
                        message={ location => (`Go to ${location.pathname} Are you sure to exit page`) } 
                    />
                </div>
            )
    }
    onClick = (isChecked) => {
        this.setState({
            isChecked: isChecked
        })
    }
}

export default Contact;
