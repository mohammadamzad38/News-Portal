import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const mediaIcons = [
  { name: "Facebook", icon: FaFacebook, link: "#", color: "#1877F2" },
  { name: "YouTube", icon: FaYoutube, link: "#", color: "#FF0000" },
  { name: "X (Twitter)", icon: FaSquareXTwitter, link: "#", color: "#050505ff" },
  { name: "Instagram", icon: FaInstagramSquare, link: "#", color: "#E1306C" },
  { name: "WhatsApp", icon: FaWhatsappSquare, link: "#", color: "#25D366" },
];

export default function SocialMedia() {
  return (
    <div className="flex flex-row gap-3">
      {mediaIcons.map((item, index) => {
        const IconComponent = item.icon; // get the icon component
        return (
          <div key={index}>
            <a className="w-full" href={item.link}>
              <IconComponent color={item.color} size={30} />{" "}
              {/* size optional */}
            </a>
          </div>
        );
      })}
    </div>
  );
}
