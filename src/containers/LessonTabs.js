import React from 'react'
import { Link } from 'react-router-dom'

export default class LessonTabs extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <div>
                {/*<Link to={`/course/${this.props.courseId}/module/${this.props.module.id}/lesson/${this.props.LessonTabs.id}`}>*/}
                    {/*{this.props.module.title}*/}
                {/*</Link>*/}
                <ul className="nav nav-tabs">
                    <li className="nav-item"><a className="nav-link active"
                                                href="#">Active Tab</a></li>
                    <li className="nav-item"><a className="nav-link"
                                                href="#">Another Tab</a></li>
                </ul>
            </div>
        );
    }
}