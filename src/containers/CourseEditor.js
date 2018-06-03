import React from 'react';
import ModuleList from './ModuleList'
import ModuleEditor from './ModuleEditor';
import {BrowserRouter as Router, Route} from 'react-router-dom'

class CourseEditor extends React.Component {

    constructor(props) {
        super(props);
        this.selectCourse = this.selectCourse.bind(this);
        this.state = {courseId: ''};
    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
    }

    componentWillReceiveProps(newProps){
        this.selectCourse(newProps.match.params.courseId);
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    render() {
        return (
            <Router>
            <div>
                {/*<nav className="navbar navbar-expand navbar-dark sticky-top" style={{background:'#1b3f4a'}}>*/}
                {/*<h3 style={{color:'#ffffff', marginLeft:'60px'}}>Editing Course : {this.state.courseId}</h3>*/}
                {/*</nav>*/}
                <div className="row">
                    <div className="col-4" style={{background: '#47476b'}}>
                        <ModuleList courseId={this.state.courseId}/>
                    </div>
                    <div className="col-8">
                        <Route path="/course/:courseId/module/:moduleId"
                               component={ModuleEditor}>
                        {/*<Route exact path="/course/:courseId/module/:moduleId/lesson/:lessonId"*/}
                               {/*component={CourseEditor}>*/}
                        </Route>
                    </div>
                </div>
            </div>
            </Router>
        )
    }
}
export default CourseEditor;
