import React from 'react'
import LessonService from '../services/LessonService';
import LessonTabItem from '../components/LessonTabItem';



export default class LessonTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state =
            {moduleId: '',
            course:'',
            lesson: {title: 'New Lesson'},
            lessons: [],
            courseId: '',
            selectedLessonTab: ''};

        this.setLessonTitle = this.setLessonTitle.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.lessonService = LessonService.instance;
        this.deleteLesson = this.deleteLesson.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setSelectedLessonTab = this.setSelectedLessonTab.bind(this);

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

    setSelectedLessonTab(selectedLessonTab){
        this.setState({selectedLessonTab: selectedLessonTab});
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
        this.setState({lesson: {title: event.target.value}})
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
            return (<LessonTabItem moduleId={this.state.moduleId}
                                    key={lesson.id}
                                   courseId={this.props.courseId}
                                   lessonId={lesson.id}
                                   lesson={lesson}
                                   delete={this.deleteLesson}
                                   selectedLessonTab={this.state.selectedLessonTab}
                                   setSelectedLessonTab={this.setSelectedLessonTab}/>)
        });
        return (
            <div className="input-group-append">
                {lessons}
            </div>
        )

    }



    render() {
        return(
            <div>
                <div className="input-group-append" style={{marginBottom:'10px', paddingTop:'10px'}}>
                    <input placeholder="New Lesson"
                           onChange={this.setLessonTitle}
                           className="form-control"/>
                    <button className="btn btn-success" onClick={this.createLesson}>Create New Lesson</button>
                </div>
                <div>
                {this.renderLessons()}
                </div>
            </div>

        );
    }
}