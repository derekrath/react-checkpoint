
export default function SearchEmails({ emails, userInput }) {

    let foundEmail = emails.find((element) => element.subject === userInput);
    if (foundEmail) {
        let emailLines = [];
        for (let i in foundEmail) {
            emailLines.push(`${i} : ${foundEmail[i]}`);
        }
        return (
            <div class="emailLine">
                {
                emailLines.map((element, index) => (
                    <div key={index}>
                        {element}
                    </div>
                ))
                }
            </div>)
    } else {
        return (<>{`No results.`}</>)
    }
}