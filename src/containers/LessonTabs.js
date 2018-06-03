import React from 'react'
import LessonService from '../services/LessonService';


export default class LessonTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state =
            {lesson: '',
            lessonId:'',
            lesson: {title: ''}};

        this.setLessonTitle = this.setLessonTitle.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.lessonService = LessonService.instance;

    }

    createLesson() {
        this.lessonService
            .createLesson(
                this.state.moduleId,
                this.state.lesson);
    }


    setLessonTitle(event) {
        this.setState({Lesson: {title: event.target.value}})
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    componentDidMount() {
        this.setModuleId(this.props.moduleId);
    }
    componentWillReceiveProps(newProps){
        this.setModuleId(newProps.moduleId);
    }



    render() {
        return(
            <div>
                <input value={this.state.lesson.title}
                       placeholder="New Lesson"
                       onChange={this.setLessonTitle}/>
                <button onClick={this.createLesson}>Create</button>
            </div>

        );
    }
}