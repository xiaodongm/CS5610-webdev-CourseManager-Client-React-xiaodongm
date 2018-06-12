import React from 'react'
import WidgetContainer from '../components/Widget'
import {connect} from 'react-redux'

class WidgetList extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <h1>WidgetList: {this.props.widgets.length}</h1>
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
})

const App = connect(stateToPropertiesMapper)(WidgetList);

export default App;