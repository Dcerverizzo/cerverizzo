import Nav from './components/Nav';
import About from './components/About';
import RecentPosts from './components/RecentPosts';
import Follow from './components/Follow';

export default function Home() {

  return (
    <div className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
      {/* Nav */}
      <Nav />
      {/* Section container */}
      <section>
        {/* Daniel Information */}
        <About />
        {/* Blog posts */}
        <RecentPosts />
        {/* Follow me */}
        <Follow />
      </section>
    </div>
  );
}

