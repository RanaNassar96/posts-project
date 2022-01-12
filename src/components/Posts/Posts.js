import React, { Component } from 'react';
import Post from '../Post/Post'
import axios from 'axios';
import {connect} from 'react-redux'
import { get_items , items_loading } from '../../actions/itemActions'
import './Posts.css'

class Posts extends Component {


    componentDidMount() {

        this.props.itemsLoading();

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( (res) => {
            this.props.getItems(res.data);
        })

    }

    render() {
        return (
            <div className="posts-section">
                <div className="container">
                    <div className="row">
                        {this.props.items.map( item =>  <Post key={item.id} item={item} /> )}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
      items: state.items.items, 
      loading : state.items.loading
    }
}
function mapDispatchToProps(dispatch) {
    return{
      getItems: (items) => dispatch(get_items(items)) , 
      itemsLoading: () => dispatch(items_loading())
    }
}
export default connect(mapStateToProps , mapDispatchToProps )(Posts);