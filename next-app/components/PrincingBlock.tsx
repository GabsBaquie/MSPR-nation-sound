import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";

// components/PricingBlock.tsx
const PricingBlock = ({ data }: { data: any }) => {
  const plans = data.plan || [];

  return (
    <section>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <ul>
        {plans.map(
          (
            plan: {
              name:
                | string
                | number
                | bigint
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | Promise<AwaitedReactNode>
                | null
                | undefined;
              price: number;
            },
            index: Key | null | undefined
          ) => (
            <li key={index}>
              <h3>{plan.name}</h3>
              <p>Price: ${plan.price.toFixed(2)}</p>
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default PricingBlock;
