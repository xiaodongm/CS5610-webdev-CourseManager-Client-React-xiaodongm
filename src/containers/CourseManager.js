import React from 'react';
import CourseList from './CourseList';
import CourseEditor from './CourseEditor'
import {BrowserRouter as Router, Route} from 'react-router-dom'


class CourseManager extends React.Component {

    render() {
        return (
            <Router>
            <div>
                <Route exact path="/"
                       component={CourseList}>
                </Route>
                <Route path="/course/:courseId/"
                       component={CourseEditor}>
                </Route>

            </div>
            </Router>
        )
    }
}
export default CourseManager;
