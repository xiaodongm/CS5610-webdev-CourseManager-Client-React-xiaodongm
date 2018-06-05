import React from 'react';
import {Route} from 'react-router-dom'
import TopicEditor from "./TopicEditor";
import TopicList from "./TopicList";

export default class LessonEditor extends React.Component {

    constructor(props) {
        super(props);
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.state = {
            courseId: '', moduleId: '', lessonId: ''
        };}

    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.setModuleId(this.props.match.params.moduleId);
        this.setLessonId(this.props.match.params.lessonId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
        this.setLessonId(newProps.match.params.lessonId);
    }



    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }
    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }


    render() {
        return (
            <div>
                <div>
                    <TopicList lessonId={this.state.lessonId}/>
                </div>
                <div>
                    <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"
                           component={TopicEditor}/>
                </div>
            </div>

    )
    }
}
