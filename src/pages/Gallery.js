import ImageGallery from "../components/ImageGallery";

function Gallery() {
  return (
    <div className="mt-24">
      <ImageGallery />
      <p className="m-36 mx-auto mb-16 text-justify">
        In my spare time, I enjoy nature photography. Adusting the Material UI
        Image List component was a quick, but visually pleasing solution for
        presenting my recent shots. Each image was assigned to an object,
        combined into an array and mapped through to create the full gallery.
      </p>
    </div>
  );
}

export default Gallery;
