import { useState } from "react";
import ModalPremium from "../pages/ModalPremium";

export default function PremiumCard() {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);

	return (
		<div className="flex flex-col items-center justify-center bg-[#262525] shadow-md shadow-black rounded-sm p-6 animate-fade-in-up border border-white/5 transition-all duration-300 hover:border-[#D7385E]/30 hover:shadow-lg hover:shadow-[#D7385E]/10">
			<p className="text-lg mt-3 mx-3 text-center">
				Be a premium member to form a group!
			</p>
			<label
				htmlFor="modal-premium"
				className="btn mb-3 rounded-full bg-[#D7385E] text-slate-200 btn-animated animate-pulse-glow mt-4 transition-transform duration-300 hover:scale-105"
				onClick={handleShow}
			>
				Go Premium
			</label>
			<ModalPremium />
		</div>
	);
}
