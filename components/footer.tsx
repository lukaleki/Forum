import React from "react";

function Footer() {
  return (
    <div className="text-center bg-primary">
      <p>RTS-RogueLite Copyright © 2025-2026 ARS Inc.</p>
      <ul className="flex justify-evenly items-center  ">
        <li>
          <a className="text-secondary" href="#">
            Privacy Policy
          </a>
        </li>
        <li>
          <a className="text-secondary" href="#">
            Terms of use
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
