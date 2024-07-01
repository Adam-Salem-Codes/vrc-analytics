
const Footer = () => {
  const links = [
    { url: "/", label: "Home" },
    { url: "/search", label: "Team Lookup" },
    { url: "/about", label: "About" },
  ];

  return (
    <section className="bg-[#141414]">
      <div className="w-full px-4 py-14 mx-auto space-y-8  overflow-hidden sm:px-6 lg:px-8">
      <nav className="flex flex-wrap justify-center">
          {links.map((link) => (
            <div key={link.url} className="px-5 py-2">
              <a
                href={link.url}
                className="text-base leading-6 text-gray-500 hover:text-orange-500"
                rel="noreferrer"
              >
                {link.label}
              </a>
            </div>
          ))}
        </nav>
        <div className="w-full text-center text-primary">
          <a href="https://ko-fi.com/adamsalem">Made with ❤️ by Adam Salem from 2072A.</a>
        </div>
        
      </div>
    </section>
  );
};
export default Footer;