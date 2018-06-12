import * as constants from "../constants/Constants"

export const widgetReducer = (state = {widgets: []}, action) => {

    let newState;

    switch (action.type){
        case constants.ADD_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    {
                        id: state.widgets.length + 1,
                        text: 'New Widget',
                        widgetType: 'Paragraph',
                        size: '2'
                    }
                ]
            };

        case constants.DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => (
                    widget.id !== action.id
                ))
            };

        case constants.FIND_ALL_WIDGETS:
            newState = Object.assign({}, state)
            newState.widgets = action.widgets
            return newState;


        default:
            return state;
    }
}