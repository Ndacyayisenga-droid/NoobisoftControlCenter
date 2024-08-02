import skateboard from "../assets/new-board.png";

const Skateboard = ({ name, src }: { name: string; src: string }) => {
  return (
    <div className=" flex justify-center items-center">
      <div style={{ maxWidth: "428px" }} className="relative">
        <img src={skateboard} alt="skateboard" className="w-full h-auto" />

        <div className="absolute top-[40%] left-[18%]">
          <img src={src} alt="Monster" className="w-16 h-auto" />
        </div>
        <div className="absolute top-[30%] left-[20%] text-black text-2xl font-bold  font-bebas">
          #TKMN
        </div>
        <div className="absolute bottom-[42%] left-[18%] text-black text-sm">
          USER XXX
        </div>

        <div className="absolute top-[40%] left-[60%]">
          <img src={src} alt="Monster" className="w-16 h-auto" />
        </div>
        <div className="absolute bottom-[42%] right-[22%] text-black text-2xl font-bold font-bebas">
          {name}
        </div>
      </div>
    </div>
  );
};

export default Skateboard;