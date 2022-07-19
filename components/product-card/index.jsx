import Image from "next/image";
export default function ProductCard(props) {
    return (
      <div className="grid grid-cols-2 rounded-3xl w-60 shadow-2xl">
        <div className="col-span-1 py-7 px-6 flex-row">
          <h3 className="">{props.title}</h3>
          <p className="mt-6 font-extrabold">${props.price}</p>
        </div>
        <div className="col-span-1 overflow-clip">
          <div className="relative w-full h-full flex left-4 top-5 place-items-center">
            <Image
              src={props.image}
              alt={props.title}
              layout="fill"
              className=" rotate-12 transform scale-125  "
              objectFit={"contain"}
            />
          </div>
        </div>
      </div>
    );
}