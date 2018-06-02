import React from 'react';
import CourseList from './CourseList';
import CourseEditor from './CourseEditor'
import {BrowserRouter as Router, Route} from 'react-router-dom'


class CourseManager extends React.Component {

    render() {
        return (
            <Router>
            <div>
                {/*<h1>Course Manager</h1>*/}
                <Route exact path="/"
                       component={CourseList}>
                </Route>
                <Route exact path="/course/:courseId/edit"
                       component={CourseEditor}>
                </Route>
            </div>
            </Router>
        )
    }
}
export default CourseManager;
