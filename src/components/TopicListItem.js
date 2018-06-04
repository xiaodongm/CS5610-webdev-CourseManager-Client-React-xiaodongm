import React from 'react';

export default class TopicListItem extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <li>{this.props.topic.title}
                <button onClick={() =>
                {this.props.delete
                (this.props.topic.id)}}>
                    DELETE</button>
            </li>
        )
    }
}
