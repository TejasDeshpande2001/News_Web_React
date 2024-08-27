import { useState } from "react";

const Navbar = ({setCategory}) => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      setCategory(searchTerm.trim().toLowerCase());
    }
  };


  return (
    <div>


<nav className="navbar navbar-expand-lg bg-body-tertiary "data-bs-theme="dark">
  <div className="container-fluid">
    <div className="navbar-brand" >News Website</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <div className="nav-link" onClick={()=>setCategory("general")}>Home</div> */}
          <div className="nav-link " onClick={()=>setCategory("India")} >Home</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
        </li>
        <li className="nav-item">

          <div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li>
        
        
        
      </ul>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Search" 
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
    </div>
  </div>
</nav>


      
    </div>
  )
}

export default Navbar
