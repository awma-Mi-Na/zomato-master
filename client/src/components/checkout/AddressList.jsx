import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

export default function AddressList(props) {
  const [selected, setSelected] = useState(props.address[0]);

  return (
    <div className="w-full py-4">
      <div className="w-full max-w-md mx-auto">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {props.address.map((plan) => (
              <RadioGroup.Option
                key={plan.for}
                value={plan.for}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-offset-2 ring-offset-zmtcolor-300 ring-white ring-opacity-60"
                      : ""
                  }
                  ${
                    checked
                      ? "bg-zmtcolor-100 bg-opacity-75 text-white"
                      : "bg-white"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-zmtcolor-800" : "text-gray-900"
                            }`}
                          >
                            {plan.for}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-zmtcolor-600" : "text-gray-500"
                            }`}
                          >
                            <address>{plan.detail}</address>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-black">
                          <CheckIcon className="w-6 h-6 " />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="black"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
