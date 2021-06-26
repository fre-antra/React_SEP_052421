import './headerStyle.css'

const Header = ({cardColor, content}) => {
    return (
        <>
            <header className='header' style={{ color: cardColor }}> { content } </header>
        </>
    )
}

export default Header
