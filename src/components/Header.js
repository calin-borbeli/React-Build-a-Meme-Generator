import headerLogo from "../images/troll-face.png";
const Header = () => {
	return (
		<header className="header">
			<img src={headerLogo} alt="Header Logo" className="header--logo" />
			<div className="header--title">Meme Generator</div>
			<div className="header--project">React Course - Project 3</div>
		</header>
	);
};
export default Header;
