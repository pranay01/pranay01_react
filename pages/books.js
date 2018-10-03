import Layout from '../components/MyLayout.js'
import bookList from '../data/bookList.js';

const Books =  () => (
    
  <Layout>

    <ul>
    {
    bookList.map( book => (<li>{book.name}, {book.author}</li>))
    }
    </ul>

  </Layout>

   
  )

  export default Books