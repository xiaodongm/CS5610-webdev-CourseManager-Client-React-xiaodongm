import React from 'react';
import { Link } from 'react-router-dom'

export default class LessonTabItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`}>
                    {this.props.lesson.title}
                </Link>
                <ul className="nav nav-tabs">
                    <li className="nav-item"><a className="nav-link active"
                                                href="#">Active Tab</a></li>
                    <li className="nav-item"><a className="nav-link"
                                                href="#">Another Tab</a></li>
                </ul>
                <button onClick={() => {this.props.delete(this.props.lesson.id)}}>
                DELETE</button>
            </li>

    )
    }
}
