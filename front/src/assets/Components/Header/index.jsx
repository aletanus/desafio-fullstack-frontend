
export const Header = ({ id, className, username, pDescription, buttonTitle, onClick, type, hidden }) => {

    return (
        
        <header>
            <h2 id={id} >{username}</h2>
            <p className={className} >{pDescription}</p>
            <button onClick={onClick} type={type} hidden={hidden} >{buttonTitle}</button>
        </header>

    )
}