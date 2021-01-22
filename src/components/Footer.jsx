import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center">
      <p>
        Copyright ⓒ {year} present by{" "}
        <a href="https://www.hockeycomputindo.com">hockeycomputindo.com</a>
      </p>
    </footer>
  );
}

export default Footer;
