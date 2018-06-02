import React from 'react';
import ModuleService from '../services/ModuleService';
import ModuleListItem from '../components/ModuleListItem';

export default class ModuleList extends React.Component {

    constructor(props) {
        super(props);
        this.state =
                {courseId: '',
                module: {title: ''},
                modules: []
            };
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleTitle = this.setModuleTitle.bind(this);
        this.createModule = this.createModule.bind(this);
        this.moduleService = ModuleService.instance;
        this.deleteModule = this.deleteModule.bind(this);

    }
    setCourseId(courseId) {
        this.setState({courseId: courseId});
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
        this.findAllModulesForCourse(newProps.courseId)
    }

    renderModules() {
        let modules = this.state.modules.map((module) => {
            return (<ModuleListItem key={module.id} module={module} delete={this.deleteModule}/>)
        });
        return (
            <ul>{modules}</ul>
        )
    }

    render() {
        return (
            <div>
                <h4>Module List for course: {this.state.courseId}</h4>
                <input className="form-control"
                       placeholder="New Module"
                       value={this.state.module.title}
                       onChange={this.setModuleTitle}/>
                <button className="btn btn-primary btn-block"
                        onClick={this.createModule}>
                    <i className="fa fa-plus"></i>
                </button>
                {this.renderModules()}
            </div>

    )
    }
}
