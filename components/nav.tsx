"use client";
import { useState } from "react";
import Image from "next/image";
import discordIcon from "@/public/discord.png";
import facebookIcon from "@/public/facebook.png";
import emailIcon from "@/public/email.png";

function Nav() {
  const [isPagesOpened, setIsPagesOpened] = useState(false);
  const [isSocialsOpened, setIsSocialsOpened] = useState(false);

  return (
    <div className="rounded-b-xs flex p-2 bg-primary h-10 justify-between">
      <button
        onClick={() => setIsPagesOpened(!isPagesOpened)}
        className="text-xl"
      >
        pages
      </button>
      <ul
        className={`${
          isPagesOpened ? "left-0" : "-left-20"
        } h-40 flex flex-col justify-around items-center absolute top-10 text-lg duration-200 p-2 bg-primary rounded-b-xs`}
      >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Forums</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
      </ul>

      <button
        onClick={() => setIsSocialsOpened(!isSocialsOpened)}
        className="text-xl"
      >
        socials
      </button>
      <ul
        className={`${
          isSocialsOpened ? "right-0" : "-right-20"
        } h-40 flex flex-col justify-evenly items-center absolute top-10 duration-200 p-2 bg-primary rounded-b-xs`}
      >
        <li>
          <a href="#">
            <Image
              className="dark:invert"
              src={discordIcon}
              width={35}
              height={30}
              alt={`discord png`}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              className="dark:invert"
              src={facebookIcon}
              width={35}
              height={50}
              alt={`facebook png`}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              className="dark:invert"
              src={emailIcon}
              width={35}
              height={25}
              alt={`email png`}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
