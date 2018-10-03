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

      .rowC {
          display:flex; 
          flex-direction:row;
        }

    `}</style>

    </Layout>
  )
  
  export default Index