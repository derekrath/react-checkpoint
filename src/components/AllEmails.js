import '../App.css';

export default function SearchEmails({ email, isSelected, id, emailSelectorFunc }) {
    let emailLines = [];
    let allEmailLines = [];
    if (email) {
        emailLines.push(`${email.subject} ${email.sender}`);
        for (let i in email) {
            allEmailLines.push(<p>{`${i} : ${email[i]}`}</p>)
        }
        return (
            <div onClick={() => emailSelectorFunc(id)}>
                {isSelected?(<div className="selected-email"><h1>{allEmailLines}</h1></div>):(<p>{emailLines}</p>)}
            </div>
        )
    } else {
        return (<>{`No results.`}</>)
    }
}