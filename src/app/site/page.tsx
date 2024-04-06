import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="h-full w-full relative flex items-center flex-col bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"/>
        <p className="text-center pt-40">Run your agency, in one place</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-6xl font-bold text-center md:text-[200px]">Startup</h1>
        </div>
        <div className="flex justify-center items-center relative">
          <Image 
            src={'/assets/preview.png'}
            alt="banner image"
            height={1200}
            width={1200}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
        </div>
      </section>
    </>
  );
}
