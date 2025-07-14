"use client";

import cx from "clsx";
import parser from "html-react-parser";
import type { ForwardedRef, InputHTMLAttributes } from "react";
import { forwardRef, useState } from "react";

import css from "./index.module.css";

type CheckboxProps = {
  label?: string;
  indeterminate?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

const Checkbox = forwardRef(
  (
    { label, className = "", indeterminate = false, ...props }: CheckboxProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isChecked, setIsChecked] = useState(
      props.checked || props.defaultChecked || false
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (props.onChange) {
        props.onChange(e);
      }
      if (props.checked === undefined) {
        setIsChecked(e.target.checked);
      }
    };

    return (
      <label className={cx(css.root, className)}>
        <input
          data-checkbox-item="checkbox"
          ref={(el) => {
            if (el && typeof ref === "function") {
              ref(el);
            } else if (ref && typeof ref === "object") {
              if (ref) ref.current = el;
            }

            if (el) {
              el.indeterminate = indeterminate;
            }
          }}
          type="checkbox"
          className={css.checkbox}
          checked={props.checked !== undefined ? props.checked : isChecked}
          onChange={handleChange}
          {...props}
        />
        {label && (
          <span className={css.label} data-checkbox-item="label-text">
            {parser(label)}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
