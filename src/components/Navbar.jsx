import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="about">Quem somos</Link>
        <br />
        <Link to="helpUs">Quero ajudar</Link>
        <br />
        <Link to="adopt">Quero adotar</Link>
        <br />
        <Link to="login">Entrar</Link>
        <br />
        <Link to="announce">Anunciar</Link>
        <br />
    </nav>
  )
}

export default Navbar