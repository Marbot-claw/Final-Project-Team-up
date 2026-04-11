import styles, { layout } from "../style";

function Features() {
	const features = [
		{
			title: "Smart Matchmaking",
			desc: "Find match with our matchmaking system. Get paired with players who match your skill level and playstyle.",
			icon: "🎯",
		},
		{
			title: "Real-time Communication",
			desc: "Communicate with your team via chat, voice call*, or even video call*! Never miss a callout again.",
			icon: "💬",
		},
		{
			title: "Share Your Moments",
			desc: "Share your best gaming moments in a post. Build your gaming identity and connect with the community.",
			icon: "📸",
		},
	];

	return (
		<section id="" className={layout.section}>
			<div className={layout.sectionInfo}>
				<h2 className={`${styles.heading2} animate-fade-in-left`}>
					HIGHLIGHT <span className="text-gradient">FEATURES</span>
				</h2>
			</div>

			<div className={`${layout.sectionImg} flex-col gap-6`}>
				{features.map((feature, index) => (
					<div
						key={index}
						className={`feature-card p-5 rounded-xl border border-white/10 transition-all duration-300 hover:border-[#D7385E]/50 hover:shadow-lg hover:shadow-[#D7385E]/10 animate-fade-in-right`
						}
						style={{ animationDelay: `${index * 0.15}s` }}
					>
						<div className="flex items-start gap-4">
							<span className="text-3xl">{feature.icon}</span>
							<div>
								<h3 className="font-poppins font-semibold text-white text-lg mb-1">
									{feature.title}
								</h3>
								<p className={`${styles.paragraph} text-sm`}>
									{feature.desc}
								</p>
							</div>
						</div>
					</div>
				))}
				<p className="font-poppins text-xs mt-2 text-slate-400 animate-fade-in-up delay-500">
					<sup>*</sup> You can only make group & initiate a 1-on-1 call on
					premium subscription.
				</p>
			</div>
		</section>
	);
}

export default Features;
