"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { Loader2, SearchIcon } from "lucide-react";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearching, startTransition] = useTransition();
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const search = () => {
    startTransition(() => {
      router.push(`/search?query=${query}`);
    });
  };

  return (
    <div className="relative w-full h-14 flex flex-col bg-white">
      <div className="relative h-14 z-10 rounded-md">
        <Input
          disabled={isSearching}
          className="absolute inset-0 h-full text-lg"
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              search();
            }

            if (e.key === "Escape") {
              inputRef?.current?.blur();
            }
          }}
        />
        <Button
          className="absolute right-0 inset-y-0 rounded-l-none h-full"
          onClick={search}
          disabled={isSearching}
          size="sm"
        >
          {isSearching ? (
            <Loader2 className="h-6 w-6 animate-spin transition-all" />
          ) : (
            <SearchIcon className="h-6 w-6" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
