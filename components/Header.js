import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header-container">
      <section className="top-header">
        <div className="logo">
          <Image
            src="/solar_hamburger-menu-linear.png"
            alt="Menu"
            width={20}
            height={20}
            priority
            className="menu"
          />
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={35} height={35} priority />
          </Link>
        </div>
        <h2>LOGO</h2>
        <div className="icon-container">
          <Image
            src="/search-normal.png"
            alt="search"
            width={24}
            height={24}
            priority
          />
          <Image src="/heart.png" alt="heart" width={24} height={24} priority />
          <Image
            src="/shopping-bag.png"
            alt="shopping-bag"
            width={24}
            height={24}
            priority
          />
          <Image
            src="/profile.png"
            alt="profile"
            width={24}
            height={24}
            priority
            className="profile"
          />
          <Image
            src="/Language.png"
            alt="language"
            width={52}
            height={16}
            priority
            className="language"
          />
        </div>
      </section>
      <nav>
        <ul className="nav-links">
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES </li>
          <li>ABOUT </li>
          <li>CONTACT US </li>
        </ul>
      </nav>
    </header>
  );
}
