import React, { useState } from "react";

export default function IconButton({ iconChecked, iconUnchecked, onChange }) {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
    checked ? onChange(false) : onChange(true);
  };

  return (
    <a href="https://facebook.com" onClick={handleChecked}>
      {checked ? iconChecked : iconUnchecked}
    </a>
  );
}
