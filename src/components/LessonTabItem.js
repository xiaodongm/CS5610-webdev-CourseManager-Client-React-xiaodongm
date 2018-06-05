import React from 'react';
import { Link } from 'react-router-dom'

export default class LessonTabItem extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            style:{}
        }
    }

    componentWillReceiveProps(newProps){
        if(newProps.selectedLessonTab === this.props.lesson.id){
            this.setState({style:{background:'#ffc6fc'}});
        }else{
            this.setState({style:{}});
        }
    }

    render() {
        return (
            <div className="input-group-append" style={{marginLeft:'10px', paddingTop:'10px'}}>
                {/*<Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`}>*/}
                    {/*{this.props.lesson.title}*/}
                {/*</Link>*/}
                <ul className="nav nav-tabs">

                    {/*<li className="nav-item">*/}
                        {/*<Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`}>*/}
                        {/*{this.props.lesson.title}*/}
                        {/*</Link></li>*/}
                    <li className="nav-item">
                        <Link   className="nav-link active"
                                style={this.state.style}
                                onClick={() =>{this.props.setSelectedLessonTab(this.props.lesson.id);}}
                                to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`}>
                                {this.props.lesson.title}
                                <i className="fa fa-trash" style={{marginLeft:'18px', marginRight:'-10px'}}
                                   onClick={() => {if (window.confirm('Are you sure you wish to delete this Lesson?'))
                                   this.props.delete(this.props.lesson.id)}}></i>
                        </Link></li>
                </ul>
                {/*<button className="btn btn-danger" onClick={() =>*/}
                {/*{if (window.confirm('Are you sure you wish to delete this Lesson?'))*/}
                    {/*this.props.delete(this.props.lesson.id)}}>*/}
                {/*DELETE</button>*/}
            </div>

    )
    }
}
