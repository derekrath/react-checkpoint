// import ShipAttr from './ShipAttr';

export default function SearchEmails({ emails, userInput }) {

    let foundEmail = emails.find((element) => element.subject === userInput);
    if (foundEmail) {
        let emailLines = [];
        for (let i in foundEmail) {
            emailLines.push(`${i} : ${foundEmail[i]}`);
        }
        return (<>
            {
            emailLines.map((element, index) => (
                <li key={index}>
                    {element}
                </li>
            ))
            }
        </>)
    } else {
        return (<>{`No results.`}</>)
    }
}