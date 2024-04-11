import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useAppContext } from "./AppContext";

export default function Example() {
  const [enabled, setEnabled] = useState(true);
  const { setLang } = useAppContext();

  const handleChange = () => {
    const lang = enabled ? "ru" : "en";
    setLang(lang);
    localStorage.setItem("lang", lang);
    setEnabled(!enabled);
  };

  return (
    <div className="py-6">
      <Switch
        checked={enabled}
        onChange={handleChange}
        style={{ borderColor: "rgb(209 213 219) " }}
        className="bg-[#0a192f] border-gray-300 relative flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75"
      >
        <span className="sr-only">Use setting</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white font-medium">
          en
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-white font-medium">
          ru
        </span>
        <span
          aria-hidden="true"
          className={`${
            enabled ? "translate-x-9" : "translate-x-0"
          } pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-gray-300 shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
