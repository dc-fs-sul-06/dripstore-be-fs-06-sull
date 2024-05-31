
export function HighlightsSection() {
  const bgStyles = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right"
  }
  return (
    <section className="px-5 lg:px-24 ">
      <div className="flex justify-between mb-[10px] mt-[38px]">
        <h3 className=" text-dark-gray-2 font-bold">Coleções em Destaque</h3>
      </div>
      <div className="md:grid grid-cols-3 md:gap-3">
        <div className="border relative bg-[#D8E3F2] w-full my-[10px] rounded-lg p-5"
          style={{
            backgroundImage: `url('/camisa.png')`,
            ...bgStyles
          }}>
          <div className=" relative z-10 ">
            <div className="flex">
              <p className=" bg-[#E7FF86] rounded-3xl px-[15px] py-[5px] mb-[10px] text-xs font-bold">30% OFF</p>
            </div>
            <p className="mb-[10px] text-[32px] text-dark-gray font-bold leading-9">Novo Drop Supreme</p>
            <button className="bg-white z-20 text-[#C92071] px-[20px] py-[10px] rounded-md font-bold ">Comprar</button>
          </div>
        </div>
        <div className="border relative bg-[#D8E3F2] w-full my-[10px] rounded-lg p-5 "
        style={{
          backgroundImage: `url('/tenis.png')`,
          ...bgStyles
        }}>
          <div className=" relative z-10 ">
            <div className="flex">
              <p className=" bg-[#E7FF86] rounded-3xl px-[15px] py-[5px] mb-[10px] text-xs font-bold">30% OFF</p>
            </div>
            <p className="mb-[10px] text-[32px] text-dark-gray font-bold leading-9">Coleção Adidas</p>
            <button className="bg-white z-20 text-[#C92071] px-[20px] py-[10px] rounded-md font-bold ">Comprar</button>
          </div>
        </div>
        <div className="border relative bg-[#D8E3F2] w-full my-[10px] rounded-lg p-5 "
        style={{
          backgroundImage: `url('/fone.png')`,
          ...bgStyles
        }}>
          <div className=" relative z-10 ">
            <div className="flex">
              <p className=" bg-[#E7FF86] rounded-3xl px-[15px] py-[5px] mb-[10px] text-xs font-bold">30% OFF</p>
            </div>
            <p className="mb-[10px] text-[32px] text-dark-gray font-bold leading-9">Novo Beats Bass</p>
            <button className="bg-white z-20 text-[#C92071] px-[20px] py-[10px] rounded-md font-bold ">Comprar</button>
          </div>
        </div>
      </div>
    </section>
  );
}
