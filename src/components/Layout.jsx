import NavBar from "../components/NavBar";
import '../sass/style.scss'

export default function Layout({children}) {
  return (
    <div>
        <NavBar></NavBar>
        <div className="layout">{children}</div>
    </div>
  )
}
