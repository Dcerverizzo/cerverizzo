import React from 'react'
import PostPreview from "../components/PostPreview";
import getPostMetadata from "../components/getPostMetadata";
// import { useTheme } from '../../context/ThemeContext';


export default function blog() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  const { isDarkMode } = false; //useTheme();

  const styles = {
    backgroundColor: isDarkMode ? 'bg-black' : 'bg-white',
    colorMain: isDarkMode ? 'text-white' : 'text-black-800',
    colorSecundary: isDarkMode ? 'text-white' : 'text-gray-400',
  };

  return (
    <div className={`${styles.backgroundColor} p-10`} id='blog'>
      <div className='text-left p-10 mt-10'>
        <span className={`text-4xl font-bold text-black-500 block ${styles.colorMain}`}>Lastest News</span>
      </div>

      <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-800 dark:text-gray-100">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 sm:grid-cols-4">
          {postPreviews}
        </div>
      </div>
      <hr className='border-black-600 mt-20'></hr>
    </div>
  )
}
