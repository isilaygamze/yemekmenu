
import "./menu.css"

function Menu ({menu}){


    return(
        <>
        <p></p>
        <img src ={menu.img}  alt="resim" srcset="" className="resim"/>
        <p>{menu.title}</p>
        <p>{menu.price}</p>
        <p>{menu.desc}</p>
        </>
    )
}

export default Menu