import * as constants from "../constants/Constants"


let initialState = {
    widgets : [
        {id: 0 , text :'Widget 1'},
        {id: 1 , text :'Widget 2'},
        {id: 2 , text :'Widget 3'}
    ]
}


export const widgetReducer = (state = initialState, action) => {
    switch (action.type){
        case constants.ADD_WIDGET:
            alert('adding a widget')
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
            }
        default:
            return state
    }
}