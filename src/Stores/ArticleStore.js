import { observable, action, extendObservable } from "mobx";

class ArticleStore {
  constructor() {
    extendObservable(this, {
      articles: []
    });
  }

  setArticles = action(articles => {
    this.articles = articles.map(article => {
      article.key = article.articleId;
      return article;
    })
    this.articles = observable(this.articles);
  });
}

const Store = (window.store = new ArticleStore());
export default Store;
