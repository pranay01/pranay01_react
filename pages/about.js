import Layout from '../components/MyLayout.js'

export default () => (
    
      <Layout>
        <h2> What I am doing now? </h2>
         <a href='/now'> Now </a>   

         <h2>Contact me</h2>
         <p>Mail me at firstname dot iitm at gmail dot com</p>

         <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
      </Layout>
  )