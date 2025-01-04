import Image from "next/image";

export default function page() {
  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">

      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        HAPPY NEW YEAR! New Years Eve: Regular Hours | New Years Day: 11AM-7PM (Sales Only)
        </h1>

      {/* Featured Image */}
      <div className="flex justify-center">
        <Image
          src={"/car-01.jpeg"}
          width={500}
          height={500}
          alt="car-image"
          className="rounded"
        />
      </div>

      {/* Blog Summary Section */}
      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
          Summary
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
          Buying a car is a significant decision, and It&apos;s essential to consider factors like your budget, the car's fuel efficiency, maintenance costs, and resale value. Decide whether you need a new or used car based on your needs. Research the features, reliability, and reviews of the models you are considering. A thorough test drive and inspection are crucial before finalizing the purchase.
        </p>
      </section>

      {/* Author Section (Image & Bio) */}
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        <Image
          src={"/logo.jpeg"}
          width={200}
          height={200}
          alt="author"
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-dark dark:text-light">Ubaid ur rahman</h3>
          <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
            Experienced Web Developer | Expert in WordPress Nextjs Reactjs Nodejs Typescript JavaScript
            GitHub Sanity Tailwind CSS | Participant in GIAIC
          </p>
        </div>
      </section>

      {/* Main Body of Blog */}
      <p className="text-lg leading-normal text-dark/80 dark:text-light/80">
        Cars have transformed transportation since their invention, evolving from basic combustion engines to modern electric vehicles. Today, cars offer advanced safety features, fuel efficiency, and luxury. The shift toward electric and autonomous vehicles highlights the industry's focus on sustainability and innovation. Cars are no longer just a mode of transport; they represent technology, convenience, and style.

      </p>
    </article>
  );
}