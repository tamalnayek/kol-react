import React, { Component } from 'react';
import Greeting from './components/Greeting';
import ActionBox from './components/ActionBox';
import Box from './components/Box';
import Employee from './components/Employee';
import Product from './components/Product';
import A from './components/A';

// import logo from './logo.svg';
// import './App.css';

// import PropTypes from 'prop-types'

class App extends Component {
  constructor(props) {
    super();
    //console.log(props);  
    this.state = {
      message: 'greetings'
    }
    // console.log('App:: constructor()')
  }
  changeMessage(e, message) {
    this.setState({ message })
  }
  render() {
    // console.log('App::render()')
    // this.props.title = "New Title"; // error
    let { title, trainer } = this.props; // de-structuring
    let { message } = this.state;
    return (
      <div className="container">
        <hr />
        <h1>{title} : <span className="badge badge-dark">{trainer}</span></h1>

        <hr />
        <A color={"red"} />
        <hr />
        <A color={"green"} />
        <hr />

        <Box >
          <Product />
          <Product />
          <Product />
          <Product />
        </Box>

        <Box>
          <Employee />
          <Employee />
        </Box>

        <hr />
        <ActionBox />
        <hr />

        <button onClick={e => this.changeMessage(e, 'good morning')} className="btn btn-primary">GM</button>&nbsp;
        <button onClick={e => this.changeMessage(e, 'good noon')} className="btn btn-primary">GN</button>&nbsp;
        <button onClick={e => this.changeMessage(e, 'good evening')} className="btn btn-primary">GE</button>&nbsp;
        <button onClick={e => this.changeMessage(e, '')} className="btn btn-danger">Remove</button>&nbsp;

        <hr />

        {message ? <Greeting message={message} /> : null}

      </div>
    );
  }

  componentDidMount() {
    // console.log("App::componentDidMount()");
    // e.g n/w request
    // setTimeout(() => {
    //   let serverReponse = "Hello react, hope u r rocker at browser side";
    //   this.setState({ message: serverReponse })
    // }, 2000);
  }
  componentDidUpdate() {
    // console.log("App::componentDidUpdate()");
  }

}

/*
App.propTypes = {
  title: PropTypes.string.isRequired,
  trainer: PropTypes.string
}
App.defaultProps = {
  trainer: 'Anonymous'
}
*/

export default App;
