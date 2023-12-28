import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome To Dropbox
            <br />
            Storing everything for you and tour business needs. All in one place
          </h1>

          <p className="pb-20">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            ipsam omnis dolor enim. Laboriosam nihil, debitis quasi accusamus
            voluptatibus quos nobis earum, ea deleniti tempore nam soluta
            ratione fuga saepe. Sequi doloribus similique laudantium sunt
            inventore iusto aperiam voluptatem a labore nihil deserunt,
            corrupti, perferendis consequuntur pariatur quia amet provident
            necessitatibus consequatur mollitia minus, ut atque quasi assumenda?
            Neque, inventore! Necessitatibus odit incidunt, molestias ratione
            iste nemo. Ipsum reprehenderit incidunt laudantium ipsam ut nisi
            dicta, nesciunt inventore ab a quod iusto sint commodi. Eveniet,
            laudantium distinctio ut in deleniti totam!
          </p>

          <Link href={"/dashboard"} className="flex bg-blue-500 p-5 w-fit">
            Try It For Free
          </Link>
        </div>

        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
        doloribus voluptatibus perspiciatis, excepturi nobis, maxime aperiam
        aspernatur officia nisi aliquam dolorem! Vitae ipsum, tenetur magni
        doloribus aliquid sit tempora sunt.
      </p>
    </main>
  );
}
