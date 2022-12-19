import { AboutInfo } from '../../data/data';

const About = () => {
  return (
    <div className="lg:grid lg:grid-cols-10">
      <section className="lg:col-span-3">
        <img
          src={AboutInfo.imgDark}
          alt="dark furniture"
          className="h-full w-full object-cover"
        />
      </section>
      <section className="space-y-about px-8 pt-about-top pb-about-bottom lg:col-span-4 lg:mx-auto lg:px-[48px] lg:pt-[68px] lg:pb-[58px]">
        <h2 className="uppercase">{AboutInfo.title}</h2>
        <p>{AboutInfo.description}</p>
      </section>
      <section className="lg:col-span-3">
        <img
          src={AboutInfo.imgLight}
          alt="light furniture"
          className="h-full w-full"
        />
      </section>
    </div>
  );
};

export default About;
