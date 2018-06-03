// import React from 'react';
// import { Link } from 'react-router-dom'
//
// export default class LessonTabItem extends React.Component {
//
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return (
//             <div>
//
//                 <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}/lesson/${this.props.lesson.id}`}>
//                     {this.props.lesson.title}
//                 </Link>
//                 <ul className="nav nav-tabs">
//                     <li className="nav-item"><a className="nav-link active"
//                                                 href="#">Active Tab</a></li>
//                     <li className="nav-item"><a className="nav-link"
//                                                 href="#">Another Tab</a></li>
//                 </ul>
//             </div>
//         )
//     }
// }
import React from 'react';
export default class LessonTabItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>{this.props.lesson.title}
            <button onClick={() => {this.props.delete(this.props.lesson.id)}}>
                DELETE</button>
            </li>

    )
    }
}
