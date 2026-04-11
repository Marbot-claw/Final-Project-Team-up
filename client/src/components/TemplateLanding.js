import styles from "../style";
import nogs from "../assets/nogs.png";

const TemplateLanding = () => (
	<section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
		<div
			className={`flex-1 ${styles.flexStart} flex-col xl:px-16 xl:py-10 sm:px-16 px-6`}>
			<div className="flex flex-row justify-between items-center w-full ">
				<h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] animate-fade-in-left">
					<span className="text-gradient">TEAM</span>{" "}
					<span className="animate-text-glow inline-block">UP</span>
				</h1>
			</div>

			<p className={`${styles.paragraph} max-w-[470px] mt-5 animate-fade-in-left delay-200`}>
				Find the best personalized teammates and never play alone again!
			</p>

			<div className="mt-8 animate-fade-in-up delay-400">
				<a
					href="/login"
					className="btn-animated bg-[#D7385E] text-white font-poppins font-semibold px-8 py-3 rounded-lg inline-block transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D7385E]/30"
				>
					Get Started
				</a>
			</div>
		</div>

		<div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
			<img
				src={nogs}
				alt="gambarapaaja"
				className="w-[100%] h-[100%] relative z-[5] animate-float"
			/>

			{/* Animated gradient blobs */}
			<div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient animate-float-slow"></div>
			<div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient animate-float"></div>
			<div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient animate-float-slow"></div>
		</div>
	</section>
);

export default TemplateLanding;
