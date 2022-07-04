import React from "react";
import about from "../pic/about.jpg";

const About = () => {
  return (
    <section className="m-[50px] lg:max-w-full lg:max-h-full flex lg:flex-nowrap flex-wrap lg:justify-center lg:items-center">
      <div className="">
        <img
          src={about}
          alt="about"
          className=" "
        />
      </div>
      <div className="lg:p-[2rem] p-[1rem]">
        <h1 className="mb-[25px] text-[32px] lg:text-[54px]">
          Hi, I'm Alena. Portrait photographer from Moscow.
        </h1>
        <p className="lg:w-[35em] lg:mt-[25px]">
          Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut
          sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum,
          lectus in convallis pulvinar, enim elit porta sapien, vel finibus erat
          felis sed neque. Etiam aliquet neque sagittis erat tincidunt aliquam.
          Vestibulum at neque hendrerit, mollis dolor at, blandit justo. Integer
          ac interdum purus. In placerat lorem non quam pulvinar molestie ac
          eget lacus. Proin mollis lobortis porttitor. Nam in fringilla
          felis.Maecenas justo quam, pretium id sapien in, varius vehicula sem.
          Pellentesque consequat mauris justo. Aenean rhoncus tempor volutpat.
          Donec nec ligula rhoncus, vulputate purus quis, pulvinar massa. Nulla
          placerat ullamcorper molestie. Maecenas feugiat mollis egestas. Proin
          vehicula lorem non turpis varius venenatis. Maecenas dapibus hendrerit
          diam, ac auctor est dignissim ac. Suspendisse tincidunt pulvinar ex.
          Etiam aliquet venenatis ultricies. Duis dignissim blandit eros.Nunc at
          felis pellentesque leo efficitur varius. Nam dui eros, maximus vitae
          tellus nec, finibus euismod ante. Vestibulum ac ex vel nisl faucibus
          dignissim et eu justo.
        </p>
      </div>
    </section>
  );
};

export default About;
