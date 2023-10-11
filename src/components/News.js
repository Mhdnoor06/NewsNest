import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const News = (props) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const apiUrl = `http://localhost:5000/api/news?country=${props.country}&category=${props.category}&page=${page}&pageSize=${props.pageSize}`;

      props.setProgress(0);
      props.setProgress(70);
      props.setProgress(100);
      try {
        const response = await axios.get(apiUrl);

        if (response.status === 200) {
          const data = response.data;

          setArticle(data.articles);
          setTotalResults(data.totalResults);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, [page, props]);

  return (
    <>
      <h1 className="text-center" style={{ marginTop: "90px" }}>
        NewsNest-Top {props.category}
      </h1>
      <InfiniteScroll
        dataLength={article.length}
        hasMore={article.length < totalResults}
      >
        <div className="container">
          <div className="row">
            {article.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : " "}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : " "
                    }
                    imageUrl={element.urlToImage}
                    newUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      <div className="d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a
                className={`page-link ${page === 1 ? "disabled" : ""}`}
                onClick={() => setPage(page - 1)}
              >
                Previous
              </a>
            </li>
            <li className="page-item ">
              <a
                className={`page-link ${
                  page === 1 ? "bg-dark text-white" : ""
                }`}
                onClick={() => setPage(1)}
              >
                1
              </a>
            </li>
            <li className="page-item">
              <a
                className={`page-link ${
                  page === 2 ? "bg-dark text-white" : ""
                }`}
                onClick={() => setPage(2)}
              >
                2
              </a>
            </li>
            <li className="page-item">
              <a
                className={`page-link ${
                  page === 3 ? "bg-dark text-white" : ""
                }`}
                onClick={() => setPage(3)}
              >
                3
              </a>
            </li>
            <li className="page-item">
              <a
                className={`page-link ${page === 3 ? "disabled" : ""}`}
                onClick={() => setPage(page + 1)}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
};

export default News;
