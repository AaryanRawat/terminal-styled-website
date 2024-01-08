import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
        {/*Sidebar */}
        <div className="wrapper">
            <span>Aaryan Rawat</span>
            <div className="social">
                <a href="github">Github</a>
                <a href="linkedin">LinkedIn</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar