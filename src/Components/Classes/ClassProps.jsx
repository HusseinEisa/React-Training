import React, { Component } from 'react';

class ClassProps extends Component {
    render(props) {
        return (
            <div>
                <h1>Class Props</h1>
                <h2>Name: {this.props.fname} {this.props.lname}</h2>
                <h3>College: {this.props.college}</h3>
                <h3>Department: {this.props.dep}</h3>
                {this.props.children}
            </div>
        )
    }
}

export default ClassProps;