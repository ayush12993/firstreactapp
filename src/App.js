import React,{Component} from "react";

class App extends Component{

    // So first of all we have added constructor and passed props in it then we added local state with posts from the API.
    constructor(props) {
        super([props]);
        this.state = {
            posts: []
        }
    }
    //Componentdidmount is used to parse the json data and help it render on the front end
    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({posts: json}))
    }

    render() {
        const { posts } = this.state;
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1 class="display-4">Blog Posts</h1>
                </div>
                {posts.map ((post) =>(
                    <div className="card" key={post.id}>
<div className="card-header">#{post.id} {post.title}</div>
                    <div className="card-body">
                        <p className="card-text">{post.body}</p>
                    </div>
                    </div>

                ))}
            </div>
        );
    }
};
export default App;