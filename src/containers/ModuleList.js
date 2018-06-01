import React from 'react';
export default class ModuleList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {courseId: ''};
        this.setCourseId = this.setCourseId.bind(this);
    }
    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }
    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
    }


    render() {
        return (
            <h3>Module List for course: {this.state.courseId}</h3>
        )
    }
}
