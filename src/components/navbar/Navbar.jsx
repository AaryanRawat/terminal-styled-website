import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
            <span>Aaryan Rawat</span>
            <div className="social">
                <a href="github">Github</a>
                <a href="linkedin">LinkedIn</a>
                <a href="blog">Blog</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar