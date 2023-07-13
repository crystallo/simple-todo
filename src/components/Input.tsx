import { InputHTMLAttributes, forwardRef } from "react";
import cn from "classnames";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...rest }, ref) => {
  return (
    <input
      {...rest}
      ref={ref}
      className={cn(
        "w-full px-3 py-2 text-sm transition duration-300 border border-white rounded-full outline-none bg-white/80 grow backdrop-blur focus:border focus:border-slate-400 focus:shadow-sm hover:border hover:border-slate-300 hover:shadow-sm",
        className
      )}
    />
  );
});

export default Input;
