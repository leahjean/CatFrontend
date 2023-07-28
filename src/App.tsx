import './App.css'
import GalleryContainer from './gallery/galleryContainer'
import GalleryHeader from './gallery/galleryHeader'

function App() {
  return (
    <>
      <GalleryHeader />
      <hr id="galleryDivider" />
      <GalleryContainer />
    </>
  )
}

export default App
