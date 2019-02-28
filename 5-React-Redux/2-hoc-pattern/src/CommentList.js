import React, { Component } from 'react';

import { connect } from './connect'


class CommentList extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         comments: store.getState().comments
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
                            <div key={idx} className="list-group-item bg-warning">
                                {topic}
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default connect(CommentList, state => state.comments);