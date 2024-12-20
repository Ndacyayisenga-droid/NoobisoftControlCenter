import { NftMeta } from "../types";
import { getUser } from "../utils";

const Card = ({ nft, card }: { nft: NftMeta; card: string }) => {
  const {
    name,
    image: src,
    properties: { game },
  } = nft;

  if (name === "card") return;
  return (
    <div className=" flex justify-center items-center">
      <div
        style={{ width: "300px" }}
        className=" relative flex justify-center items-center"
      >
        <img src={card} alt="Card" />
        <img
          src={src}
          alt="Monster"
          className="absolute max-w-[50%] max-h-[50%] object-cover"
        />
        <div
          style={{ right: "25px", top: "25px" }}
          className="absolute flex flex-col items-end text-white"
        >
          <h2
            style={{ fontSize: "12px", marginTop: "-10px" }}
            className="font-bold font-bebas"
          >
            Game: {game}
          </h2>
          <h2 style={{ fontSize: "30px" }} className="font-bold font-bebas">
            {name}
          </h2>
          <span className="text-sm">{getUser()}</span>
        </div>
        <div className="absolute left-6 bottom-6 flex justify-center text-white">
          <p
            style={{
              fontSize: "40px",
            }}
            className="text-lg font-bold font-bebas text-red-50"
          >
            {game.toLocaleLowerCase() === "tokemon" ? "#TKMN" : "#NFT"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
