import React, { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";

type Props = {
  from: "left" | "right" | "top" | "bottom";
};

export const TranslateTransition: React.FC<Props> = ({ children, from }) => {
  const [direction, setDirection] = useState(null);
  const defaultDirections = () => {
    switch (from) {
      case "right":
        return `enter="transition ease-out duration-200 transform"
      enterFrom="opacity-0 translate-x-2"
      enterTo="opacity-100 translate-x-0"
      leave="transition ease-out duration-200 transform"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo="opacity-0 translate-x-2"`;
    }
  };
  return (
    <Transition
      as={Fragment}
      {...direction}
      enter="transition ease-out duration-200 transform"
      enterFrom="opacity-0 -translate-x-2"
      enterTo="opacity-100 translate-x-0"
      leave="transition ease-out duration-200 transform"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo="opacity-0 -translate-x-2"
    >
      {children}
    </Transition>
  );
};
