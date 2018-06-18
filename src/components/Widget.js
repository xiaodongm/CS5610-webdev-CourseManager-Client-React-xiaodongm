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
    ListItemsChanged: (widgetId, newItems) =>
        actions.ListItemsChanged(dispatch, widgetId, newItems),
    ListTypeChanged: (widgetId, newType) =>
        actions.ListTypeChanged(dispatch, widgetId, newType),
    widgetNameChanged: (widgetId, newName) =>
        actions.widgetNameChanged(dispatch, widgetId, newName)
});

const stateToPropsMapper = state => ({
    preview: state.preview
});

const Heading = ({widget, preview, headingSizeChanged, headingTextChanged, widgetNameChanged}) => {
    let selectElem, inputElem, nameElem;
    return(
        <div style={{marginBottom:'20px'}}>
            <div hidden={preview}>
            <div className='form-group row' style={{marginTop:'15px'}}>
                <label className='col-sm-1 col-form-label'
                       htmlFor={widget.id + 'headingtext'}>
                    <strong><em>Text</em></strong>
                </label>
                <div className='col-sm-11'>
                <input onChange={() => headingTextChanged(widget.id, inputElem.value)}
                       id={widget.id + 'headingtext'}
                       value={!widget.text? '' : widget.text}
                       placeholder='Heading Text'
                       className='form-control'
                       ref={node => inputElem = node}/>
                </div>
            </div>
            <div className='form-group row'>
                <label className='col-sm-1 col-form-label'
                       htmlFor={widget.id + 'headingSize'}>
                    <strong><em>Size</em></strong>
                </label>
                <div className='col-sm-11'>
                <select ref={node => selectElem = node}
                        id={widget.id + 'headingSize'}
                        value={!widget.size? '1' : widget.size}
                        className='form-control'
                        onChange={() => headingSizeChanged(widget.id, selectElem.value)}>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>
                </div>
            </div>
            <div className='form-group row'>
                <label className='col-sm-1 col-form-label'
                       htmlFor={widget.id + 'headingName'}>
                    <strong><em>Name</em></strong>
                </label>
                <div className='col-sm-11'>
                <input className='form-control'
                       id={widget.id + 'headingName'}
                       placeholder='WidgetName'
                       onChange={() => widgetNameChanged(widget.id, nameElem.value)}
                       ref={node => nameElem = node}
                       value={!widget.name? '' : widget.name}/>
                </div>
            </div>
            <h4>Preview</h4>
            </div>
            {widget.size == 1 && <h1>{widget.text}</h1>}
            {widget.size == 2 && <h2>{widget.text}</h2>}
            {widget.size == 3 && <h3>{widget.text}</h3>}
        </div>
        )
};



const HeadingContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Heading);

const Paragraph = ({widget, preview, paragraphTextChanged, widgetNameChanged}) => {
    let inputElem, nameElem;
    return(
        <div style={{marginBottom:'20px'}}>
            <div hidden={preview}>
            <div className='form-group row' style={{marginTop:'15px'}}>
                <label className='col-sm-1 col-form-label'
                       htmlFor={widget.id + 'paragraphText'}>
                    <strong><em>Text</em></strong>
                </label>
                <div className='col-sm-11'>
                <textarea className='form-control'
                          id={widget.id + 'paragraphText'}
                          placeholder='Paragraph Text'
                          style={{marginTop:'5px'}}
                          onChange={() => paragraphTextChanged(widget.id, inputElem.value)}
                          value={!widget.text? '' : widget.text}
                          ref={node => inputElem = node}>
                </textarea>
                </div>
            </div>
            <div className='form-group row'>
                <label className='col-sm-1 col-form-label'
                       htmlFor={widget.id + 'paragraphName'}>
                    <strong><em>Name</em></strong>
                </label>
                <div className='col-sm-11'>
                <input className='form-control'
                       id={widget.id + 'paragraphName'}
                       placeholder='WidgetName'
                       onChange={() => widgetNameChanged(widget.id, nameElem.value)}
                       ref={node => nameElem = node}
                       value={!widget.name? '' : widget.name}/>
                </div>
            </div>
            <h4>Preview</h4>
            </div>
            <p>{widget.text}</p>
        </div>
    );
};

const ParagraphContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Paragraph);

const Image = ({widget, preview, ImageSrcChanged, widgetNameChanged}) => {
    let inputElem, nameElem;
    return(
        <div style={{marginBottom:'20px'}}>
            <div hidden={preview}>
                <div className='form-group row' style={{marginTop:'15px'}}>
                    <label className='col-sm-1 col-form-label'
                           htmlFor={widget.id + 'imageSrc'}>
                        <strong><em>ImgSrc</em></strong>
                    </label>
                    <div className='col-sm-11'>
                    <input className='form-control'
                           id={widget.id + 'imageSrc'}
                           ref={node => inputElem = node}
                           onChange={() => ImageSrcChanged(widget.id, inputElem.value)}
                           style={{marginTop:'5px'}}
                           value={!widget.src? '' : widget.src}
                            placeholder='Image URL'/>
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-1 col-form-label'
                           htmlFor={widget.id + 'imageName'}>
                        <strong><em>Name</em></strong>
                    </label>
                    <div className='col-sm-11'>
                    <input className='form-control'
                           id={widget.id + 'imageName'}
                           placeholder='WidgetName'
                           onChange={() => widgetNameChanged(widget.id, nameElem.value)}
                           ref={node => nameElem = node}
                           value={!widget.name? '' : widget.name}/>
                    </div>
                </div>
                <h4>Preview</h4>
            </div>
            <img src={widget.src} alt='widgetImage'></img>
        </div>
    )
};

const ImageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Image);

const List = ({widget, preview, ListItemsChanged, ListTypeChanged, widgetNameChanged}) => {
    let inputElem, selectElem, nameElem;
    let key = 0;
    return(
        <div style={{marginBottom:'20px'}}>
            <div hidden={preview}>
                <div className='form-group row' style={{marginTop:'15px'}}>
                    <label className='col-sm-1 col-form-label'
                           htmlFor={widget.id + 'listItem'}>
                        <strong><em>Items</em></strong>
                    </label>
                    <div className='col-sm-11'>
                    <textarea className='form-control'
                              id={widget.id + 'listItem'}
                              ref={node => inputElem = node}
                              onChange={() => ListItemsChanged(widget.id, inputElem.value)}
                              value={!widget.listItems? '' : widget.listItems}
                              placeholder='Enter one list item per line'
                              style={{marginTop:'5px'}}>
                    </textarea>
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-1 col-form-label'
                           htmlFor={widget.id + 'listType'}>
                        <strong><em>Type</em></strong>
                    </label>
                    <div className='col-sm-11'>
                    <select className='form-control'
                            id={widget.id + 'listType'}
                            ref={node => selectElem = node}
                            value={!widget.listType? 'Unordered' : widget.listType}
                            onChange={() => ListTypeChanged(widget.id, selectElem.value)}>
                        <option value='Unordered'>Unordered list</option>
                        <option value='Ordered'>Ordered list</option>
                    </select>
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-1 col-form-label'
                           htmlFor={widget.id + 'listName'}>
                        <strong><em>Name</em></strong>
                    </label>
                    <div className='col-sm-11'>
                    <input className='form-control'
                           id={widget.id + 'listName'}
                           placeholder='WidgetName'
                           onChange={() => widgetNameChanged(widget.id, nameElem.value)}
                           ref={node => nameElem = node}
                           value={!widget.name? '' : widget.name}/>
                    </div>
                </div>
                <h4>Preview</h4>
            </div>
            <div>
                <div>
                    {(widget.listType === 'Unordered') &&
                    <ul>
                        {
                            !widget.listItems? '' : widget.listItems.split('\n').map(listItem => (
                                <li key={++key}>
                                    {listItem}
                                </li>
                            ))
                        }
                    </ul>}
                </div>
                <div>
                    {(widget.listType === 'Ordered') &&
                    <ol>
                        {
                            !widget.listItems? '' : widget.listItems.split('\n').map(listItem => (
                                <li key={++key}>
                                    {listItem}
                                </li>
                            ))
                        }
                    </ol>}
                </div>
            </div>
        </div>
    )
};


const ListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(List);

const Link = ({widget, preview, LinkHrefChanged, LinkTextChanged, widgetNameChanged}) => {
    let inputElem, inputUrl, nameElem;
    return(
        <div style={{marginBottom:'20px'}}>
            <div hidden={preview}>
                <div className='form-group row' style={{marginTop:'15px'}}>
                    <label className='col-sm-1 col-form-label'
                           htmlFor={widget.id + 'linkURL'}>
                        <strong><em>URL</em></strong>
                    </label>
                    <div className='col-sm-11'>
                    <input className='form-control'
                           ref={node => inputUrl = node}
                           id={widget.id + 'linkURL'}
                           onChange={() => LinkHrefChanged(widget.id, inputUrl.value)}
                           value={!widget.href? '' : widget.href}
                           placeholder='Link URL'/>
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-1 col-form-label'
                           htmlFor={widget.id + 'linkText'}>
                        <strong><em>Text</em></strong>
                    </label>
                    <div className='col-sm-11'>
                    <input className='form-control'
                           id={widget.id + 'linkText'}
                           ref={node => inputElem = node}
                           onChange={() => LinkTextChanged(widget.id, inputElem.value)}
                           value={!widget.text? '' : widget.text}
                           placeholder='Link Text'/>
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-1 col-form-label'
                           htmlFor={widget.id + 'linkName'}>
                        <strong><em>Name</em></strong>
                    </label>
                    <div className='col-sm-11'>
                    <input className='form-control'
                           id={widget.id + 'linkName'}
                           placeholder='WidgetName'
                           onChange={() => widgetNameChanged(widget.id, nameElem.value)}
                           ref={node => nameElem = node}
                           value={!widget.name? '' : widget.name}/>
                    </div>
                </div>
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