
export default function SearchEmails({ email, isSelected, id, emailSelectorFunc }) {
    let emailLines = [];
    let allEmailLines = [];
    if (email) {
        emailLines.push(`${email.subject} ${email.sender}`);
        for (let key in email) {
            allEmailLines.push(`${email[key]} `)
        }
        return (
            <div className="email" onClick={() => emailSelectorFunc(id)}>
                {isSelected?(<p><h1>{allEmailLines}</h1></p>):(<p>{emailLines}</p>)}
            </div>
        )
    } else {
        return (<>{`No results.`}</>)
    }
}