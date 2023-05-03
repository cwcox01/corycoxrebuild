import Head from "next/head";

// importing components from component folder
import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/About/About";

export default function Home() {
	return (
		<>
			<Head>
				<title>About Cory</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Navbar />
			<About />
		</>
	);
}
