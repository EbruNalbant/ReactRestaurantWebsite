import BannerImage from "../assets/1beef.jpg";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, vero
          nostrum, illum nulla consequatur delectus pariatur ducimus rerum eaque
          itaque molestiae suscipit excepturi sapiente obcaecati non voluptatum
          esse nemo iusto deserunt eum distinctio libero totam sint? Illum,
          perspiciatis tempore tempora maiores repellat rem voluptatem dolorum.
        </p>
      </div>
    </div>
  );
}
export default About;
