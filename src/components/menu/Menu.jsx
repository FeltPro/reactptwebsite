import MenuList from "../menuList/MenuList";
import "./menu.scss"

export default function Menu({ menuOpen, menuClose}) {

    const list = [
        {
            id: "#intro",
            title: "Home",
          },
          {
            id: "#about",
            title: "About",
          },
          {
            id: "#testimonials",
            title: "Services",
          },
          {
            id: "#works",
            title: "Testimonials",
          },
          {
            id: "#contact",
            title: "Contact",
          },
    ];

    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                {list.map(menuList => (
                    <MenuList 
                        key={menuList.id}
                        id={menuList.id} 
                        title={menuList.title}
                        menuClose={menuClose} 
                    />
                ))}
            </ul>
        </div>
    )
}
