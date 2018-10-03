import Link from 'next/link'

const linkStyle = {
  marginRight: 0,
}

const Header = () => (
    <div className="nav">
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/projects">
          <a style={linkStyle}>Projects</a>
        </Link><Link href="/books">
          <a style={linkStyle}>Books</a>
        </Link><Link href="/now">
          <a style={linkStyle}>Now</a>
        </Link>
        <style jsx>{`
        .nav { 
             background: #000;
             text-align: center;
             
         }

         .nav a {
          display: inline-block;
          padding: 10px;
          color: #fff;
          text-decoration: none;
        }
    `}</style>
    </div>
)

export default Header

