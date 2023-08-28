// CartIcon.tsx
import React from "react";
// @ts-ignore
import FeatherIcon from "feather-icons-react";

interface CartIconProps {
  count: number;
}

const CartIcon: React.FC<CartIconProps> = ({ count }) => {
  return (
    <div className="relative">
      <FeatherIcon icon="shopping-cart" className="h-6 w-6" />
      {count > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">
          {count}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
