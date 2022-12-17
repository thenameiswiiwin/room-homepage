import { AboutInfo } from '../../data/data';

const About = () => {
  return (
    <div>
      <section>
        <img src={AboutInfo.imgDark} alt="dark furniture" className="w-full" />
      </section>
      <section className="space-y-about px-8 pt-about-top pb-about-bottom">
        <h2 className="uppercase">{AboutInfo.title}</h2>
        <p>{AboutInfo.description}</p>
      </section>
      <section>
        <img
          src={AboutInfo.imgLight}
          alt="light furniture"
          className="w-full"
        />
      </section>
    </div>
  );
};

export default About;
