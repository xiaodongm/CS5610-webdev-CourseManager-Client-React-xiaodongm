import React from 'react';
import ReactDOM from 'react-dom'
import CourseManager from './containers/CourseManager';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {widgetReducer} from "./reducers/WidgetReducer"
import {createStore} from 'redux'
import {Provider} from 'react-redux'

let store = createStore(widgetReducer);

ReactDOM.render(
    <Provider store={store}>
        <CourseManager/>
    </Provider>,
    document.getElementById('root')
);
