import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CourseEditor from "./CourseEditor";
export default class ModuleEditor
    extends React.Component {

    constructor(props) {
        super(props);
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.state = {courseId: '', moduleId: ''};}

    setCourseId(courseId) {
        this.setState
        ({courseId: courseId});
    }
    setModuleId(moduleId) {
        this.setState
        ({moduleId: moduleId});
    }

    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.setModuleId(this.props.match.params.moduleId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
    }



    render() {
        return (
            <Router>
                <div>
                    <h1>Module Editor</h1>
                    <h3>Editing Module {this.state.courseId}</h3>
                    {this.state.moduleId}
                </div>
                {/*<div>*/}
                    {/*/!*<Route exact path="/course/:courseId/module/:moduleId/lesson/:lessonId"*!/*/}
                           {/*/!*component={CourseEditor}>*!/*/}
                    {/*/!*</Route>*!/*/}
                {/*</div>*/}
            </Router>

    )
    }
}
