import "./Boton.css"

function BotonChildren({children, type}) {
  
    const btnstyle = {
        backgroundColor: type === "alert" ? "red" : "green",
    };

    return (
    <button style={btnstyle} className="btn1">
        {children}
    </button>
  )
}

export default BotonChildren;