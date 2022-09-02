import { Link } from "react-router-dom";
import "../sass/style.scss";

export default function Book({ item }) {
  return (
    <div>
      <Link  className="bookItems" to={`/View/${item.id}`}>
        <p style={{marginBottom:'10px', fontSize:'1.3rem', fontWeight:'700'}}> Review del libro {item.title}</p>
        <img className="img" src={item.cover} width="200" alt={item.title} />
        <div id="letters">{item.title}</div>
      </Link>
    </div>
  );
}
