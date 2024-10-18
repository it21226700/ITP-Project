import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      
      <div className="container">
      
        <Link to="/">
          <h1>Serendip</h1>
          </Link>
          
          <div className="search" >
            <input className="search" placeholder="Search Employees" name= "searchemp"></input>
          </div>
          
        
      </div>
    </header>
  )
}

export default Navbar