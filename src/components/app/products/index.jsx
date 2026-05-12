import BaseCard from "../../base/card/index";

const Products = () => {
  const dataSource = [
    {
      id: 0,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
  ];
  return (
    <div className="container flex flex-column">
      <span className="text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eligendi
        beatae, voluptate amet quod esse corrupti odio id debitis quaerat
        architecto fugit praesentium laudantium obcaecati? Accusamus iure quis
        doloribus ullam.
      </p>
      {dataSource.map((item) => {
        return (
          <div className="mt-10">
            <BaseCard>
              <span className="text-primary">{item.title}</span>
              <p>{item.text}</p>
            </BaseCard>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
