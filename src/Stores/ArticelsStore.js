import { extendObservable } from "mobx";
import ArticlesData from "./../Data/Articles.json";
import moment from "moment";

class ArticleStore {
  constructor() {
    extendObservable(this, {
      articles: []
    });
  }

  loadArticles = options => {
    if (options === undefined) {
      this.articles = ArticlesData.map(article => {
        const date = moment(new Date(article.publishedAt));
        const formattedDate = date.format("DD MMM YYYY");
        article.formattedPublishedDate = formattedDate;
        return article;
      });
    }
  };
}

const store = new ArticleStore();
store.loadArticles();
export default store;
