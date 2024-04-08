import Link from "next/link"


export default function MenuBarDesktop() {
    return (
        <div className="menu-desktop">

        <section>
            <Link href="/">
                <button>Home</button>
            </Link>
        </section>
        <section>
            <Link href="/founders">
                <button>Meet the founders</button>
            </Link>
        </section>
        </div>

    );
}

