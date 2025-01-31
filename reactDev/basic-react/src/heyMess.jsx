export default function Message ({ userName, textColor }) {
    let color = {backgroundColor: textColor}
    return (
        <div style={color}>
            <h2>heyy: { userName }</h2>
        </div>
    )
}