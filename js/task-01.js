const categories = document.querySelectorAll(".item");
const numberOfCategories = categories.length;
console.log(`Number of categories: ${numberOfCategories}`);

categories.forEach((item) => {
  const categoryHeader = item.firstElementChild.textContent;
  console.log(`Category: ${categoryHeader}`);

  const numberOfElements = item.lastElementChild.children.length;
  console.log(`Elements: ${numberOfElements}`);
});
