import { logo } from "../constants/Logo";

const Support = () => {
  const datas = [
    {
      logo: logo.Spotify,
    },
    {
      logo: logo.GooglePodcast,
    },
    {
      logo: logo.Youtube,
    },
  ];
  return (
    <div className="mx-140 border-y border-black">
      <div className="flex items-center justify-between py-5">
        <p className="text-23 font-bold">Support by:</p>
        <div className="flex items-center">
          {datas.map((data, id) => {
            return (
              <div className="px-[78px] py-5" key={id}>
                <img src={data.logo} alt="logo-brand" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Support;
