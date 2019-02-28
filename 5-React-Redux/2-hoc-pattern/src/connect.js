
import React from 'react'

import store from './store'


export function connect(InputComponent, callback) {

    class Container extends React.Component {
        constructor() {
            super();
            this.state = {
                data: callback(store.getState())
            }
        }
        componentDidMount() {
            //
        }

        componentWillUnmount() {
            //..
        }

        commonHandleLogic() {
            //..
        }
        render() {
            return (
                <div>
                    <InputComponent data={this.state.data} />
                </div>
            )
        }
    }

    Container.displayName = `connect<${InputComponent.name}>`

    return Container;


}