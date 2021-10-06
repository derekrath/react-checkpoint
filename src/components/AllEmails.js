
export default function SearchEmails({ emails, isSelected, id, emailSelectorFunc, key }) {
    let emailLines = [];
    if (emails) {
        for (let i in emails) {
            emailLines.push(`${emails[i][2]} ${emails[i][0]}`);
        }
        return (
            <div className="email" onClick={() => emailSelectorFunc(id)}>
                {
                emailLines.map((element, index) => (
                    <li key={index}>
                        {isSelected?(<p><h1>{element}</h1></p>):(<p>{element}</p>)}
                        {isSelected?(<p>{emails[index]}</p>):<></>}
                    </li>
                ))
            }
            </div>
        )
    } else {
        return (<>{`No results.`}</>)
    }
}