import "./menuList.scss"

export default function MenuList({id, title, menuClose}) {
    return (
        <li onClick={()=>menuClose(false)}>
            <a href={id}>{title}</a>
        </li>
    )
}
