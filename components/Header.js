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

