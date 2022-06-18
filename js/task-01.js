const countCategories = document.querySelector("#categories").children;
console.log(`Number of categories: ${countCategories.length}`);

[...countCategories].map((category) => {
  const nameCategory = category.querySelector("h2").textContent;
  const countSubCategory = category.querySelectorAll("li").length;

  console.log(`Category: ${nameCategory}`);
  console.log(`Elements: ${countSubCategory}`);
});
