const PriceCard = () => {
  const datas = [
    {
      id: 1,
      price: 74,
      name: "Community Members",
    },
    {
      id: 2,
      price: 128,
      name: "Podcast Subscribers",
    },
    {
      id: 1,
      price: 59,
      name: "Daily Listeners",
    },
  ];
  return (
    <div className="flex gap-x-5 mx-140 absolute -bottom-32">
      {datas.map((data) => {
        return (
          <div
            className="py-[59px] w-[373px] border-[1.5px] border-black shadow-[6px_6px_0_0_#CD4631] rounded-lg bg-white"
            key={data.id}
          >
            <div className="flex flex-col items-center gap-y-5">
              <h3 className="text-15 font-bold">
                <span className="text-secondary">{data.price}</span>K
              </h3>
              <p className="font-medium text-base">{data.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PriceCard;
