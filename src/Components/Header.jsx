import profileImg from "../../src/assets/images/profile.png";
import logoImg from "../../src/assets/images/logo.png";
const Header = () => {
  return (
    <div className="mx-4 border-b border-gray-300 flex justify-between items-center py-3">
      {" "}
      {/* <h1 className="text-2xl font-bold">ThoughtNest</h1> */}
      <img src={logoImg} alt="logo-img" />
      <img className="w-12" src={profileImg} alt="user-logo" />
    </div>
  );
};

export default Header;
