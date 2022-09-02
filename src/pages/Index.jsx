import { useAppcontext } from "../store/Store";
import Book from "../components/Book";
import Layout from "../components/Layout";
import '../sass/style.scss'

export default function Index() {
  const store = useAppcontext();

  const title = store.items.map((item) => (<Book key={item.id} item={item} />));


  return (
    <Layout>
      <div className="bookContainer">
        {title.length === 0 ? 'Guarda Aquí tus libros presionando el botón de create' : title }
      </div>
    </Layout>
  );
}
