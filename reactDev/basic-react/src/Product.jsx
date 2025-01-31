export default function Product ({name, discriptions, oldprice, newprice}) {
    const dis = discriptions.map((discription) => <li>{discription}</li>)
    let styles = {
        border: "1px solid white",
        borderRadius: "14px",
        marginLeft: "20px",
        padding: "10px 50px 10px 50px",
    }
    let oldstyle = {
        textDecorationLine: "line-through",
    }
    let pricestyle = {
        backgroundColor: "#e0c367",
        height: "30px",
        borderBottomLeftRadius: "7px",
        borderBottomRightRadius: "7px",
        color: "black",
    }
    return (
        <div style={styles}>
            <h4>{ name }</h4>
            <p>{dis}</p>
            <p style={pricestyle}><span style={oldstyle}>{oldprice}</span> &nbsp; <b>{newprice}</b></p>
        </div>
    )
}