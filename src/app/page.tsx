import "../assets/frame.png";
import Framer from '../assets/frame.png';
import ImgMain from '../assets/img.jpeg';
import ImgColeira from '../assets/coleiras.jpeg';
import ImgBrinquedos from '../assets/Brinquedos.png';
import ImgCama from '../assets/cama.jpeg';
import { Clock, PawPrint, Bone, Dog } from 'lucide-react';

const Home = () => {
  return (
    <>
      <section className="w-screen min-h-dvh flex flex-col relative bg-white text-black items-center top-22">
        <h1 className="text-5xl  mb-3 relative top-18" id="content">Best Accessories for Beloved Pets</h1>
        <p className="w-2/5 text-center text-[1.2rem] top-18 relative" id="content-two">Enhance you  pet's lifestyle with our premium selection of accessories, ensuring comfort, style, and well-being for you furry friends.</p>
        <img className="w-screen h-[130vh]" src={Framer.src} alt="imagem de fundo" />
        <img className="absolute w-[70%] max-w-full h-auto top-[25rem] rounded-2xl object-contain" src={ImgMain.src} alt="Imagem Principal" />
      </section>
      <section className="w-full h-[60vh] bg-white flex justify-center items-center gap-8">
        <div className="w-[22vw] h-[36vh] bg-[color:#e9f0fd] rounded-3xl p-6 flex flex-col items-center">
          <Clock className="icon bg-blue-700 rounded-full p-2 self-end mb-6 mt-2" size={50} />
          <h1 className="text-4xl text-center text-black"  id="content">Premium Pet <br/> Food Selection</h1>
          <p className="text-gray-600 text-center text-[1.3rem] px-2 mt-3 " id="nav">Explore our range of nutritious and high-quality meals for you pats, ensuring their health and viatlity.</p>
        </div>
        <div className="w-[20vw] h-[36vh] bg-[color:#e9f0fd] rounded-3xl p-6 flex flex-col items-center">
          <PawPrint className="icon bg-blue-700 rounded-full p-2 self-end mb-6 mt-2" size={50} />
          <h1 className="text-4xl text-center text-black"  id="content">Stylish Pet <br/> Acessories</h1>
          <p className="text-gray-600 text-center text-[1.3rem] px-2 mt-3 " id="nav">Discover fashionable and functional acessories to enhance your pet's confort and style</p>
        </div>
        <div className="w-[20vw] h-[36vh] bg-[color:#e9f0fd] rounded-3xl p-6 flex flex-col items-center">
          <Bone className="icon bg-blue-700 rounded-full p-2 self-end mb-6 mt-2" size={50} />
          <h1 className="text-4xl text-center text-black"  id="content">Pet Grooming <br/> Essentials</h1>
          <p className="text-gray-600 text-center text-[1.3rem] px-2 mt-3 " id="nav">Discover fashionable and functional acessories to enhance your pet's confort and style</p>
        </div>
        <div className="w-[20vw] h-[36vh] bg-[color:#e9f0fd] rounded-3xl p-6 flex flex-col items-center">
          <Dog className="icon bg-blue-700 rounded-full p-2 self-end mb-6 mt-2" size={50} />
          <h1 className="text-4xl text-center text-black"  id="content">Safe Pet Travel <br/> Gear</h1>
          <p className="text-gray-600 text-center text-[1.3rem] px-2 mt-3 " id="nav">Discover fashionable and functional acessories to enhance your pet's confort and style</p>
        </div>
      </section>
      <section className="w-full h-screen flex  gap-4 justify-center items-center bg-white text-black">
      <div className="w-[26vw] flex flex-col items-center gap-4">
          <img className="w-full h-[30vh] rounded-3xl object-cover" src={ImgColeira.src} alt="Blogs" />
          <h1 className="text-3xl" id="content">Colorful Pet Collars</h1>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorum nisi quas culpa praesentium sequi vel accusantium dolorem rem, maxime illo incidunt harum asperiores, enim, officiis eligendi similique iusto odio?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, earum beatae. Quam, qui exercitationem. Laudantium iusto fugit ab perspiciatis! Eaque, qui voluptatibus! Enim temporibus ullam culpa</p>
          <button>View Our Projects</button>
        </div>
        <div className="w-[26vw] flex flex-col items-center gap-4">
          <img className="w-full h-[30vh] rounded-3xl object-cover" src={ImgBrinquedos.src} alt="Blogs" />
          <h1 className="text-3xl" id="content">Interactive Toy Development</h1>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorum nisi quas culpa praesentium sequi vel accusantium dolorem rem, maxime illo incidunt harum asperiores, enim, officiis eligendi similique iusto odio?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, earum beatae. Quam, qui exercitationem. Laudantium iusto fugit ab perspiciatis! Eaque, qui voluptatibus! Enim temporibus ullam culpa</p>
          <button>View Our Projects</button>
        </div>
        <div className="w-[26vw] flex flex-col items-center gap-4">
          <img className="w-full h-[32vh] rounded-3xl object-cover" src={ImgCama.src} alt="Blogs" />
          <h1 className="text-3xl" id="content">Eco-Friendly Bedding Solutions</h1>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorum nisi quas culpa praesentium sequi vel accusantium dolorem rem, maxime illo incidunt harum asperiores, enim, officiis eligendi similique iusto odio?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, earum beatae. Quam, qui exercitationem. Laudantium iusto fugit ab perspiciatis! Eaque, qui voluptatibus! Enim temporibus ullam culpa</p>
          <button>View Our Projects</button>
        </div>
      </section>
    </>
  );
};

export default Home;