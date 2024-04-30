"use client";

import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LuArrowDown } from "react-icons/lu";

const ScrollToToolLink = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const scrollToTool = useCallback(() => {
    const toolElement = document.getElementById("tool");
    if (toolElement) {
      toolElement.scrollIntoView({ behavior: "smooth" });
      setHasScrolled(true);
    }
  }, []);

  const handleScrollToTool = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (!hasScrolled) {
      scrollToTool();
    }
  };

  return (
    <Link href="#" onClick={handleScrollToTool}>
      <Button>
        <LuArrowDown className="size-4 mr-2" /> go to Tool
      </Button>
    </Link>
  );
};

export default ScrollToToolLink;
