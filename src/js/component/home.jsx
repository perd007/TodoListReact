import React, { useState } from "react";
import List from "./List";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {


	return (
		<>

			<div className="container">
				<List />
			</div>

		</>
	);
};

export default Home;
