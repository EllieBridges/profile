import { useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function ImagesGallery() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-5/6 h-full mx-auto">
      <Box sx={{ overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={10}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                className="hover:scale-110"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}

const itemData = [
  {
    img: "./img/photos/squirrel.jpeg",
    title: "Squirrel",
  },
  {
    img: "./img/photos/appleLeaf.jpeg",
    title: "Apple Tree Leaf, Kitwanga BC",
  },
  {
    img: "./img/photos/elk.jpeg",
    title: "Elk, Jasper National Park AB",
  },
  {
    img: "./img/photos/sunlight.jpeg",
    title: "Sunbeams",
  },
  {
    img: "./img/photos/flowers.jpeg",
    title: "Flowers",
  },
  {
    img: "./img/photos/skeena.jpeg",
    title: "River Skeena, Kitwanga BC",
  },
  {
    img: "./img/photos/mushroomPeg.jpeg",
    title: "Mushroom on Wooden Peg, Kitwanga BC",
  },
  {
    img: "./img/photos/hummingbird.jpeg",
    title: "Hummingbird, Shawnigan Lake BC",
  },
  {
    img: "./img/photos/river.jpeg",
    title: "River, Kitwanga BC",
  },
  {
    img: "./img/photos/canmore.jpeg",
    title: "Canmore BC",
  },
  {
    img: "./img/photos/bee.jpeg",
    title: "Bee, Golden BC",
  },
  {
    img: "./img/photos/snake.jpeg",
    title: "Snake, Kitwanga BC",
  },
  {
    img: "./img/photos/fernie.jpeg",
    title: "Trail, Fernie BC",
  },
  {
    img: "./img/photos/squirrelPeanut.jpeg",
    title: "Squirrel with Peanut, Vancouver Island BC",
  },
  {
    img: "./img/photos/clover.jpeg",
    title: "Clover, Kitwanga BC",
  },
  {
    img: "./img/photos/stellersJay.jpeg",
    title: "Steller's Jay, Kitwanga BC",
  },
  {
    img: "./img/photos/pika.jpeg",
    title: "Pika, Fernie BC",
  },
  {
    img: "./img/photos/vines.jpeg",
    title: "Vines",
  },
  {
    img: "./img/photos/bigHornSheep.jpeg",
    title: "Big Horn Sheep, Jasper National Park AB",
  },
  {
    img: "./img/photos/bouquet.jpeg",
    title: "Wildflower Bouquet, Kitwanga BC",
  },
  {
    img: "./img/photos/bearCub.jpeg",
    title: "Bear Cub, BC",
  },
  {
    img: "./img/photos/lizardLake.jpeg",
    title: "Lizard Lake, Fernie BC",
  },
  {
    img: "./img/photos/tinyMushrooms.jpeg",
    title: "Tiny Mushrooms",
  },
  {
    img: "./img/photos/robin.jpeg",
    title: "Robin, Kitwanga BC",
  },
  {
    img: "./img/photos/kitwanga.jpeg",
    title: "Kitawanga BC",
  },
  {
    img: "./img/photos/blackBear.jpeg",
    title: "Black Bear, Jasper National Park AB",
  },
  {
    img: "./img/photos/butterfly.jpeg",
    title: "Butterfly, Kimberley BC",
  },
  {
    img: "./img/photos/beanLeaf.jpeg",
    title: "Runner Bean Leaf, Kitwanaga BC",
  },
  {
    img: "./img/photos/whiteMushrooms.jpeg",
    title: "Tiny White Mushroom, Kitwanaga BC",
  },
  {
    img: "./img/photos/dragonfly.jpeg",
    title: "Dragonfly, Kitwanga BC",
  },
];

export default ImagesGallery;
