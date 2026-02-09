"use client";

import { useState } from "react";
import SearchIcon from "./SearchIcon";
import dynamic from 'next/dynamic';


const SearchModal = dynamic(() => import("../components/modals/SearchModal"), {
  ssr: false, 
  loading: () => null 
});

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
