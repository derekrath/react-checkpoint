import SearchEmails from "./SearchEmails";
import AllEmails from "./AllEmails";

export default function ViewEmails({ emails, userInput , emailSelectorFunc, selectedEmail }) {

    if (userInput !== '') {
        return (
            <ul className="search-list">
                <SearchEmails emails={emails} userInput={userInput} />
            </ul>
        );
    }

    for (let i = 0; i <  emails.length; i++) {
        let emailLines = [];
        for (let j in emails[i]) {
            emailLines.push(`${emails[i][j]}`);
        }
        return (
            <div className="all-list">
                <ul>
                    {emails.map((email, index) => (
                        <AllEmails emails={emails} emailSelectorFunc={emailSelectorFunc} isSelected={selectedEmail===email.id} id={email.id} key={index} />
                    ))}
                </ul>
            </div>
        )
    };
}