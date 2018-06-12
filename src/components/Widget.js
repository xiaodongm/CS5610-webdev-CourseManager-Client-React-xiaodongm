import React from 'react'
import {connect} from  'react-redux'
import {DELETE_WIDGET} from "../constants/Constants"

const Heading = () => (
    <h2>Heading</h2>
);

const Paragraph = () => (
    <div>
        <h2>Paragraph</h2>
        <textarea></textarea>
    </div>
);

const Image = () => (
    <h2>Image</h2>
);

const List = () => (
    <h2>List</h2>
);

const Link = () => (
    <h2>Link</h2>
);


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
            <div>
                {widget.widgetType==='Heading' && <Heading/>}
                {widget.widgetType==='Paragraph' && <Paragraph/>}
                {widget.widgetType==='List' && <List/>}
                {widget.widgetType==='Image' && <Image/>}
                {widget.widgetType==='Link' && <Link/>}
            </div>
        </li>
    )

};

const WidgetContainer = connect()(Widget);

export default WidgetContainer;