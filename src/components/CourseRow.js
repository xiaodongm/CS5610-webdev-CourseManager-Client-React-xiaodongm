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
                    <i className="fa fa-file-text" style={{marginRight: '12px', color: '#0080ff', marginLeft:'85px'}}></i>
                    <Link to={`/course/${this.props.course.id}/edit`}>
                    {this.props.course.title}
                    </Link>
                </td>
                <td>me</td>
                <td>{this.props.course.modified}</td>
                <td><button className="btn btn-danger" onClick={() =>
                            {this.props.delete(this.props.course.id)}}>
                    <i className="fa fa-times">
                    </i>
                    {/*Delete*/}
                </button>
                </td>
            </tr>
        )
    }
}
export default CourseRow;
