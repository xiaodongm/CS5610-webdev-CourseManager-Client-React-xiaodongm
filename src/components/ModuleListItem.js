import React from 'react';
import { Link } from 'react-router-dom'

export default class ModuleListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            style:{background:'#1b3f4a',marginTop:'10px', marginLeft:'-20px', marginRight:'20px'}
        }
    }

    componentWillReceiveProps(newProps){
        if(newProps.selectedModuleItem === this.props.module.id){
            this.setState({style:{background:'#ffc6fc',marginTop:'10px', marginLeft:'-20px', marginRight:'20px'}});
        }else{
            this.setState({style:{background:'#1b3f4a',marginTop:'10px', marginLeft:'-20px', marginRight:'20px'}});
        }
    }

    render() {
        return (
            <div>
                <li className="list-group-item"
                    style={this.state.style}>
                <Link onClick={() =>{this.props.setSelectedModuleItem(this.props.module.id);}}
                      to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                    {this.props.module.title}
                </Link>
                    <i className="fa fa-trash float-right" style={{color:'red'}} onClick={() =>
                    {if (window.confirm('Are you sure you wish to delete this Module?'))
                        this.props.delete(this.props.module.id)}}>
                    </i>
                </li>
            </div>
        )
    }
}
