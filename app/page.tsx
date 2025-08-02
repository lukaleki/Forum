import React from "react";

export default function Home() {
  return (
    <div className="flex justify-evenly items-center flex-col text-center gap-2 p-2">
      <div>
        <h1 className="m-4 text-3xl">RTS-RogueLite</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
          reprehenderit beatae maiores iusto, provident magni rem, illum
          recusandae amet iure minima eius? A rem delectus reiciendis quaerat
          labore vero eligendi.
        </p>
      </div>
      <div>
        <h1 className="m-4 text-3xl">Features</h1>
        <ul className="list-decimal text-left wrap-anywhere">
          <li>
            create and manage your{" "}
            <strong className="text-secondary">units</strong>
          </li>
          <li>
            Defeat enemies in{" "}
            <strong className="text-secondary">battles</strong>
          </li>
          <li>
            Recruit many heroes to help your{" "}
            <strong className="text-secondary">journey</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}
