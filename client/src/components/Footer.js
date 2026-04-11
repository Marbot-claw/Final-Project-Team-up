import styles from "../style";
import teamupnologo from "../assets/teamupnologo.png";

const Footer = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} xl:px-5 flex-col animate-fade-in-up`}
    >
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={teamupnologo}
            alt="teamup"
            className="w-[250px] h-100% object-contain transition-transform duration-300 hover:scale-105"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            Brought to you by gamers, for gamers.
          </p>
        </div>

        <div className="flex-1 flex flex-col md:items-end mt-6 md:mt-0">
          <h4 className="font-poppins font-semibold text-white text-lg mb-4">
            Quick Links
          </h4>
          <div className="flex flex-col gap-2">
            <a
              href="/"
              className="font-poppins text-dimWhite text-sm transition-all duration-300 hover:text-[#D7385E] hover:translate-x-1"
            >
              Home
            </a>
            <a
              href="/login"
              className="font-poppins text-dimWhite text-sm transition-all duration-300 hover:text-[#D7385E] hover:translate-x-1"
            >
              Login
            </a>
            <a
              href="/register"
              className="font-poppins text-dimWhite text-sm transition-all duration-300 hover:text-[#D7385E] hover:translate-x-1"
            >
              Register
            </a>
          </div>
        </div>
      </div>

      {/* copyright text */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          {new Date().getFullYear()} Jakarta. All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
