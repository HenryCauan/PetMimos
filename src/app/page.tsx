import "../assets/frame.png";
import Framer from '../assets/frame.png';
import ImgMain from '../assets/img.jpeg';
import { Clock, PawPrint, Bone, Dog } from 'lucide-react';

const Home = () => {
  return (
    <>
      <section className="w-screen min-h-dvh flex flex-col relative bg-white text-black items-center">
        <h1 className="text-5xl mt-12 mb-3" id="content">Best Accessories for Beloved Pets</h1>
        <p className="w-2/5 text-center text-[1.2rem]" id="content-two">Enhance you  pet's lifestyle with our premium selection of accessories, ensuring comfort, style, and well-being for you furry friends.</p>
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
      <section className="">
        <div>
          <img className="" src="" alt="" />
          <h1></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorum nisi quas culpa praesentium sequi vel accusantium dolorem rem, maxime illo incidunt harum asperiores, enim, officiis eligendi similique iusto odio?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, earum beatae. Quam, qui exercitationem. Laudantium iusto fugit ab perspiciatis! Eaque, qui voluptatibus! Enim temporibus ullam culpa dolorem sequi soluta voluptatibus.</p>
          <button>View Our Projects</button>
        </div>
        <div>
          <img className="" src="" alt="" />
          <h1></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorum nisi quas culpa praesentium sequi vel accusantium dolorem rem, maxime illo incidunt harum asperiores, enim, officiis eligendi similique iusto odio?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, earum beatae. Quam, qui exercitationem. Laudantium iusto fugit ab perspiciatis! Eaque, qui voluptatibus! Enim temporibus ullam culpa dolorem sequi soluta voluptatibus.</p>
          <button>View Our Projects</button>
        </div>
        <div>
          <img className="" src="" alt="" />
          <h1></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorum nisi quas culpa praesentium sequi vel accusantium dolorem rem, maxime illo incidunt harum asperiores, enim, officiis eligendi similique iusto odio?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, earum beatae. Quam, qui exercitationem. Laudantium iusto fugit ab perspiciatis! Eaque, qui voluptatibus! Enim temporibus ullam culpa dolorem sequi soluta voluptatibus.</p>
          <button>View Our Projects</button>
        </div>
      </section>
    </>
  );
};

export default Home;