import './App.css'
import BlogCard from './BlogCard'
import cactus from './assets/cactus_img.jpg'
function App() {


  return (
    <div className="app">
        <BlogCard
        image={cactus}
        tag='Design'
        title='Embracing Minimalism'
        details='From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.'
        author='Annie Spratt'
         />
    </div>
  )
}

export default App
