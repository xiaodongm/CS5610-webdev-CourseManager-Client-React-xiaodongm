import React from 'react';
import { Link } from 'react-router-dom'

export default class ModuleListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                    {this.props.module.title}
                </Link>
                <button className="btn btn-danger" onClick={() =>
                            {if (window.confirm('Are you sure you wish to delete this Module?'))
                            this.props.delete(this.props.module.id)}}>
                    <i className="fa fa-times">
                    </i>
                </button>
            </div>
        )
    }
}
