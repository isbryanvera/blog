import Button from "./components/Button"
import Link from "./components/Link"
import Card from "./components/Card"
import articles from "./data/articles.json"
import filters from "./data/filter.json"
import TagsFilter from "./components/TagsFilter/TagsFilter"

function App() {

  return (
    <>
      <div className="main-container">
        <header className="main-navbar">
          <img src="/assets/logo-31ec8eaf.png" width="45px" height="45px" alt="logo propio" />
          <nav>
            <ul className="nav-list nav-list-header">
              <li><Link isActive={true}>Inicio</Link></li>
              <li><Link>Suscribirse</Link></li>
              <li><Button type={'primary'}>Undefined Shell</Button></li>
              <li><Button type={'secondary'}>Conoceme</Button></li>
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
            <TagsFilter filters={filters}></TagsFilter>
            <div className="post-list">
              {articles.map((article,index) => {
                const isExtended = (index + 1) % 4 === 0
                const isReversed = (index + 1) % 8 === 0
                return <Card key={index} {...article} isExtended={isExtended} isReversed={isReversed}/>
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
