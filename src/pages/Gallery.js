import Description from "../components/Description";
import ImageGallery from "../components/ImageGallery";

function Gallery() {
  return (
    <div className="mt-24">
      <ImageGallery />
      <Description
        title="Photo Gallery"
        content="In my spare time, I enjoy nature photography. Adusting the Material UI (MUI)
        Image List component was a quick, but visually pleasing solution for
        presenting my recent shots. Each image was assigned to an object,
        combined into an array and mapped through to create the full gallery. It's super helpful to be able to use resources like MUI when looking to make something beautiful quickly, without re-inventing the wheel."
        colour="#adcde4"
        accent="#839dd7"
        softwares={["Material UI"]}
        skills={[
          "Utilising multiple CSS libraries",
          "Securing photos - watermarks, file size",
          "Reading documentation",
        ]}
      />
    </div>
  );
}

export default Gallery;
