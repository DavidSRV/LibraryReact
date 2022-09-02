import { useState } from "react";
import { useAppcontext } from "../store/Store";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import "../sass/_form.scss";

export default function Create() {
  const [title, setTitle] = useState(""); //Titulo
  const [author, setAuthor] = useState(""); //Autor
  const [cover, setCover] = useState(""); //Imagenes
  const [intro, setIntro] = useState(""); // introduccion
  const [completed, setCompleted] = useState(false); //Completado
  const [review, setReview] = useState(""); //Review

  const store = useAppcontext();
  const navigate = useNavigate();

  function handleChange(e) {
    const name = e.target.name; // Accedemos a todos los inputs
    const value = e.target.value; // Valor del input

    // Enviamos el valor del input al setTitle
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "cover":
        setCover(value);
        break;
      case "intro":
        setIntro(value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "review":
        setReview(value);
        break;
    }
  }

  function handleOnChangeFile(e) {
    //Procesamos imagenes desde el fronted

    const element = e.target;
    const file = element.files[0];
    const reader = new FileReader(); //Api que permite manejar elements desde el navegador

    reader.readAsDataURL(file);

    reader.onloadend = function () {
      setCover(reader.result.toString());
    };
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newBook = {
      //Creamos un objeto
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review,
    };

    store.createItem(newBook); // Guarda el libro
    navigate("/"); // Me redirige a la pagina
  }

  return (
    // Crea un link al index
    <Layout>
      <form className="formCotainer" onSubmit={handleSubmit}>
        <div className="container">
          <div className="title">Title</div>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
            className="input"
          />
        </div>

        <div className="container">
          <div className="title">Author</div>
          <input
            type="text"
            name="author"
            onChange={handleChange}
            value={author}
            className="input"
          />
        </div>

        <div className="container">
          <div className="title">Cover</div>
          <input
            className="input"
            type="file"
            name="cover"
            onChange={handleOnChangeFile}
          />
          <div>
            {!!cover ? <img src={cover} width="200" alt="preview" /> : ""}
          </div>
        </div>

        <div className="container">
          <div className="title">Introduction</div>
          <input
            type="text"
            name="intro"
            onChange={handleChange}
            value={intro}
            className="input"
          />
        </div>

        <div className="container">
          <div className="title">Completed</div>
          <input
            type="checkbox"
            name="completed"
            onChange={handleChange}
            value={completed}
            className="inputcompleted"
          />
        </div>

        <div className="container">
          <div className="title">Review</div>
          <input
            type="text"
            name="review"
            onChange={handleChange}
            value={review}
            className="input"
          />
        </div>

        <input className="inputCreate" type="submit" value="RegisterBook" />
      </form>
    </Layout>
  );
}
