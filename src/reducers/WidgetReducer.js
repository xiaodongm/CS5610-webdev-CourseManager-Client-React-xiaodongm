import * as constants from "../constants/Constants"

const switchIndex = (indexA, indexB, array) => {
    let temp = array[indexA].widgetOrder;
    array[indexA].widgetOrder = array[indexB].widgetOrder;
    array[indexB].widgetOrder = temp;
    array.sort((x,y) => x.widgetOrder - y.widgetOrder);
    return array;
};

const resetWidgetOrder = (widgets) => {
    for (var i = 0; i < widgets.length; i++){
        widgets[i].widgetOrder = i;
    }
    return widgets;
};

export const widgetReducer = (state = {widgets: [], preview: false}, action) => {

    let index;

    switch (action.type){
        case constants.ADD_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    {
                        id: state.widgets.length + 1,
                        text: '',
                        widgetType: 'Heading',
                        size: '1',
                        src: '',
                        href: '',
                        listType:'Unordered',
                        widgetOrder:state.widgets.length,
                        name: '',
                        listItems: '',
                        editMode: false
                    }
                ],
                preview: state.preview
            };

        case constants.DELETE_WIDGET:
            return {
                widgets: resetWidgetOrder(state.widgets.filter(widget => (
                    widget.id !== action.id
                ))),
                preview: state.preview
            };


        case constants.SELECT_WIDGET_TYPE:
            let newState = {
                widgets: state.widgets.filter((widget) => {
                    if(widget.id === action.id) {
                        widget.widgetType = action.widgetType
                    }
                    return true;
                }),
                preview: state.preview
            };
            return JSON.parse(JSON.stringify(newState));

        case constants.WIDGET_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            };

        case constants.HEADING_SIZE_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.size = action.size
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            };

        case constants.LIST_TYPE_CHANGED:
            return  {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.listType = action.listType
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            };

        case constants.HEADING_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            };

        case constants.PARAGRAPH_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            };

        case constants.IMAGE_SRC_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.src = action.src
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            };

        case constants.LINK_HREF_CHANGED:
            console.log('117');
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.href = action.href;
                        console.log(widget.href)
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            };

        case constants.LINK_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            };

        case constants.LIST_ITEMS_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.listItems = action.listItems
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            };

        case constants.MOVE_WIDGET_UP:
            index = state.widgets.indexOf(action.widget);
            if(index === 0){
                return state;
            }else{
                newState = {
                    widgets: resetWidgetOrder(switchIndex(index, index - 1, state.widgets)),
                    preview: state.preview
                };
                return JSON.parse(JSON.stringify(newState));
            }


        case constants.MOVE_WIDGET_DOWN:
            index = state.widgets.indexOf(action.widget);
            if(index >= state.widgets.length - 1){
                return state;
            }else{
                newState = {
                    widgets:resetWidgetOrder(switchIndex(index, index + 1, state.widgets)),
                    preview: state.preview
                };
                return JSON.parse(JSON.stringify(newState));
            }

        case constants.EDIT_MODE:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.editMode = !widget.editMode

                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            };


        case constants.SAVE:
            for(var i = 0; i < state.widgets.length; i++){
                for(var j = 0; j < state.widgets.length; j++){
                    if(i === j){
                        continue;
                    }
                    if(state.widgets[i].name !== '' && state.widgets[i].name === state.widgets[j].name){
                        alert('Widget name is duplicated, cannot save!');
                        return state;
                    }
                }
            }
            // fetch('http://localhost:8080/api/topic/topicId/widget'.replace('topicId', action.topicId), {
            fetch('https://webdev-summerfull-2018-xma.herokuapp.com/api/topic/topicId/widget'.replace('topicId', action.topicId), {
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type': 'application/json'}
            });
            return state;

        case constants.PREVIEW:
            return {
                widgets: state.widgets.map(
                    widget => {
                        widget.editMode = false;
                        return Object.assign({}, widget);
                    }
                ),
                preview: !state.preview
            };

        case constants.FIND_ALL_WIDGETS:
            newState = Object.assign({}, state);
            newState.widgets = action.widgets;
            newState.preview = state.preview;
            return newState;

        case constants.FIND_ALL_WIDGETS_FOR_TOPIC:
            newState = Object.assign({}, state);
            newState.widgets = action.widgets;
            newState.preview = state.preview;
            return newState;


        default:
            return state;
    }
};