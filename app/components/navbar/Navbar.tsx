import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-10 bg-white shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-4 mmd:gap-0">
            <Logo />
            <Search/>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
