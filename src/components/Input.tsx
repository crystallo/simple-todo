import { InputHTMLAttributes, forwardRef } from "react";

export default forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(function Input({ className, ...rest }, ref) {
  return (
    <input
      {...rest}
      ref={ref}
      className="w-full px-3 py-2 text-sm transition duration-300 bg-white border border-white rounded-full outline-none grow backdrop-blur bg-opacity-80 focus:border focus:border-slate-300 focus:shadow-sm"
    />
  );
});
