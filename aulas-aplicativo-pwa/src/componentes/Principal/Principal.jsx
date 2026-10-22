import "./Principal.css";
import { Link } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";


function Principal(props) {
  return (
    <main className="Principal_root">
      <div className="Principal_titulo">
      {props.voltarPara && <Link to={props.voltarPara}><IoArrowBackCircleSharp size={29} /></Link>}

      <h2>{props.titulo}</h2>

      </div>
      {props.children}
    </main>
  )
}

export default Principal;