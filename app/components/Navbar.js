export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">S.</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
