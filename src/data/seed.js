import { data } from "./recipes";

async function seedRecipes() {
  await fetch("https://restapi.fr/api/recip", {
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
