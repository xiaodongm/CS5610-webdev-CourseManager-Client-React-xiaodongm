import React from 'react';
import CourseRow from '../components/CourseRow';
import CourseService from '../services/CourseService';

class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {courses: [],
                     course: {title: 'New Course'},};
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.setCourseTitle = this.setCourseTitle.bind(this);
    }

    componentDidMount() {
        this.findAllCourses();
    }

    setCourseTitle(event){
        this.setState({course: {title: event.target.value}})
    }


    findAllCourses() {
        this.courseService
            .findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
            })
    }

    renderCourseRows() {
        let courses = null;
        if(this.state) {
            courses = this.state.courses.map((course) => {
                return <CourseRow course={course} key={course.id}
                                  delete={this.deleteCourse}/>
            })
        }
        return (
            courses
        )
    }

    titleChanged(event) {
        this.setState({
            course: { title: event.target.value }
        });
    }
    createCourse() {
        this.courseService
            .createCourse(this.state.course)
            .then(() => { this.findAllCourses(); });
    }

    deleteCourse(courseId) {
        this.courseService
            .deleteCourse(courseId)
            .then(() => { this.findAllCourses(); });
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-primary sticky-top">
                    <h1 className="navbar-brand">Course Manager</h1>
                    <input className="form-control"
                           placeholder="New Course Title"
                           onChange={this.titleChanged}
                           style={{marginRight: '12px'}}>
                    </input>
                    <button className="btn btn-danger" onClick={this.createCourse}>
                        <i className="fa fa-plus"></i>
                    </button>
                </nav>
                {/*<h2>Course List</h2>*/}
                <table className="table">
                    <thead>
                    <tr style={{background: '#e0e0eb'}}>
                        <th style={{paddingLeft:'100px'}} width="650px">Title</th>
                        <th>Owned by</th>
                        <th>Last modified by</th>
                        <th>
                            <i className="fa fa-th"></i>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderCourseRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default CourseList;
