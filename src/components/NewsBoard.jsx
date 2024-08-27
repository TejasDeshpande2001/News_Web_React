import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"


const NewsBoard = ({category}) => {
   const[articles,setArticles]=useState([])
  //  useEffect(()=>{
  //   let url=`https://newsapi.org/v2/everything?q=bitcoin&categoty=${category}&apiKey=8063bf03b3394784bad4d7037018d2fe`;
  //   fetch(url).then(response =>response.json()).then(data=>setArticles(data.articles))




  //  },[category])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let url= `https://newsapi.org/v2/everything?q=${category}&apiKey=8063bf03b3394784bad4d7037018d2fe`;

  let response = await fetch(url);
        let data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [category]);


  return (
    <div>
      <h2 className="text-center">Latest <span className="badge text-bg-secondary ">News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} descriptino={news.description} src={news.urlToImage} url={news.url} />
      })}
    </div>
  )
}

export default NewsBoard
