import Image from 'next/image';

export default function ImageGallery() {
  const images = [
    '/images/speaking_1.jpeg',
    '/images/sistemasbr_speaking.jpg',
    '/images/myself.JPG',
    '/images/didactica_team.jpg',
    '/images/meet.jpg',
    '/images/graduation.jpeg',
  ];

    return (
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Me speaking on stage at Rotary conference"
            src="/images/speaking_1.jpeg" // Substitua pelo caminho da sua imagem
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Me and the SistemasBR team"
            src="/images/sistemasbr_speaking.jpg" // Substitua pelo caminho da sua imagem
            layout="fill"
            objectFit="cover"
            className="rounded-lg object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Me speaking about Front End World"
            src="/images/myself.JPG" // Substitua pelo caminho da sua imagem
            layout="fill"
            objectFit="cover"
            className="rounded-lg object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Me and the Didactica tech team"
            src="/images/didactica_team.jpg" // Substitua pelo caminho da sua imagem
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me and Cobre Facil team celebrating"
            src="/images/meet.jpg" // Substitua pelo caminho da sua imagem
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="Me standing on graduation day in college"
            src="/images/graduation.jpeg" // Substitua pelo caminho da sua imagem
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    );
  }

