import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppcontext } from "../store/Store";
import "../sass/style.scss";

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
    <div>
      <Layout>
        <div className="viewContainer">
          <div>
            <h2 style={{ textAlign: "center" }}>{item?.title}</h2>
            <div>{item?.cover ? <img src={item.cover} width="400" /> : ""}</div>
          </div>
          <div className="infoViewContainer">
            <div>{`Written by: ${item?.author}`}</div>
            <div> {`Introduction: ${item?.intro}`}</div>
            <div style={{ fontWeight: "700", marginTop: "10px" }}>{`Estate: ${
              item?.completed ? "Read" : "About to finish"
            }`}</div>
            <div>{item?.review}</div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
