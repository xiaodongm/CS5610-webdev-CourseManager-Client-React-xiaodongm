import * as constants from "../constants/Constants"

export const addWidget = dispatch => (
    dispatch({type: constants.ADD_WIDGET})
);

export const findAllWidgets = dispatch => {
    // fetch('http://localhost:8080/api/widget')
    fetch('http://webdev-summerfull-2018-xma.herokuapp.com/api/widget')
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets }))
};

export const findAllWidgetsForTopic = (dispatch, topicId) => {
        // fetch('http://localhost:8080/api/topic/topicId/widget'.replace('topicId', topicId))
        fetch('http://webdev-summerfull-2018-xma.herokuapp.com/api/topic/topicId/widget'.replace('topicId', topicId))
            .then(response => (response.json()))
            .then(widgets => dispatch({
                type: constants.FIND_ALL_WIDGETS_FOR_TOPIC,
                widgets: widgets }))
};

export const save = (dispatch, topicId) => (
    dispatch({type: constants.SAVE,
              topicId: topicId})
);

export const headingSizeChanged = (dispatch, widgetId, newSize) => (
    dispatch({
        type: constants.HEADING_SIZE_CHANGED,
        id: widgetId,
        size: newSize})
);

export const headingTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.HEADING_TEXT_CHANGED,
        id: widgetId,
        text: newText})
);

export const preview = dispatch => (
    dispatch({type: constants.PREVIEW})
);

export const paragraphTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.PARAGRAPH_TEXT_CHANGED,
        id: widgetId,
        text: newText})
);

export const ImageSrcChanged = (dispatch, widgetId, newSrc) => (
    dispatch({
        type: constants.IMAGE_SRC_CHANGED,
        id: widgetId,
        src: newSrc})
);

export const LinkHrefChanged = (dispatch, widgetId, newHref) => (
    dispatch({
        type: constants.LINK_HREF_CHANGED,
        id: widgetId,
        href: newHref})
);

export const LinkTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.LINK_TEXT_CHANGED,
        id: widgetId,
        text: newText})
);

export const ListItemsChanged = (dispatch, widgetId, newItems) => (
    dispatch({
        type: constants.LIST_ITEMS_CHANGED,
        id: widgetId,
        listItems: newItems})
);

export const ListTypeChanged = (dispatch, widgetId, newType) => (
    dispatch({
        type: constants.LIST_TYPE_CHANGED,
        id: widgetId,
        listType: newType})
);

export const widgetNameChanged = (dispatch, widgetId, newName) => (
    dispatch({
        type: constants.WIDGET_NAME_CHANGED,
        id: widgetId,
        name: newName})
);

