import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../stylesheet/styles.css";
import logo from "../../logo.png"

function SearchComponent() {
    const [bookName, setBookName] = useState('');
    const [author, setAuthor] = useState('');

    const navigate = useNavigate();

    const handleBookName = e => {
        setBookName(e.target.value);
    };
    const handleAuthor = e => {
        setAuthor(e.target.value);
    };

    return (
        <div class="outsideOfForm">
            <div class="form">
                <div class="header">
                    <img src={logo} width={'50%'} />
                </div>
                <b><label class="label">Book Name</label></b>
                <input type='text' value={bookName} onChange={handleBookName} class="userInput" />
                <br />
                <b><label class="label"> Author </label></b>
                <input type='text' value={author} onChange={handleAuthor} class="userInput" />
                <br />
                <button onClick={() => navigate("/loading")} class="submitButton">Submit</button>
            </div >
        </div>
    )
}


// class SearchComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             bookName: "",
//             author: "",
//         }
//         // const navigate = useNavigate();

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         // this.navigateToLoading = this.navigateToLoading.bind(this);
//     }

//     handleChange({ target }) {
//         this.setState({ [target.name]: target.value })
//     };

//     handleSubmit(e) {
//         e.preventDefault();
//         console.log('checking to see if the handle submit func is invoked')
//     }

//     // once the user hits the submit button, we want to navigate them to the loading page
//     navigateToLoading() {
//         console.log('inside loading')
//         navigate('/LoadingComponent', { replace: true });
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <form>
//                     <div>
//                         <b><label> Book Name: </label></b>
//                         <input type="text" name="bookName" value={this.state.bookName} onChange={this.handleChange} />
//                     </div>
//                     <div>
//                         <b><label> Author: </label></b>
//                         <input type="text" name="author" value={this.state.author} onChange={this.handleChange} />
//                     </div>
//                     <SubmitButton onClick={this.handleSubmit} />
//                 </form>
//             </React.Fragment>
//         )
//     }
// }

export default SearchComponent;