import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GamesCard = ({ game, gif, index }) => {
  const navigation = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full md:w-[240px] lg:w-[400px] inline-block cursor-pointer relative my-3 mr-3 animate-scale-in"
      style={{ animationDelay: `${(index || 0) * 0.15}s` }}
      onClick={() => navigation("/login")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-3xl group">
        {/* Base image */}
        <img
          className="w-full h-auto block rounded-3xl transition-all duration-500 group-hover:scale-110"
          src={game.imgUrl}
          alt={game.name}
        />

        {/* GIF overlay on hover */}
        <img
          className={`absolute top-0 left-0 w-full h-full object-cover rounded-3xl transition-opacity duration-400 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          src={gif}
          alt={`${game.name} gameplay`}
        />

        {/* Overlay */}
        <div
          className={`absolute top-0 left-0 w-full h-full bg-black/50 rounded-3xl backdrop-blur-sm transition-opacity duration-300 flex justify-center items-center ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-xs md:text-sm font-bold text-white text-center px-4 transform transition-transform duration-300 group-hover:scale-110">
            {game.name}
          </p>
        </div>

        {/* Glow effect on hover */}
        <div
          className={`absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#D7385E]/30 to-[#33bbcf]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10`}
        ></div>
      </div>
    </div>
  );
};

export default GamesCard;
