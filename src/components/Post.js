import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
export default class Post extends Component {
    state = {
        posts: []
    };
    async componentDidMount() {
        await axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(posts => {
            let data = posts.data
            this.setState({posts: data});
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.state.posts.map(post => (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td> {post.title}</td>
                                    <td>{post.body}</td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
