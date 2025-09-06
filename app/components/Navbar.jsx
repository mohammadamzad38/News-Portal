import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const categories = [
  {
    name: "বাজেট ২০২৫-২৬",
    url: "budget2025-26",
  },
  {
    name: "সমগ্র বাংলাদেশ",
    url: "samagrabangladesh",
  },
  {
    name: "বিশ্ব",
    url: "world",
  },
  {
    name: "ক্রিকেট",
    url: "cricket",
  },
  {
    name: "খেলা",
    url: "sport",
  },
  {
    name: "বাণিজ্য",
    url: "business",
  },
  {
    name: "টেক",
    url: "tech",
  },
];

export default function NavBar() {
  return (
    <div className="flex gap-5 md:gap-15 place-items-center max-w-7xl mx-auto py-4 px-5">
      <div className="flex gap-5">
        <button>
          <TiThMenu size={25} />
        </button>
        <button className="hidden md:block">
          <FaSearch size={25} />
        </button>
        <a href="/">
          <FaHome size={25} />
        </a>
      </div>
      <div className="flex flex-row gap-8 px-4 justify-center overflow-x-auto scroll-px-4 whitespace-nowrap">
        {categories.map((category, index) => (
          <Link
            className="hover:text-red-500 relative after:block after:h-[4px] after:w-0 cubic-bezier(0, 1.45, 0.64, 0.61) after:bg-red-500 after:transition-all after:duration-500 hover:after:w-full"
            href={category.url}
            key={index}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
