import React from 'react';
import ModuleService from '../services/ModuleService';
import ModuleListItem from '../components/ModuleListItem';
import CourseService from '../services/CourseService'
import { Link } from 'react-router-dom'

export default class ModuleList extends React.Component {

    constructor(props) {
        super(props);
        this.state =
                {course: '',
                courseId: '',
                module: {title: 'New Module'},
                modules: [],
                selectedModuleItem: ''
            };
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleTitle = this.setModuleTitle.bind(this);
        this.createModule = this.createModule.bind(this);
        this.moduleService = ModuleService.instance;
        this.deleteModule = this.deleteModule.bind(this);
        this.CourseService = CourseService.instance;
        this.setCourse = this.setCourse.bind(this);
        this.setSelectedModuleItem = this.setSelectedModuleItem.bind(this);

    }
    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setCourse(courseId){
        this.CourseService.findCourseById(courseId).then(
            (course) => {
                this.setState({
                    course: course
                })
            }
        )
    }

    setSelectedModuleItem(selectedModuleItem){
        this.setState({selectedModuleItem: selectedModuleItem});
    }

    setModuleTitle(event) {
        this.setState({module: {title: event.target.value}})
    }

    setModules(modules) {
        this.setState({modules: modules})
    }

    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }

    createModule() {
        this.moduleService.createModule(this.state.courseId, this.state.module)
            .then(() => {this.findAllModulesForCourse(this.state.courseId);})
    }

    deleteModule(moduleId) {
        this.moduleService
            .deleteModule(moduleId)
            .then(() => {
                this.findAllModulesForCourse(this.state.courseId)
            });
    }


    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }
    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.setCourse(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)
    }

    renderModules() {
        let modules = this.state.modules.map((module) => {
            return (<ModuleListItem courseId={this.state.courseId} key={module.id}
                                    module={module} delete={this.deleteModule}
                                    selectedModuleItem={this.state.selectedModuleItem}
                                    setSelectedModuleItem={this.setSelectedModuleItem}/>)
        });
        return (
            <ul>{modules}</ul>
        )
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark sticky-top"
                     style={{background:'#1b3f4a', marginRight:'-15px'}}>
                    <Link to={`/`}>
                    <button className="btn btn-primary" style={{margin:'8px'}}>
                        <i className="fa fa-arrow-left"></i>
                    </button>
                    </Link>
                <h4 style={{color:'white', marginLeft:'12px', marginBottom:'-1px'}}>{this.state.course.title}</h4>
                </nav>
                {this.renderModules()}
                <div className="input-group-append">
                    <input className="form-control"
                           placeholder="New Module"
                           onChange={this.setModuleTitle}
                           style={{marginTop:'20px', marginLeft:'20px', marginBottom:'20px',}}/>
                    <button className="btn btn-primary"
                            onClick={this.createModule}
                            style={{margin:'20px'}}>
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
            </div>

    )
    }
}
