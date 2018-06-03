import React from 'react';
import { Link } from 'react-router-dom'

export default class ModuleListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <li className="list-group-item"
                    style={{background:'#1b3f4a',marginTop:'10px', marginLeft:'-20px', marginRight:'20px'}}>
                <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                    {this.props.module.title}
                </Link>
                    <i className="fa fa-window-close float-right" style={{color:'red'}} onClick={() =>
                    {if (window.confirm('Are you sure you wish to delete this Module?'))
                        this.props.delete(this.props.module.id)}}>
                    </i>
                </li>
            </div>
        )
    }
}
