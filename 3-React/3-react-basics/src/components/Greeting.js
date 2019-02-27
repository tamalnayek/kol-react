import React, { Component } from 'react';

class Greeting extends Component {
    // constructor(props) {
    //     super(props);
    //     // console.log("Greeting:: constructor()");
    // }
    componentDidMount() {
        // console.log("Greeting::componentDidMount()");
        this.interval = setInterval(() => {
            this.forceUpdate();
        }, 500);
    }
    render() {
        // console.log("Greeting:: render()");
        let { message } = this.props;
        return (
            <div>
                <div className="alert alert-danger">
                    <p>{message}</p>
                    <hr />
                    <p>{new Date().toLocaleTimeString()}</p>
                </div>
            </div>
        );
    }
    shouldComponentUpdate(nextProps, nextState) {
        // console.log("Greeting::shouldComponentUpdate()");
        return this.props.message !== nextProps.message;
    }

    componentWillUnmount() {
        // console.log("Greeting::componentWillUnmount()");
        clearInterval(this.interval)
    }

}

export default Greeting;