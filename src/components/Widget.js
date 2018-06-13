import React from 'react'
import {connect} from  'react-redux'
import {DELETE_WIDGET} from "../constants/Constants"
import * as actions from "../actions/Actions";

const Heading = ({widget, headingSizeChanged}) => {
    let selectElem;

    return(
        <div>
            <h2>Heading {widget.size}</h2>
            <select ref={node => selectElem = node}
                    onChange={() => headingSizeChanged(widget.id, selectElem.value)}>
                <option value="1">Heading 1</option>
                <option value="2">Heading 2</option>
                <option value="3">Heading 3</option>
            </select>
            <h3>Preview</h3>
            {widget.size == 1 && <h1>{widget.text}</h1>}
            {widget.size == 2 && <h2>{widget.text}</h2>}
            {widget.size == 3 && <h3>{widget.text}</h3>}
        </div>
        )
};

const dispatchToPropsMapper = dispatch => ({
    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize)
});

const HeadingContainer = connect(null, dispatchToPropsMapper)(Heading);

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
                    value={widget.widgetType}
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
                {widget.widgetType==='Heading' && <HeadingContainer widget={widget}/>}
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