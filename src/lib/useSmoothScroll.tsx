"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LuArrowDown } from "react-icons/lu";

const ScrollToToolLink = () => {
  useEffect(() => {
    const handleScroll = () => {
      const toolElement = document.getElementById("tool");
      if (toolElement) {
        toolElement.scrollIntoView({ behavior: "smooth" });
      }
    };
    handleScroll();
  }, []);

  return (
    <Link
      href="#"
      onClick={(e) => {
        e.preventDefault();
        const toolElement = document.getElementById("tool");
        if (toolElement) {
          toolElement.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      <Button>
        <LuArrowDown className="size-4 mr-2" /> go to Tool
      </Button>
    </Link>
  );
};

export default ScrollToToolLink;
