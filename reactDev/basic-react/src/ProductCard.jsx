import Product from "./Product.jsx";

export default function ProductCard() {
    let styles = {display: "flex",
        flexWeap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    }

    return (
        <div style={styles}>
            <Product name="logitech MX Master" discriptions={["8000 DPI", "5 Programable Buttons"]} oldprice={12495} newprice={8999}/>
            <Product name="Apple Pencile" discriptions={["intuitive touch surface", "designed for ipad Pro"]} oldprice={11900} newprice={9199}/>
            <Product name="Zebronics Zeb-Transfer" discriptions={["intrective touch surface", "designed for ipad PRO"]} oldprice={1500} newprice={799}/>
            <Product name="Portoronics Toad 23" discriptions={["wireless mouse", "optical"]} oldprice={599} newprice={359}/>
        </div>
    )
}