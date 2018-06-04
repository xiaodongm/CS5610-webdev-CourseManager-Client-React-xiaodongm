import React from 'react';
import { Link } from 'react-router-dom'

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
                <ul className="nav nav-tabs">

                    {/*<li className="nav-item">*/}
                        {/*<Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`}>*/}
                        {/*{this.props.lesson.title}*/}
                        {/*</Link></li>*/}
                    <li className="nav-item"><Link className="nav-link active"
                        to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`}>
                        {this.props.lesson.title}
                    </Link></li>
                </ul>
                <button className="btn btn-danger" onClick={() =>
                {if (window.confirm('Are you sure you wish to delete this Lesson?'))
                    this.props.delete(this.props.lesson.id)}}>
                DELETE</button>
            </div>

    )
    }
}
