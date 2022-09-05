import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../stylesheet/styles.css";
import logo from "../../assets/logo.png"

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
        <div className="outsideOfForm">
            <div className="form">
                <div className="header">
                    <img src={logo} width={'50%'} />
                </div>
                <b><label className="label">Book Name</label></b>
                <input type='text' value={bookName} onChange={handleBookName} className="userInput" />
                <br />
                <b><label className="label"> Author </label></b>
                <input type='text' value={author} onChange={handleAuthor} className="userInput" />
                <br />
                <button onClick={() => navigate("/loading")} className="submitButton">Submit</button>
            </div >
        </div >
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