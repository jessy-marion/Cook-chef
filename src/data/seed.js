import { data } from "./recipes";
import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

// eslint-disable-next-line react-hooks/rules-of-hooks
const BASE_URL_API = useContext(ApiContext);

async function seedRecipes() {
  await fetch(BASE_URL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export default seedRecipes;

/*
try {
    const response = await fetch("https://restapi.fr/api/recip");

    if (response.ok) {
        const datas = await response.json();
        console.log(datas);
    }
} catch (e) {
    console.log(e);
}*/
