import Link from "next/link";

import "../Header/Header.css";
import MenuBarMobile from "../menuBarMobile/MenuBarMobile";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1 id="main-title">🔥 Fireplace Palace</h1>
      </Link>
      {/* <MenuBarMobile /> */}

      <Link href="/founders">
        <p className="founderBtn">Founders page</p>
      </Link>
    </header>
  );
}
