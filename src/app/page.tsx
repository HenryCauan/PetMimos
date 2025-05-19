import "../assets/frame.png";
import Framer from '../assets/frame.png';
import ImgMain from '../assets/img.jpeg';
import ImgColeira from '../assets/coleiras.jpeg';
import ImgBrinquedos from '../assets/Brinquedos.jpeg';
import ImgCama from '../assets/cama.jpeg';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Clock, PawPrint, Bone, Dog } from 'lucide-react';

const Home = () => {
  const texts = [
    "Melhore a vida do seu pet com nossos acessórios premium.",
    "Conforto e estilo para o seu animal de estimação.",
    "Produtos de alta qualidade para o bem-estar do seu pet.",
  ];

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
          <Clock className="icon bg-blue-700 text-white rounded-full p-2 self-end mb-6 mt-2" size={50} />
          <h1 className="text-4xl text-center text-black" id="content">Premium Pet <br /> Food Selection</h1>
          <p className="text-gray-600 text-center text-[1.3rem] px-2 mt-3 " id="nav">Explore our range of nutritious and high-quality meals for you pats, ensuring their health and viatlity.</p>
        </div>
        <div className="w-[20vw] h-[36vh] bg-[color:#e9f0fd] rounded-3xl p-6 flex flex-col items-center">
          <PawPrint className="icon bg-blue-700 text-white rounded-full p-2 self-end mb-6 mt-2" size={50} />
          <h1 className="text-4xl text-center text-black" id="content">Stylish Pet <br /> Acessories</h1>
          <p className="text-gray-600 text-center text-[1.3rem] px-2 mt-3 " id="nav">Discover fashionable and functional acessories to enhance your pet's confort and style</p>
        </div>
        <div className="w-[20vw] h-[36vh] bg-[color:#e9f0fd] rounded-3xl p-6 flex flex-col items-center">
          <Bone className="icon bg-blue-700 text-white rounded-full p-2 self-end mb-6 mt-2" size={50} />
          <h1 className="text-4xl text-center text-black" id="content">Pet Grooming <br /> Essentials</h1>
          <p className="text-gray-600 text-center text-[1.3rem] px-2 mt-3 " id="nav">Discover fashionable and functional acessories to enhance your pet's confort and style</p>
        </div>
        <div className="w-[20vw] h-[36vh] bg-[color:#e9f0fd] rounded-3xl p-6 flex flex-col items-center">
          <Dog className="icon bg-blue-700 text-white rounded-full p-2 self-end mb-6 mt-2" size={50} />
          <h1 className="text-4xl text-center text-black" id="content">Safe Pet Travel <br /> Gear</h1>
          <p className="text-gray-600 text-center text-[1.3rem] px-2 mt-3 " id="nav">Discover fashionable and functional acessories to enhance your pet's confort and style</p>
        </div>
      </section>
      <section className="w-full h-screen flex  gap-8 justify-center items-center bg-white text-black">
        <div className="w-[26vw] flex flex-col items-center gap-4">
          <img className="w-full h-[30vh] rounded-3xl object-cover" src={ImgColeira.src} alt="Blogs" />
          <h1 className="text-3xl" id="content">Colorful Pet Collars</h1>
          <p className="text-center w-[89%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorum nisi quas culpa praesentium sequi vel accusantium dolorem rem, maxime illo incidunt harum asperiores, enim, officiis eligendi similique iusto odio?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, earum beatae. Quam, qui exercitationem. Laudantium iusto fugit ab perspiciatis! Eaque, qui voluptatibus! Enim temporibus ullam culpa</p>
          <button className="text-semibold px-4 py-1 bg-blue-600 text-white rounded-2xl" id="nav">View Our Projects</button>
        </div>
        <div className="w-[26vw] flex flex-col items-center gap-4">
          <img className="w-full h-[30vh] rounded-3xl object-cover" src={ImgBrinquedos.src} alt="Blogs" />
          <h1 className="text-3xl" id="content">Interactive Toy Development</h1>
          <p className="text-center w-[89%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorum nisi quas culpa praesentium sequi vel accusantium dolorem rem, maxime illo incidunt harum asperiores, enim, officiis eligendi similique iusto odio?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, earum beatae. Quam, qui exercitationem. Laudantium iusto fugit ab perspiciatis! Eaque, qui voluptatibus! Enim temporibus ullam culpa</p>
          <button className="text-semibold px-4 py-1 bg-blue-600 text-white rounded-2xl" id="nav">View Our Projects</button>
        </div>
        <div className="w-[26vw] flex flex-col items-center gap-4">
          <img className="w-full h-[32vh] rounded-3xl object-cover" src={ImgCama.src} alt="Blogs" />
          <h1 className="text-3xl" id="content">Eco-Friendly Bedding Solutions</h1>
          <p className="text-center w-[89%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorum nisi quas culpa praesentium sequi vel accusantium dolorem rem, maxime illo incidunt harum asperiores, enim, officiis eligendi similique iusto odio?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, earum beatae. Quam, qui exercitationem. Laudantium iusto fugit ab perspiciatis! Eaque, qui voluptatibus! Enim temporibus ullam culpa</p>
          <button className="text-semibold px-4 py-1 bg-blue-600 text-white rounded-2xl" id="nav">View Our Projects</button>
        </div>
      </section>
      <section className="w-full h-screen bg-white text-black">
        <div className="flex flex-col items-center justify-center h-full">
          <Carousel className="w-full max-w-2xl">
            <CarouselContent>
              <CarouselItem>
                <div className="flex flex-col gap-8 text-center ">
                  <p className="text-blue-600 text-[1rem]">Paw-sitive Reviews</p>
                  <h2 className="text-[2rem]">I love shopping at PetMimos! Their selection of pet products is unmatched in Petrolina, and the staff is incrediblly knowledgeable. My cat adores all the new toys I find there, and their prices fit my budget perfectly.</h2>
                  <p className="text-[1.5rem]">- Marcos</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="text-center">
                  <p className="text-blue-600 text-[1rem]">Outro texto pequeno com 1rem e cor azul</p>
                  <h2 className="text-[4rem]">PetMimos is amazing</h2>
                  <p className="text-[1.5rem]">- João</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="text-center">
                  <p className="text-blue-600 text-[1rem]">Mais um texto pequeno com 1rem e cor azul</p>
                  <h2 className="text-[4rem]">Best pet store ever</h2>
                  <p className="text-[1.5rem]">- Ana</p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <section className="w-full h-1/2">
        <img className="absolute z-0 w-full h-[70rem]" src={Framer.src} alt="" />
        <div className="w-full h-screen flex flex-col justify-center items-center gap-7">
          <h1 className="text-white relative text-7xl z-10 text-center" id="content">Discover Premium Pet Supplies <br></br> Today</h1>
          <p className="z-10 text-white w-[35rem] text-[1.4rem] text-center" id="content">Exxplore our wide range of high-quality products, designed to keep your pets happy  and healthy. Visit PETMIMOS for all your pet's needs in Petrolina, PE</p>
          <button className="text-black bg-white px-4 py-2 z-10 rounded-3xl">Shop Now</button>
        </div>
      </section>
      <section className="w-full h-[35rem] bg-[color:#46494e]"></section>
    </>
  );
};

export default Home;