import React from 'react';
// import { Link } from 'react-router-dom'

export default class LessonTabItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="input-group-append">
                {/*<Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`}>*/}
                    {/*{this.props.lesson.title}*/}
                {/*</Link>*/}
                {/*{this.props.lesson.title}*/}
                <ul className="nav nav-tabs">
                    <li className="nav-item"><a className="nav-link active"
                                                href="#">{this.props.lesson.title}</a></li>
                </ul>
                <button className="btn btn-danger" onClick={() => {this.props.delete(this.props.lesson.id)}}>
                DELETE</button>
            </div>

    )
    }
}
