import { Component } from 'react';
import './App.css';
import ViewEmails from "./components/ViewEmails";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      emails: [],
      userInput: '',
      selectedEmail: 0
    };
    this.selectEmail = this.selectEmail.bind(this)
  }

  selectEmail(emailId){
    this.setState({selectedEmail:emailId})
  }

  async componentDidMount() {
    const emailServer = 'http://localhost:3001/emails'
    const response = await fetch(emailServer);
    const emailData = await response.json();
    this.setState({emails: emailData});
  }
  
  render() {
    const {selectEmail} = this;
    const input = document.querySelector('input');
    const display = document.getElementById('displayChar');

    if (input) {
      input.addEventListener('change', (e) => {
        let searchVal = e.target.value;
        display.textContent = searchVal;
        this.setState({ userInput: searchVal });
      });
    };
    
    console.log(this.state.emails)
    console.log(this.state.userInput)

    return (
      <div className="App">
        <form>
          <label htmlFor="inputField">GMail Search:</label>
          <input type="text" placeholder="Search by subject" name="inputField" />
          <button type="button">Search</button>
            <h2 id="displayChar"></h2>
        </form>
        <ViewEmails emails={this.state.emails} emailSelectorFunc={selectEmail} selectedEmail={this.state.selectedEmail} userInput={this.state.userInput} />
      </div>
    )
  }
}

// View all of my email messages (subject line + sender)
// View one of my email messages with all of its details
// Send an email
// Search for a specific email by subject