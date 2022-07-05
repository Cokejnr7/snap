

const Menu = (props) => {
    let arr = []
    for (x in props) {
        arr.push(x)
    }
    return (
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    );
}

export default Menu;