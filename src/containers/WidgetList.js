import React from 'react'
import WidgetContainer from '../components/Widget'
import {connect} from 'react-redux'
import * as actions from "../actions/Actions";

class WidgetList extends React.Component{
    constructor(props) {
        super(props);
        this.props.findAllWidgetsForTopic(this.props.topicId)
    }

    componentWillReceiveProps(newProps){
        if(this.props.topicId !== newProps.topicId){
            this.props.findAllWidgetsForTopic(newProps.topicId);
        }
    }

    render(){
        return(
            <div>
                <h1>WidgetList: {this.props.widgets.length}</h1>
                <button onClick={() => this.props.save(this.props.topicId)}
                        hidden={this.props.previewMode}>
                    Save
                </button>
                <button onClick={this.props.preview}>
                    Preview
                </button>
                <ul>
                    {this.props.widgets.map(widget =>(
                        <WidgetContainer key={widget.id}
                                         preview={this.props.previewMode}
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
    widgets: state.widgets,
    previewMode: state.preview
});

const dispatcherToPropsMapper = dispatch => ({
    addWidget: () => actions.addWidget(dispatch),
    save: (topicId) => actions.save(dispatch, topicId),
    findAllWidgetsForTopic: (topicId) => actions.findAllWidgetsForTopic(dispatch, topicId),
    preview: () => actions.preview(dispatch)
});

const App = connect(stateToPropertiesMapper,
    dispatcherToPropsMapper)(WidgetList);

export default App;