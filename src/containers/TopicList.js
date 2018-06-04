import React from 'react';
export default class TopicList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {lessonId: ''};
        this.setLessonId = this.setLessonId.bind(this);
    }
    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }


    componentDidMount() {
        this.setLessonId(this.props.lessonId);
    }
    componentWillReceiveProps(newProps){
        this.setLessonId(newProps.lessonId);
    }




    render() {
        return (
            <h4>{this.state.lessonId}</h4>
        )
    }
}
