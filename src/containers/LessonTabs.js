import React from 'react'
import LessonService from '../services/LessonService';
import LessonTabItem from '../components/LessonTabItem';



export default class LessonTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state =
            {lessonId:'',
            lesson: {title: ''},
            lessons: []};

        this.setLessonTitle = this.setLessonTitle.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.lessonService = LessonService.instance;
        this.deleteLesson = this.deleteLesson.bind(this);

    }

    createLesson() {
        this.lessonService
            .createLesson(this.state.moduleId, this.state.lesson)
            .then(() => {this.findAllLessonForModule(this.state.moduleId);})
    }

    deleteLesson(lessonId) {
        this.lessonService
            .deleteLesson(lessonId)
            .then(() => {
                this.findAllLessonForModule(this.state.moduleId)
            });
    }


    setLessons(lessons) {
        this.setState({lessons: lessons})
    }

    findAllLessonForModule(moduleId){
        this.lessonService
            .findAllLessonsForModule(moduleId)
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
                                   lesson={lesson}
                                   delete={this.deleteLesson}/>)
        });
        return (
            lessons
        )

    }



    render() {
        return(
            <div>
                <div className="input-group-append">
                    <input value={this.state.lesson.title}
                           placeholder="New Lesson"
                           onChange={this.setLessonTitle}
                           className="form-control"/>
                    <button className="btn btn-primary" onClick={this.createLesson}>Create</button>
                </div>
                {this.renderLessons()}
            </div>

        );
    }
}