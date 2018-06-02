import React from 'react';
export default class ModuleListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.module.title}
                <button className="btn btn-danger" >
                    <i className="fa fa-times" onClick={() =>
                        {this.props.delete(this.props.module.id)}}>
                    </i>
                </button>
            </div>
        )
    }
}
