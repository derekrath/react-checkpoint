import SearchEmails from "./SearchEmails";
import AllEmails from "./AllEmails";
import '../App.css';

export default function ViewEmails({ emails, userInput , emailSelectorFunc, selectedEmail }) {

    if (userInput !== '') {
        return (
            <div className="search-list">
                <SearchEmails emails={emails} userInput={userInput} />
            </div>
        );
    } else {
        return (
            <div className="all-list">
                <div>
                    {emails.map((emailObj, index) => (
                        <AllEmails email={emailObj} emailSelectorFunc={emailSelectorFunc} isSelected={selectedEmail===emailObj.id} id={emailObj.id} key={index} />
                    ))}
                </div>
            </div>
        )
    }
}