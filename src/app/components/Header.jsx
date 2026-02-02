"use client";

import { useState } from "react";
import SearchIcon from "./SearchIcon";
import SearchModal from "../components/modals/SearchModal";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-6">
    

        <nav className="flex items-center gap-4">
          {/* diğer menüler */}
          <SearchIcon onClick={() => setOpen(true)} />
        </nav>
      </header>

      <SearchModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
