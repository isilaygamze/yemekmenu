import menuler from './veri.js'
import Menu from "./Menu.jsx"
import { useState } from 'react'


function MenuListe(){

    console.log(menuler)

    const kahvaltilar = menuler.filter(menu => menu.category ==='breakfast')
    const oglenler = menuler.filter(menu => menu.category ==='lunch')
    const shakelar = menuler.filter(menu => menu.category ==='shakes')
    console.log(kahvaltilar)

    console.log(menuler[0].img)

    const[kategori,kategoriGuncelle]=useState("all")

function kahvaltiFonk (){
    kategoriGuncelle("breakfast")
}
function oglenFonk (){
    kategoriGuncelle("lunch")
}
function shakeFonk (){
    kategoriGuncelle("shakes")
}
function allFonk (){
    kategoriGuncelle("all")
}


    return(
        <>
        <h1>Our Menu</h1>
        <button onClick={allFonk}>All</button>
        <button onClick={kahvaltiFonk}>Breakfast</button>
        <button onClick={oglenFonk}>Luanch</button>
        <button onClick={shakeFonk}>Shakes</button>
        {kategori==="all" && menuler.map((menu) => {return <Menu menu={menu}/>})}
        {kategori ==="breakfast" && kahvaltilar.map((menu)=>{return <Menu menu={menu}/>})}
        {kategori ==="lunch" && oglenler.map((menu)=>{return <Menu menu={menu}/>})}
        {kategori ==="shakes" && shakelar.map((menu)=>{return <Menu menu={menu}/>})}
        </>
    )
}

export default MenuListe