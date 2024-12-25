import React from "react";

type CheckboxGroupProps = {
  title: string;
  options: any[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>, option: any) => void;
};

export const CheckboxGroup = ({
  title,
  options,
  onChange,
}: CheckboxGroupProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-xl text-blue-secondary">{title}</h3>
      <div className="space-y-3">
        {options.map((option, index) => (
          <label
            key={index}
            className="flex items-center text-lg font-normal text-black-text"
          >
            <input
              type="checkbox"
              className="w-5 h-5 border-2 border-gray ml-4 mr-3"
              value={option.value || option.name}
              onChange={(e) => onChange(e, option)}
            />
            <span>
              {option.name} {option.type}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
