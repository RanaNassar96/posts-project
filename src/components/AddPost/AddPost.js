import React, { Component } from 'react';
import {connect} from 'react-redux'
import { add_item } from '../../actions/itemActions'
import { v4 as uuidv4 } from 'uuid';
import './AddPost.css'
import axios from 'axios';

class AddPost extends Component {

    state={ 
        title: '',
        body: ''
    }

    submitHandler = (e) => {
        e.preventDefault();
        const newPost = {
            title: this.state.title ,
            body: this.state.body ,
            userId: 1 ,
        }
        axios.post(`https://jsonplaceholder.typicode.com/posts` , newPost)
        .then( (res) => {
            this.props.addItem(newPost);
            this.setState( () => {
                return {
                    title: '',
                    body: ''
                };
            });
        }) 
    }


    inputHandler = (e) => {
        this.setState( () => {
            return {
              [ e.target.name ]: e.target.value
            };
        });
    }


    render() {
        return (
            <div className="posts-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="container-form">
                                <form onSubmit={this.submitHandler}>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label>title</label>
                                        </div>
                                        <div className="col-md-9">
                                            <input 
                                                type="text" 
                                                name="title" 
                                                value={this.state.title} 
                                                placeholder="title" 
                                                onChange={this.inputHandler} 
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label>body</label>
                                        </div>
                                        <div className="col-md-9">
                                            <textarea 
                                                name="body" 
                                                value={this.state.body} 
                                                placeholder="body" 
                                                onChange={this.inputHandler}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <input type="submit" value="Submit" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return{
      addItem: (item) => dispatch(add_item(item)) 
    }
}


export default connect( null , mapDispatchToProps )(AddPost);