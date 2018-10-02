import Layout from '../components/MyLayout.js'
import Profile from '../components/Profile.js';
import Intro from '../components/Intro.js';

const Index = () => (
  
    <Layout>

    <div className="rowC">
    <Intro />

    <Profile />

    </div>

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

      .rowC {
          display:flex; 
          flex-direction:row;
        }

    `}</style>

    </Layout>
  )
  
  export default Index