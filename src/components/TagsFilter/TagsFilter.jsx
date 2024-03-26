import { Filter } from "../Filter/Filter";
import { useState } from "react";
import "./TagsFilter.scss";

function TagsFilter({filters = []}) {
  const [firstFilter] = filters
  const [activeFilter,setActiveFilter] = useState(firstFilter.name)

  return (
    <nav className="tags-filter">
      <div className="filter-list-scroll-hider">
        <ul className="nav-list filter-list">
          {filters.map(({name,href},index) => {
            return(
              <Filter key={index} isActive={activeFilter === name} href={href} onClick={setActiveFilter}>
                {name}
              </Filter>)
          })}
        </ul>
      </div>
      <input className="input" type="search" placeholder="Buscar" />
    </nav>
  )
}

export default TagsFilter 
