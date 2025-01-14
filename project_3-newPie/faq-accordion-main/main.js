const articles = document.querySelectorAll("article");


articles.forEach((article, i, arr) => {
  article.addEventListener('click', (e)=> {

    const clickedArticle = e.currentTarget;
    const pInArticle = clickedArticle.children[1];
    const plus = article.querySelector("#plus");
    const minus = article.querySelector("#minus");

    pInArticle.classList.toggle('disable');
    plus.classList.toggle('disable');
    minus.classList.toggle('disable');
  })
})