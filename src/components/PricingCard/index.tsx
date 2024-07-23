import React from "react";
import ButtonBlack160 from "../Button/ButtonBlack160";

const PricingCard: React.FC = () => {
  const datas = [
    {
      title: "Member",
      price: 9.99,
      items: [
        {
          id: 1,
          name: "Exclusive Content",
        },
        {
          id: 2,
          name: "5% Discount on Merch",
        },
        {
          id: 3,
          name: "Join the Community",
        },
        {
          id: 4,
          name: "Livestreaming Access",
        },
        {
          id: 5,
          name: "Free Stikers and Merch",
        },
      ],
    },
    {
      title: "Family",
      price: 14.99,
      items: [
        {
          id: 1,
          name: "Everything in Tier 1",
        },
        {
          id: 2,
          name: "Free tickets to Events",
        },
        {
          id: 3,
          name: "Limited Edition Merch",
        },
        {
          id: 4,
          name: "Promote your Product",
        },
        {
          id: 5,
          name: "Request Topic",
        },
      ],
    },
    {
      title: "Official",
      price: 29.99,
      items: [
        {
          id: 1,
          name: "Everything in Tier 2",
        },
        {
          id: 2,
          name: "Exclusive Badge on Livestreaming",
        },
        {
          id: 3,
          name: "Become an Official Sponsor",
        },
        {
          id: 4,
          name: "Early Access to All Episodes",
        },
        {
          id: 5,
          name: "Free Stikers and Merch",
        },
      ],
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-5 bg-white rounded-lg">
      {datas.map((data, id) => {
        return (
          <div className="flex flex-col gap-y-5 centers" key={id}>
            <div className="px-10 pt-15 pb-30 border border-black rounded-lg">
              <div className="flex flex-col gap-y-90 ">
                <div className="flex flex-col gap-y-5">
                  <h3 className="font-bold text-37">{data.title}</h3>
                  <p className="text-sm font-medium">
                    Lorem ipsum dolor sit amet consectet cing elit, sed do
                    eiusmod tempor.
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <ButtonBlack160>Subscribe</ButtonBlack160>
                  <div>
                    <h4 className="font-bold text-23 text-secondary">
                      ${data.price}
                    </h4>
                    <p className="font-bold text-sm">/month</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 grid gap-y-5 border border-black rounded-lg">
              <h4 className="font-bold text-sm">What's Included:</h4>

              <div className="grid gap-ten">
                {data.items.map((item) => {
                  return (
                    <p className="font-medium text-sm" key={item.id}>
                      - {item.name}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PricingCard;
