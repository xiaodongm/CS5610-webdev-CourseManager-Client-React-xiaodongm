import React from 'react';
import { Link } from 'react-router-dom'

class CourseRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>
                    <Link to={`/course/${this.props.course.id}/edit`}>
                    {this.props.course.title}
                    </Link>
                </td>
                <td>me</td>
                <td>{this.props.course.modified}</td>
                <td><button className="btn btn-danger">
                    <i className="fa fa-times" onClick={() =>
                        {this.props.delete(this.props.course.id)}}>
                    </i>
                    {/*Delete*/}
                </button>
                </td>
            </tr>
        )
    }
}
export default CourseRow;
