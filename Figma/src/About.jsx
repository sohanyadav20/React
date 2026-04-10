import "./About.css";
export default function About() {
  return (
    <div className="about">
      <span>
        <h2>SOHAN KUMAR YADAV</h2>
        <p>
          My name is Sohan Kumar Yadav. I live in Village - Bihara,
          <br /> Post - Kachhawa Road, District - Varanasi.
          <br />
          I have a strong interest in learning new things and improving
          <br /> my knowledge. I am hardworking and focused on achieving my
          <br /> goals. My aim is to succeed in my field and contribute
          positively <br />
          to society.
        </p>
      </span>
      <img src="./photo.jpg"></img>
      <div>
        <a
          href="https://www.linkedin.com/in/sohan-kumar-yadav-1bb457255/"
          target="_blank"
        >
          {" "}
          <button>Let's Get Started </button>
        </a>
      </div>
    </div>
  );
}
