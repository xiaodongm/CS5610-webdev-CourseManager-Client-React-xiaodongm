import React from 'react';
import { Link } from 'react-router-dom'

export default class TopicListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            style:{}
        }
    }

    componentWillReceiveProps(newProps){
        if(newProps.selectedTopicTab === this.props.topic.id){
            this.setState({style:{background:'#ffc6fc'}});
        }else{
            this.setState({style:{}});
        }
    }


    render() {
        return (
            <div className="input-group-append" style={{marginLeft:'10px'}}>
                <ul className="nav nav-tabs">
                    <div className="nav-item">

                        <li  className="nav-item">
                            <Link className="nav-link active"
                             style={this.state.style}
                             onClick={() =>{this.props.setSelectedTopicTab(this.props.topic.id);}}
                             to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${this.props.topicId}`}>
                            {this.props.topic.title}
                                <i className="fa fa-trash" style={{marginLeft:'18px', marginRight:'-10px'}}
                                   onClick={() =>
                                   {if (window.confirm('Are you sure you wish to delete this Topic?'))
                                       this.props.delete(this.props.topic.id)}}>
                                </i>
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        )
    }
}
