import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios';
import { delete_item } from '../../actions/itemActions'
import './Post.css'

class Post extends Component {

    deleteHandler = id => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then( (res) => {
            this.props.delItem(id)
        })  
    }
    render() {
        return (
            <div className="col-md-3">
                <div className="box-post">
                    <span className="del-icon" onClick={ () => this.deleteHandler(this.props.item.id) }> x </span>
                    <h1 className="h1"> { this.props.item.title} </h1>
                    <p className="p"> { this.props.item.body} </p>
                </div>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return{
      delItem: (id) => dispatch(delete_item(id)) 
    }
}


export default connect( null , mapDispatchToProps )(Post);