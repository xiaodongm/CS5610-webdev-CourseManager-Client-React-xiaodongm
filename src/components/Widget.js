import React from 'react'
import {connect} from  'react-redux'
import {DELETE_WIDGET, MOVE_WIDGET_UP, MOVE_WIDGET_DOWN} from "../constants/Constants"
import * as actions from "../actions/Actions";

const dispatchToPropsMapper = dispatch => ({
    headingTextChanged: (widgetId, newText) =>
        actions.headingTextChanged(dispatch, widgetId, newText),
    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize),
    paragraphTextChanged: (widgetId, newText) =>
        actions.paragraphTextChanged(dispatch, widgetId, newText),
    ImageSrcChanged: (widgetId, newSrc) =>
        actions.ImageSrcChanged(dispatch, widgetId, newSrc),
    LinkHrefChanged: (widgetId, newHref) =>
        actions.LinkHrefChanged(dispatch, widgetId, newHref),
    LinkTextChanged: (widgetId, newText) =>
        actions.LinkTextChanged(dispatch, widgetId, newText),
    ListTextChanged: (widgetId, newText) =>
        actions.ListTextChanged(dispatch, widgetId, newText),
    ListTypeChanged: (widgetId, newType) =>
        actions.ListTypeChanged(dispatch, widgetId, newType)
});

const Heading = ({widget, preview, headingSizeChanged, headingTextChanged}) => {
    let selectElem;
    let inputElem;
    return(
        <div>
            <div hidden={preview}>
                <input onChange={() => headingTextChanged(widget.id, inputElem.value)}
                       value={widget.text}
                       placeholder='Heading Text'
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


const stateToPropsMapper = state => ({
    preview: state.preview
});

const HeadingContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Heading);

const Paragraph = ({widget, preview, paragraphTextChanged}) => {
    let inputElem;
    return(
        <div>
            <div hidden={preview}>
            <textarea className='form-control'
                      placeholder='Paragraph Text'
                      style={{marginTop:'5px'}}
                      onChange={() => paragraphTextChanged(widget.id, inputElem.value)}
                      value={widget.text}
                      ref={node => inputElem = node}>
            </textarea>
            <input className='form-control' placeholder='WidgetName' style={{marginTop:'15px', marginBottom:'5px'}}/>
            <h4>Preview</h4>
            </div>
            <h5>{widget.text}</h5>
        </div>
    );
};

const ParagraphContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Paragraph);

const Image = ({widget, preview, ImageSrcChanged}) => {
    let inputElem;
    return(
        <div>
            <div hidden={preview}>
                <input className='form-control'
                       ref={node => inputElem = node}
                       onChange={() => ImageSrcChanged(widget.id, inputElem.value)}
                       style={{marginTop:'5px'}}
                       value={widget.src}
                        placeholder='Image URL'/>
                <input className='form-control'
                       placeholder='WidgetName'
                       style={{marginTop:'15px', marginBottom:'5px'}}/>
                <h4>Preview</h4>
            </div>
            <img src={widget.src} alt='widgetImage'></img>
        </div>
    )
};

const ImageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Image);

const List = ({widget, preview, ListTextChanged, ListTypeChanged}) => {
    let inputElem;
    let selectElem;
    let key = 0;
    return(
        <div>
            <div hidden={preview}>
                <textarea className='form-control'
                          ref={node => inputElem = node}
                          onChange={() => ListTextChanged(widget.id, inputElem.value)}
                          value={widget.text}
                          placeholder='Enter one list item per line'
                          style={{marginTop:'5px'}}>
                </textarea>
                <select className='form-control'
                        style={{marginTop:'15px'}}
                        ref={node => selectElem = node}
                        value={widget.listType}
                        onChange={() => ListTypeChanged(widget.id, selectElem.value)}>
                    <option value='Unordered'>Unordered list</option>
                    <option value='Ordered'>Ordered list</option>
                </select>
                <input className='form-control'
                       placeholder='WidgetName'
                       style={{marginTop:'15px', marginBottom:'10px'}}/>
                <h4>Preview</h4>
            </div>
            <div>
                <ul>
                {widget.listType === 'Unordered' && widget.text.split('\n').map(listItem =>(
                        <li key={++key}>
                            {listItem}
                        </li>

                ))}
                </ul>
                <ol>
                {widget.listType === 'Ordered' && widget.text.split('\n').map(listItem =>(

                        <li key={++key}>
                            {listItem}
                        </li>
                ))}
                </ol>
            </div>
        </div>
    )
};


const ListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(List);

const Link = ({widget, preview, LinkHrefChanged, LinkTextChanged}) => {
    let inputElem, inputUrl;
    return(
        <div>
            <div hidden={preview}>
                <input className='form-control'
                       ref={node => inputUrl = node}
                       onChange={() => LinkHrefChanged(widget.id, inputUrl.value)}
                       value={widget.href}
                       placeholder='Link URL'
                       style={{marginTop:'5px'}}/>
                <input className='form-control'
                       ref={node => inputElem = node}
                       onChange={() => LinkTextChanged(widget.id, inputElem.value)}
                       value={widget.text}
                       placeholder='Link Text'
                       style={{marginTop:'15px'}}/>
                <input className='form-control'
                       placeholder='WidgetName'
                       style={{marginTop:'15px', marginBottom:'5px'}}/>
                <h4>Preview</h4>
            </div>
            <a href={widget.href}>{widget.text}</a>
        </div>
    )

};

const LinkContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Link);


const Widget = ({ widget, preview, dispatch, widgets }) => {

    let selectElement;

    return(
        <div>
            <div hidden={preview}>
                <span style={{fontSize:'xx-large', fontWeight:'bold'}}>{widget.widgetType}</span>
                <div className='float-right'>
                    {widget.widgetOrder !== 0 && <button className='btn btn-warning'
                            type='button'
                            onClick={() => (dispatch({type: MOVE_WIDGET_UP, widget: widget}))}
                            style={{marginRight:'3px'}}>
                        <i className='fa fa-arrow-up'></i>
                    </button>}
                    {widget.widgetOrder !== widgets.length - 1 && <button className='btn btn-warning'
                            type='button'
                            onClick={() => (dispatch({type: MOVE_WIDGET_DOWN, widget: widget}))}
                            style={{marginRight:'3px'}}>
                        <i className='fa fa-arrow-down'></i>
                    </button>}
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
                {widget.widgetType==='Paragraph' && <ParagraphContainer widget={widget}/>}
                {widget.widgetType==='List' && <ListContainer widget={widget}/>}
                {widget.widgetType==='Image' && <ImageContainer widget={widget}/>}
                {widget.widgetType==='Link' && <LinkContainer widget={widget}/>}
            </div>
        </div>
    )

};

const WidgetContainer = connect(state => ({
    preview: state.preview
}))(Widget);

export default WidgetContainer;