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
            <form style={{marginLeft:'40px'}}>
                <div style={{marginTop:'15px'}}
                     className='form-group row'>
                    <div className='col-12'>
                        <button onClick={this.props.preview}
                                className='btn badge-warning float-right'
                                type='button'>
                            Preview
                        </button>
                        <button onClick={() => this.props.save(this.props.topicId)}
                                hidden={this.props.previewMode}
                                className='btn btn-success float-right'
                                type='button'
                                style={{marginRight:'3px'}}>
                            Save
                        </button>
                    </div>
                </div>
                <div className='form-group row'
                     style={{marginTop:'-14px'}}>
                </div>
                <div style={{marginLeft:'-12px'}}>
                    {this.props.widgets.sort((x,y) => x.widgetOrder - y.widgetOrder).map(widget =>(
                        <WidgetContainer key={widget.id}
                                         preview={this.props.previewMode}
                                         widget={widget}
                                         widgets = {this.props.widgets}/>
                    ))}
                </div>
                <button onClick={this.props.addWidget}
                        className='btn btn-danger float-right'
                type='button'>
                    <i className='fa fa-plus'></i>
                </button>
            </form>
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