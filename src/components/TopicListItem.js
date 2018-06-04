import React from 'react';

export default class TopicListItem extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <li>{this.props.topic.title}</li>
        )
    }
}
