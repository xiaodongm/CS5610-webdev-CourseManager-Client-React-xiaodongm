import React from 'react';
import { Link } from 'react-router-dom'

export default class TopicListItem extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <li>
                <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${this.props.topicId}`}>
                    {this.props.topic.title}
                </Link>
                <button onClick={() =>
                {this.props.delete(this.props.topic.id)}}>
                    DELETE</button>
            </li>
        )
    }
}
