import { ShoppingCardItem } from "./shoppingCardItem";

interface ShoppingCardProps extends React.PropsWithChildren {}

export const ShoppingCard: React.FunctionComponent<
  ShoppingCardProps
> = (): JSX.Element => {
  const shoppingCartData: any = localStorage.getItem("shoppingCart");
  let arrayFromData: any[];
  if (shoppingCartData) {
    arrayFromData = Object.entries(JSON.parse(shoppingCartData));
  } else {
    arrayFromData = [];
  }

  return (
    <section className="flex h-[calc(100vh-96px)] w-full flex-col items-center justify-center bg-light-primary dark:bg-dark-primary md:h-[calc(100vh-176px)] lg:flex-row">
      <div className="flex h-[100%] w-full flex-col items-center justify-start gap-2 overflow-y-auto p-5">
        {arrayFromData.map((item, index) => {
          return (
            <ShoppingCardItem key={index} id={+item[0] - 1} count={item[1]} />
          );
        })}
      </div>
      <div className="h-full w-96"></div>
    </section>
  );
};
