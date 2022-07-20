import Image from "next/image";
export default function ProductCard(props) {
    return (
      <div className="grid grid-cols-2 rounded-3xl w-60 shadow-2xl bg-themeWhite my-10">
        <div className="col-span-1 py-7 px-6 flex-row">
          <h3 className="">{props.title}</h3>
          <p className="mt-6 font-extrabold">${props.price}</p>
        </div>
        <div className="col-span-1 overflow-clip">
          <div className="relative w-full h-full left-4 flex place-items-center overflow-clip ">
            <Image
              src={props.image}
              alt={props.title}
              width={120}
              height={120}
              className=" rotate-12"
              objectFit={"contain"}
            />
          </div>
        </div>
      </div>
    );
}