import { Card } from "./components/Card/Card"
import articles from "./data/articles.json"

function App() {

  return (
    <>
      <div className="main-container">
        <header className="main-navbar">
          <img src="/assets/logo-31ec8eaf.png" width="45px" height="45px" alt="logo propio" />
          <nav>
            <ul className="nav-list nav-list-header">
              <li><a href="" className="text-button text-button-md font-bold is-active">Inicio</a></li>
              <li><a href="" className="text-button text-button-md font-bold">Suscribirse</a></li>
              <li><button className="button button-primary">Hablalo mi pez</button></li>
              <li><button className="button button-secondary">Conoceme</button></li>
            </ul>
          </nav>
        </header>
        <main>
          <section className="featured-posts">
            <article></article>
            <div className="button-cotainer">
              <button>Atras</button>
              <button>Adelante</button>
            </div>
          </section>
          <section className="post-list-container">
            <nav className="tags-filter">
              <div className="filter-list-scroll-hider">
                <ul className="nav-list filter-list">
                  <li className="is-active-filter"><a className="filter paragraph-sm font-bold" href="#">Todos</a>
                  </li>
                  <li><a className="filter paragraph paragraph-sm font-bold" href="#">HTML</a></li>
                  <li><a className="filter paragraph paragraph-sm font-bold" href="#">CSS</a></li>
                  <li><a className="filter paragraph paragraph-sm font-bold" href="#">JavaScript</a></li>
                  <li><a className="filter paragraph paragraph-sm font-bold" href="#">Web components</a></li>
                  <li><a className="filter paragraph paragraph-sm font-bold" href="#">Sistemas de diseño</a></li>
                </ul>
              </div>
              <input className="input" type="search" placeholder="Buscar" />
            </nav>
            <div className="post-list">
              {articles.map((article) => {
                return <Card key={article.id} {...article}/>
              })}
            </div>
          </section>
        </main>
      </div>
      <footer className="main-footer"></footer>
    </>
  )
}

export default App
