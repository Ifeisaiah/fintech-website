const NavItem = (props) => {
    return (
        <li className="inline sm:mx-4 flex">
            <a href="#!">{props.link}</a>
            <span class="material-symbols-outlined">expand_more</span>
        </li>
    )
}

export default NavItem;