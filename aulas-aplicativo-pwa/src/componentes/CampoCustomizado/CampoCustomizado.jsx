import "./CampoCustomizado.css"

function CampoCustomizado(props) {
    return (
        <div className="inputNome_root">
            <span>
                {props.label}
            </span>
            <input {...props} />
        </div>
    )
}

export default CampoCustomizado;