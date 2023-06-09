import React,{Component} from "react";

class AddPhoto extends Component {
    constructor (){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post = {
            id: 0,
            imageLink: imageLink,
            description: description, 
        }
        if(description && imageLink){
        this.props.onAddPhoto(post)
        }
    }
    render(){
        return(
           <div>
            <h1>Photowall</h1>
            <form onSubmit={this.handleSubmit} className="form">
                <input type="text" placeholder="Link" name="link"/>
                <input type="text" placeholder="Description" name="description"/>
                <button>Post</button>
            </form>
           </div>
        )
    }
}

export default AddPhoto;