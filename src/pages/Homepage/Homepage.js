import styles from "./Homepage.module.scss";
import Recipe from "./components/Recipe/Recipe";
import { data } from "../../data/recipes";
import { useState } from "react";

function Homepage() {
  const [filter, setFilter] = useState("");
  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  return (
    <div className={"container flex-fill p p-20"}>
      <h1 className={"my-30"}>Découvrez nos nouvelles recettes</h1>
      <div className={`d-flex flex-column card p-20 ${styles.contentCard}`}>
        <div
          className={`
            d-flex flex-row justify-content-center align-items-center my-30 ${styles.searchBar}`}
        >
          <i className="fa-solid fa-magnifying-glass mr-15"></i>
          <input
            onInput={handleInput}
            className={"flex-fill"}
            type="text"
            placeholder={"Rechercher"}
          />
        </div>
        <div className={styles.grid}>
          {data
            .filter((r) => r.title.toLowerCase().startsWith(filter))
            .map((r, index) => (
              <Recipe key={`${r._id}`} title={r.title} image={r.image} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
