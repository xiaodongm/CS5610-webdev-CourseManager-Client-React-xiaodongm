import React from 'react';
import { Link } from 'react-router-dom'

export default class TopicListItem extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="input-group-append">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link   className="nav-link active"
                                to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${this.props.topicId}`}>
                            {this.props.topic.title}
                        </Link>
                    </li>
                </ul>
                <button className="btn btn-danger"
                        onClick={() =>
                {if (window.confirm('Are you sure you wish to delete this Topic?'))
                    this.props.delete(this.props.topic.id)}}>
                    DELETE</button>
            </div>
        )
    }
}
