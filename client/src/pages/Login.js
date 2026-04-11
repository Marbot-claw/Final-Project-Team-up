import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/actions/action";
import logo from "../assets/teamupnologo.png";

export default function Login() {
	const dispatch = useDispatch();
	const navigation = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const [loginForm, setLoginForm] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		let { name, value } = e.target;

		setLoginForm({
			...loginForm,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		dispatch(login(loginForm))
			.then(() => {
				console.log("welcome, username");
				navigation("/home");
			})
			.catch((err) => console.log(err))
			.finally(() => setIsLoading(false));
	};

	return (
		<div className="flex w-full min-h-screen justify-center items-center font-poppins bg-primary">
			<div className="flex justify-center flex-col px-8 pt-8 pb-10 w-80 h-content shadow-2xl shadow-black/50 bg-[#2A302F] max-w-sm rounded-xl animate-bounce-in border border-white/5">
				<form onSubmit={handleSubmit}>
					<div className="flex justify-center font-bold text-2xl mb-5">
						<img
							src={logo}
							className="h-auto w-40 hover:cursor-pointer transition-transform duration-300 hover:scale-110"
							onClick={() => navigation("/")}
						/>
					</div>
					<div className="relative form-group mb-6">
						<label className="absolute left-3 -top-2 px-2 rounded-sm bg-[#D7385E] form-label inline-block text-xs mb-2 uppercase text-white">
							EMAIL ADDRESS
						</label>
						<input
							type="email"
							name="email"
							value={loginForm.email}
							onChange={handleChange}
							className="form-control block w-full px-3 py-2.5 text-sm text-gray-900 bg-white bg-clip-padding border border-solid border-gray-300 rounded-sm input-animated"
							placeholder="Enter your email"
						/>
					</div>
					<div className="relative form-group mb-6">
						<label className="absolute left-3 -top-2 px-2 rounded-sm bg-[#D7385E] form-label inline-block text-xs mb-2 uppercase text-white">
							PASSWORD
						</label>
						<input
							type="password"
							name="password"
							value={loginForm.password}
							onChange={handleChange}
							className="form-control block w-full px-3 py-2.5 bg-white bg-clip-padding text-slate-900 border border-solid border-gray-300 rounded-sm input-animated"
							placeholder="Enter your password"
						/>
					</div>
					<div className="flex flex-col justify-center gap-2">
						<button
							type="submit"
							disabled={isLoading}
							className="btn btn-wide bg-[#D7385E] text-slate-200 rounded-sm btn-animated disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:shadow-[#D7385E]/30"
						>
							{isLoading ? (
								<span className="flex items-center gap-2">
									<span className="loading-spinner w-4 h-4 border-2"></span>
									Logging in...
								</span>
							) : (
								"LOGIN"
							)}
						</button>
						<p className="mt-2 text-xs text-center">
							{" "}
							Don't have an account?{" "}
							<Link to="/register" className="text-[#D7385E] hover:underline transition-all duration-300">
								<u>Sign up now.</u>
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
}
