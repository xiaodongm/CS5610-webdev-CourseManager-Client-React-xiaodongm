import React from 'react';
import TopicService from '../services/TopicService';
import TopicListItem from '../components/TopicListItem';


export default class TopicList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {lessonId: '',
                      topic: {title: 'New Topic'},
                      topics: []};
        this.setLessonId = this.setLessonId.bind(this);
        this.setTopicTitle = this.setTopicTitle.bind(this);
        this.createTopic = this.createTopic.bind(this);
        this.topicService = TopicService.instance;
        this.deleteTopic = this.deleteTopic.bind(this);

    }
    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }

    setTopicTitle(event) {
        this.setState({topic: {title: event.target.value}})
    }

    createTopic() {
        this.topicService
            .createTopic(this.state.lessonId, this.state.topic)
            .then(() => {this.findAllTopicsForLesson(this.state.lessonId);
            })

    }

    deleteTopic(topicId) {
        this.topicService
            .deleteTopic(topicId)
            .then(() => {this.findAllTopicsForLesson(this.state.lessonId)
            });
    }


    findAllTopicsForLesson(lessonId) {
        this.topicService
            .findAllTopicsForLesson(lessonId)
            .then((topics) => {this.setTopics(topics)});
    }
    setTopics(topics) {
        this.setState({topics: topics})
    }



    componentDidMount() {
        this.setLessonId(this.props.lessonId);
    }
    componentWillReceiveProps(newProps){
        this.setLessonId(newProps.lessonId);
        this.findAllTopicsForLesson(newProps.lessonId)
    }


    renderTopics() {
        let topics = this.state.topics.map((topic) => {
            return (<TopicListItem lessonId={this.state.lessonId}
                                    key={topic.id}
                                    module={topic}
                                   delete={this.deleteTopic}/>)
        });
        return (
            <ul>{topics}</ul>
        )

    }


    render() {
        return (
            <div>
                <h4>Topic List for lessonId:
                    {this.state.lessonId}</h4>
                <input placeholder="New Topic"
                       onChange={this.setTopicTitle}
                       onClick={this.createTopic}/>
                <button>Create</button>
                {this.renderTopics()}
            </div>

        )
    }
}
