import React, { Component } from 'react';

import { connect } from './connect'

class TopicList extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         topics: store.getState().topics
    //     }
    // }
    // componentDidMount() {
    //     //
    // }

    // componentWillUnmount() {
    //     //..
    // }

    // commonHandleLogic() {
    //     //..
    // }
    render() {
        return (
            <div>
                {
                    this.props.data.map((topic, idx) => {
                        return (
                            <div key={idx} className="list-group-item">
                                {topic}
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default connect(TopicList, state => state.topics);