import React from 'react'
import {connect} from  'react-redux'
import {DELETE_WIDGET} from "../constants/Constants"

const Widget = ({ widget, dispatch }) => {

    let selectElement;

    return(
        <li>
            {widget.id}{widget.widgetType}
            <select ref={node => selectElement = node}
                    onChange={event =>
                        dispatch({
                            type: 'SELECT_WIDGET_TYPE',
                            id: widget.id,
                            widgetType: selectElement.value
                        })}>
                <option>Heading</option>
                <option>Paragraph</option>
                <option>List</option>
                <option>Image</option>
                <option>Link</option>
            </select>
            <button onClick={event => (dispatch({type: DELETE_WIDGET, id: widget.id}))}>
                DELETE
            </button>
        </li>
    )

};

const WidgetContainer = connect()(Widget);

export default WidgetContainer;