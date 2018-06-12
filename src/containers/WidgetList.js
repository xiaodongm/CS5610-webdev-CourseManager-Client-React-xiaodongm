import React from 'react'
import WidgetContainer from '../components/Widget'

class WidgetList extends React.Component{
    constructor(props) {
        super(props)
        this.props.findAllWidgets()
    }

    render(){
        return(
            <ul>
                {this.props.widgets.map(widget => (
                    <WidgetContainer widget={widget}
                                     key={widget.id}/>
                ))}
            </ul>
        )
    }

}