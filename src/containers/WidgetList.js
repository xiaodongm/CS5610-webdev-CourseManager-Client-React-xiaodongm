import React from 'react'
import WidgetContainer from '../components/Widget'
import {connect} from 'react-redux'
import * as actions from "../actions/Actions";

class WidgetList extends React.Component{
    constructor(props) {
        super(props);
        this.props.findAllWidgets()
    }

    render(){
        return(
            <div>
                <h1>WidgetList: {this.props.widgets.length}</h1>
                <button onClick={this.props.save}>
                    Save
                </button>
                <ul>
                    {this.props.widgets.map(widget =>(
                        <WidgetContainer key={widget.id}
                                        widget={widget}/>
                    ))}
                </ul>
                <button onClick={this.props.addWidget}>
                    Add Widget
                </button>
            </div>
        )
    }

}

const stateToPropertiesMapper = (state) => ({
    widgets: state.widgets
});

const dispatcherToPropsMapper = dispatch => ({
    addWidget: () => actions.addWidget(dispatch),
    save: () => actions.save(dispatch),
    findAllWidgets: () => actions.findAllWidgets(dispatch)
});

const App = connect(stateToPropertiesMapper,
    dispatcherToPropsMapper)(WidgetList);

export default App;