import Image from 'next/image';
import { ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode, JSX } from 'react';

export default function ImageGallery() {

  const images = [
    {
      name: "speaking_1",
      src: '/images/speaking_1.jpeg',
      alt: "Man speaking on stage at Rotary conference",
      classDiv: "relative h-40 mb-4",
      classImage: "rounded-lg"
    },
    {
      name: "sistemasbr_speaking",
      src: '/images/sistemasbr_speaking.jpg',
      alt: "Me standing with the SistemasBR team",
      classDiv: "relative h-80 mb-4 sm:mb-4",
      classImage: "relative rounded-lg object-[-16px] sm:object-center"
    },
    {
      name: "myself",
      src: '/images/myself.JPG',
      alt: "Me speaking about Front End World",
      classDiv: "relative h-80 mb-4",
      classImage: "rounded-lg object-top sm:object-center"
    },
    {
      name: "didactica_team",
      src: '/images/didactica_team.jpg',
      alt: "Me and the Didactica tech team",
      classDiv: "relative h-40 mb-4 sm:mb-4",
      classImage: "rounded-lg object-[-16px] sm:object-center"
    },
    {
      name: "meet",
      src: '/images/meet.jpg',
      alt: "Me and Cobre Facil team celebrating new goals",
      classDiv: "relative h-40 mb-4",
      classImage: "rounded-lg"
    },
    {
      name: "graduation",
      src: '/images/graduation.jpeg',
      alt: "Me standing on graduation day in college",
      classDiv: "relative h-80",
      classImage: "rounded-lg"
    },
  ];

  return (
    <div className="columns-3 gap-4 my-8">
      {images.map((item) => (
        <div key={item.name} className={`relative ${item.classDiv}`}>
        <Image
          loading="eager"
          alt={item.alt}
          src={item.src}
          fill
          style={{ objectFit: 'cover' }}
          className={`rounded-lg ${item.classImage}`}
        />
        </div>
      ))}
    </div>
  );
}

