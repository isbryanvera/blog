import "./Autor.scss";

function Autor({name, img}) {
  return (
    <div className="author">
      <img src={img} alt={name} />
      <span className="paragraph-xs font-bold">{name}</span>
    </div>
  )
}

export { Autor }
