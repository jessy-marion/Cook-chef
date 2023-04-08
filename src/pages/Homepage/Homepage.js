import styles from "./Homepage.module.scss";
import Recipe from "./components/Recipe/Recipe";

import { useContext, useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import { ApiContext } from "../../context/ApiContext";

function Homepage() {
  const [filter, setFilter] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL_API = useContext(ApiContext);

  useEffect(() => {
    let cancel = false;
    async function fetchRecipes() {
      try {
        setLoading(true);
        const response = await fetch(BASE_URL_API);

        if (response.ok && !cancel) {
          const datas = await response.json();
          setRecipes(Array.isArray(datas) ? datas : [recipes]);
        }
      } catch (e) {
        console.log(e);
      } finally {
        if (!cancel) {
          setLoading(false);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    void fetchRecipes();
    return () => (cancel = true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function updateRecipe(updatedRecipe) {
    setRecipes(
      recipes.map((r) => (r._id === updatedRecipe._id ? updatedRecipe : r))
    );
  }

  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  return (
    <div className={"container flex-fill d-flex flex-column p-20 "}>
      <h1 className={"my-30"}>Découvrez nos nouvelles recettes</h1>
      <div
        className={`d-flex flex-fill flex-column card p-20 mb-20 ${styles.contentCard}`}
      >
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

        {loading ? (
          <Loading />
        ) : (
          <div className={styles.grid}>
            {recipes
              .filter((r) => r.title.toLowerCase().startsWith(filter))
              .map((r, index) => (
                <Recipe
                  key={r._id}
                  recipe={r}
                  toggleLikedRecipe={updateRecipe}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Homepage;
