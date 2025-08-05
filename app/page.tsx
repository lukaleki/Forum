import React from "react";
import Image from "next/image";
import knightImage from "@/public/knight-back.jpg";
import NatureImage from "@/public/nature-placeholder.jpg";

export default function Home() {
  return (
    <div className="flex justify-evenly items-center flex-col text-center gap-2 p-2">
      {/* <Image src={NatureImage} width={500} height={300} alt="nature" /> */}
      <div>
        <h1 className="m-4 text-3xl">RTS-RogueLite</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
          reprehenderit beatae maiores iusto, provident magni rem, illum
          recusandae amet iure minima eius? A rem delectus reiciendis quaerat
          labore vero eligendi.
        </p>
      </div>
      <div className="grid place-items-center">
        <h1 className="m-4 text-3xl">Features</h1>
        <ul className="w-9/10 list-decimal text-left ">
          <li>
            <strong className="text-secondary">
              Create and manage your units:
            </strong>{" "}
            build your army from ground-up!
          </li>
          <li>
            <strong className="text-secondary">
              {" "}
              Defeat enemies in battles:
            </strong>{" "}
            slay your enemies on the battlefield and claim victory!
          </li>
          <li className="wrap-break-word">
            <strong className="text-secondary">
              Recruit many heroes to help your journey:
            </strong>{" "}
            unite forces with mighty warriors for them to aid your conquest!
          </li>
        </ul>
      </div>
      <div className="grid place-items-center">
        <h1 className="m-4 text-3xl">Developed By ARS Inc.</h1>
        <div className="w-75 h-25 bg-primary">Logo place</div>
      </div>
    </div>
  );
}
