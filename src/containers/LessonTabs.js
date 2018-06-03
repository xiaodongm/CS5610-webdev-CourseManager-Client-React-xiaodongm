import React from 'react'
import LessonService from '../services/LessonService';
import LessonTabItem from '../components/LessonTabItem';



export default class LessonTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state =
            {lesson: '',
            lessonId:'',
            lesson: {title: ''},
            lessons: []};

        this.setLessonTitle = this.setLessonTitle.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.lessonService = LessonService.instance;

    }

    createLesson() {
        this.lessonService
            .createLesson(this.state.moduleId, this.state.lesson)
            .then(() => {this.findAllLessonForModule(this.state.moduleId);})
    }

    setLessons(lessons) {
        this.setState({lessons: lessons})
    }

    findAllLessonForModule(moduleId){
        this.lessonService
            .findAllModulesForCourse(moduleId)
            .then((lessons) => {this.setLessons(lessons)});
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
        this.findAllLessonForModule(newProps.moduleId)
    }

    renderLessons() {
        let lessons = this.state.lessons.map((lesson) => {
            return (<LessonTabItem key={lesson.id}
                                    lesson={lesson}/>)
        });
        return (
            lessons
        )

    }



    render() {
        return(
            <div>
                {this.renderLessons()}
                <input value={this.state.lesson.title}
                       placeholder="New Lesson"
                       onChange={this.setLessonTitle}/>
                <button onClick={this.createLesson}>Create</button>
            </div>

        );
    }
}