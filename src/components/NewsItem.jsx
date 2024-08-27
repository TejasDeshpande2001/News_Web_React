

const NewsItem = ({title,descriptino,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block py-2 px-2 my-3 mx-3" style={{maxWidth:"345px"}}>
  <img src={src?src:"https://img.freepik.com/free-vector/gradient-breaking-news-background_23-2151157233.jpg?w=900&t=st=1724675330~exp=1724675930~hmac=a6c929bc6729f006d1077b616d0f73bf0effe049089e0f63d5048e22651deb46"} style={{height:"200px",width:"325px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)?title.slice(0,50):"Title not available "}...</h5>
    <p className="card-text">{descriptino?descriptino.slice(0,90):"No Description Is Available"}</p>
    <a href={url} className="btn btn-primary">Read Article</a>
  </div>
</div>
  )
}

export default NewsItem
