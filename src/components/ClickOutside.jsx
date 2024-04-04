import { useState } from "react";
import useClickOutside from "../hooks/use-click-outside";

function ClickOutside() {
  const [open, setOpen] = useState(false);
  const ref = useClickOutside(() => setOpen(false));
  return (
    <div>
      <button onClick={() => setOpen(true)}>Modalı aç</button>

      {open && <div ref={ref}>Close this when click the outside area</div>}
    </div>
  );
}

export default ClickOutside;
