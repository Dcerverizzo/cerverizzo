import Link from 'next/link';
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {

  if (!props) {
    return null;
  }
  
  return (
    <div>
      <Link href={`/posts/${props.slug}`}>
        <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500 hover:bg-slate-100" style={{ backgroundImage: "url('/images/blog.jpg')" }}>
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a rel="noopener noreferrer" className="px-3 py-2 text-xs font-semibold tracki mt-10 uppercase dark:text-gray-100 bgundefined">{props.title}</a>
            <div className="flex flex-col justify-start text-center dark:text-gray-100">
              <span className="text-3xl font-semibold leadi tracki">{props.day}</span>
              <span className="leadi uppercase">{props.month}</span>
            </div>
          </div>
          <h2 className="z-10 p-5">
            <a rel="noopener noreferrer" className="font-medium text-md hover:underline dark:text-gray-100">{props.subtitle}</a>
          </h2>
        </div>
      </Link>
    </div >
  );
};

export default PostPreview;
