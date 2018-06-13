import React from 'react';
import App from './WidgetList'

export default class TopicEditor extends React.Component {

    constructor(props) {
        super(props);
        this.setLessonId = this.setLessonId.bind(this);
        this.setTopicId = this.setTopicId.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.state = {
            courseId: '', moduleId: '', lessonId: '', topicId: ''
        };
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
    setTopicId(topicId) {
        this.setState({topicId: topicId});
    }

    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.setModuleId(this.props.match.params.moduleId);
        this.setLessonId(this.props.match.params.lessonId);
        this.setTopicId(this.props.match.params.topicId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
        this.setLessonId(newProps.match.params.lessonId);
        this.setTopicId(newProps.match.params.topicId);
    }



    render() {
        return (
            <div>
            {/*<h1>Topic Editor</h1>*/}
            {/*{this.state.lessonId}*/}
            {/*{this.state.topicId}*/}
            <App topicId={this.props.match.params.topicId}/>
            </div>
        )
    }
}
