"use client";

import Link from "next/link";
import Form from "../src/ContactForm/Form.jsx";

export default function ContactPage() {
  return (
    <div>
      <Link href="/contact"></Link>
      <Form />
    </div>
  );
}
