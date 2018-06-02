import React from 'react';
import CourseList from './CourseList';
import CourseEditor from './CourseEditor'
import {BrowserRouter as Router, Route} from 'react-router-dom'


class CourseManager extends React.Component {
    render() {
        return (
            <Router>
            <div>
                {/*<nav className="navbar navbar-expand navbar-dark bg-primary sticky-top">*/}
                    {/*<h1 className="navbar-brand">Course Manager</h1>*/}
                    {/*<input id='inputFld' className="form-control" placeholder="New Course Title"></input>*/}
                    {/*<button id="createBtn" className="btn btn-danger my-2 my-sm-0">+</button>*/}
                {/*</nav>*/}
                <h1>Course Manager</h1>
                <Route path="/courses"
                       component={CourseList}>
                </Route>
                <Route path="/course/:courseId/edit"
                       component={CourseEditor}>
                </Route>
            </div>
            </Router>
        )
    }
}
export default CourseManager;
