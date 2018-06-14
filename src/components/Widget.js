import React from 'react'
import {connect} from  'react-redux'
import {DELETE_WIDGET} from "../constants/Constants"
import * as actions from "../actions/Actions";

const Heading = ({widget, preview, headingSizeChanged, headingTextChanged}) => {
    let selectElem;
    let inputElem;
    return(
        <div>
            <div hidden={preview}>
                {/*<h2>Heading {widget.size}</h2>*/}
                <input onChange={() => headingTextChanged(widget.id, inputElem.value)}
                       value={widget.text}
                       className='form-control'
                       style={{marginBottom:'10px', marginTop:'15px'}}
                       ref={node => inputElem = node}/>
                <select ref={node => selectElem = node}
                        value={widget.size}
                        style={{marginBottom:'10px'}}
                        className='form-control'
                        onChange={() => headingSizeChanged(widget.id, selectElem.value)}>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>
                <input className='form-control' placeholder='WidgetName' style={{marginBottom:'10px'}}/>
            <h4>Preview</h4>
            </div>
            {widget.size == 1 && <h1>{widget.text}</h1>}
            {widget.size == 2 && <h2>{widget.text}</h2>}
            {widget.size == 3 && <h3>{widget.text}</h3>}
        </div>
        )
};

const dispatchToPropsMapper = dispatch => ({
    headingTextChanged: (widgetId, newText) =>
        actions.headingTextChanged(dispatch, widgetId, newText),
    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize)
});

const stateToPropsMapper = state => ({
    preview: state.preview
});

const HeadingContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Heading);

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


const Widget = ({ widget, preview, dispatch }) => {

    let selectElement;

    return(
        <div>
            <div hidden={preview}>
                <span style={{fontSize:'xx-large', fontWeight:'bold'}}>{widget.widgetType}</span>
                <div className='float-right'>
                    <button className='btn btn-warning'
                            style={{marginRight:'3px'}}>
                        <i className='fa fa-arrow-up'></i>
                    </button>
                    <button className='btn btn-warning'
                            style={{marginRight:'3px'}}>
                        <i className='fa fa-arrow-down'></i>
                    </button>
                    <select ref={node => selectElement = node}
                            value={widget.widgetType}
                            style={{marginRight:'3px'}}
                            className='form-control-sm'
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
                    <button onClick={event => (dispatch({type: DELETE_WIDGET, id: widget.id}))}
                            className='btn btn-danger'>
                        <i className='fa fa-times'></i>
                    </button>
                </div>
            </div>
            <div>
                {widget.widgetType==='Heading' && <HeadingContainer widget={widget}/>}
                {widget.widgetType==='Paragraph' && <Paragraph/>}
                {widget.widgetType==='List' && <List/>}
                {widget.widgetType==='Image' && <Image/>}
                {widget.widgetType==='Link' && <Link/>}
            </div>
        </div>
    )

};

const WidgetContainer = connect(state => ({
    preview: state.preview
}))(Widget)

export default WidgetContainer;