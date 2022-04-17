import { useState, useEffect } from "react";

const Meme = () => {
	const [meme, setMeme] = useState({
		topText: "One does not simply",
		bottomText: "Walk into Mordor",
		randomImage: "https://i.imgflip.com/1bij.jpg",
	});

	const [allMemes, setAllMemes] = useState([]);

	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			// .then((res) => res.json())
			// .then((data) => setAllMemes(data.data.memes));
			.then((res) => setAllMemes(res.json().data.memes));
	}, []);

	const getMeme = () => {
		const randomNumber = Math.floor(Math.random() * allMemes.length);
		const memeUrl = allMemes[randomNumber].url;
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: memeUrl,
		}));
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	};

	return (
		<main>
			<div className="meme--form">
				<div className="meme--inputs">
					<input
						className="meme--input"
						type="text"
						placeholder="Type top text"
						name="topText"
						value={meme.topText}
						onChange={handleChange}
					/>
					<input
						className="meme--input"
						type="text"
						placeholder="Type bottom text"
						name="bottomText"
						value={meme.bottomText}
						onChange={handleChange}
					/>
				</div>
				<button className="meme--submit" onClick={getMeme}>
					Get a new meme image
				</button>
			</div>
			<div className="meme">
				<img src={meme.randomImage} alt="meme" className="meme--image" />
				<h2 className="meme--text top">{meme.topText}</h2>
				<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
		</main>
	);
};
export default Meme;
