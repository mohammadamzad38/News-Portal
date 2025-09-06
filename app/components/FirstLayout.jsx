import Link from "next/link";
import newsData from "../newsData.json";
import Image from "next/image";

export default function ThreeColumnNews() {
  // middle item = index 1
  const middleIndex = 0;
  const middleItem = newsData[middleIndex];

  // rest = index 2 onward
  const rest = newsData.slice(1);

  // alternate distribution: even -> left, odd -> right
  const leftItems = rest.filter((_, i) => i % 1 === 0);
  const rightItems = rest.filter((_, i) => i % 1 === 0);

  return (
    <section>
      <div className="flex flex-row w-12/12 gap-10 my-10">
        {/* Left column */}
        <div className="w-[25%]">
          {leftItems.slice(0, 4).map((news, idx) => (
            <Link
              href={news.slug}
              key={news.slug ?? `left-${idx}`}
              className="block group border-b-1 border-gray-300"
            >
              <p className="font-bold text-2xl pb-4 group-hover:text-red-500 mt-10">
                {news.headline}
              </p>
              <p className="text-gray-600 line-clamp-3 mb-10">
                {news.newsArticle}
              </p>
            </Link>
          ))}
        </div>

        {/* Middle column — only one item (index 1) */}
        <div className="w-[50%] my-15">
          {middleItem ? (
            <Link href={middleItem.slug} className="group text-center">
              <div className="relative h-[400px] w-full ">
                <Image
                  src={middleItem?.image}
                  fill
                  alt={middleItem.headline}
                  priority
                />
              </div>
              <p className="font-extrabold leading-[1.5] text-4xl my-5 group-hover:text-red-500">
                {middleItem.headline}
              </p>
              <p className="text-gray-700 line-clamp-3">
                {middleItem.newsArticle}
              </p>
            </Link>
          ) : (
            <div className="text-gray-500">No middle item</div>
          )}
        </div>

        {/* Right column */}
        <div className="w-[25%]">
          {rightItems.slice(5, 9).map((news, idx) => (
            <Link
              href={news.slug}
              key={news.slug ?? `right-${idx}`}
              className="block group border-b-1 border-gray-300"
            >
              <p className="font-bold text-2xl group-hover:text-red-500 mt-10 pb-4">
                {news.headline}
              </p>
              <p className="text-gray-600 line-clamp-3 mb-10">
                {news.newsArticle}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
