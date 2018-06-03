import React from 'react'
import { Link } from 'react-router-dom'

export default class LessonTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state =
            {lesson: '',
            lessonId:'',
            lesson: {title: ''}};

        this.setLessonTitle = this.setLessonTitle.bind(this);
        this.createLesson = this.createLesson.bind(this);

    }

    createLesson() {
        console.log(this.state);
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