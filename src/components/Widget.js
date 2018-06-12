import React from 'react'
import {connect} from  'react-redux'
import {DELETE_WIDGET} from "../constants/Constants"

const Widget = ({ widget, dispatch }) => (
    <li>
        {widget.id}{widget.text}
        <button onClick={event => (dispatch({type:DELETE_WIDGET, id:widget.id}))}>
            DELETE</button>
    </li>
)

const WidgetContainer = connect()(Widget);

export default WidgetContainer;