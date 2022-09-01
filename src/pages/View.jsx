import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppcontext } from "../store/Store";

export default function View() {
  const [item, setItem] = useState(null);
  const params = useParams();
  const store = useAppcontext();

  useEffect(() => {
    const book = store.getItem(params.bookId); //Me regresa el id del elemento
    setItem(book);
  }, []);

  if (!item) {
    return <Layout>Item not found</Layout>;
  }

  return (
    <div className="">
      <Layout>
        <h2>{item?.title}</h2>
        <div>{item?.cover ? <img src={item.cover} width="400" /> : ""}</div>
        <div>{item?.author}</div>
        <div>{item?.intro}</div>
        <div>{item?.completed ? "Leído" : "Por Terminar"}</div>
        <div>{item?.review}</div>
      </Layout>
    </div>
  );
}
