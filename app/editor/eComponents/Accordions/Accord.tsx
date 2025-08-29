"use client";
import React, { useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItemProps = {
  title: string;
  children: ReactNode;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-1 border-gray-200 rounded-2xl lg:rounded-3xl md:rounded-3xl overflow-hidden mb-4 cursor-pointer">
      <button
        className="w-full flex justify-between items-center py-4 px-4 text-left text-lg font-medium hover:bg-gray-50 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="px-4 py-2 text-gray-600 ">{children}</div>}
    </div>
  );
};

type AccordionProps = {
  items: { title: string; content: ReactNode }[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="w-full  mx-auto   overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
