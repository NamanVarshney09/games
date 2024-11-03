import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiBriefcase } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
            <Logo />
            <motion.div
                initial="initial"
                animate="animate"
                transition={{
                    staggerChildren: 0.05,
                }}
                className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
            >
                <HeaderBlock />
                <GamesBlock />
                <AboutBlock />
                <PortfolioBlock />
                <EmailListBlock />
            </motion.div>
            <Footer />
        </div>
    );
};

const Block = ({ className, ...rest }) => {
    return (
        <motion.div
            variants={{
                initial: {
                    scale: 0.5,
                    y: 50,
                    opacity: 0,
                },
                animate: {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                },
            }}
            transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 50,
            }}
            className={twMerge(
                "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
                className
            )}
            {...rest}
        />
    );
};

const HeaderBlock = () => (
    <Block className="col-span-12 row-span-2 md:col-span-6">
        <img
            src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
            alt="avatar"
            className="mb-4 size-14 rounded-full"
        />
        <h1 className="mb-12 text-4xl font-medium leading-tight">
            Hi, I'm Naman.{" "}
            <span className="text-zinc-400">
                I am a Frontend Developer.
            </span>
        </h1>
        <a
            href="https://namanvarshney.vercel.app/#contact" target="_blank"
            className="flex items-center gap-1 text-red-300 hover:underline"
        >
            Contact me <FiArrowRight />
        </a>
    </Block>
);

const GamesBlock = () => (
    <>
        <Block
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-red-500 md:col-span-3"
        >
            <Link
                to="/memory-game"
                className="grid h-full place-content-center text-3xl text-white"
            >
                {/* <SiYoutube /> */}
                <span className="font-bold text-center">
                    Memory Game
                    </span>
            </Link>
        </Block>
        <Block
            whileHover={{
                rotate: "-2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-green-600 md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-white"
            >
                {/* <SiGithub /> */}
            </a>
        </Block>
        <Block
            whileHover={{
                rotate: "-2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-zinc-50 md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-black"
            >
                {/* <SiTiktok /> */}
            </a>
        </Block>
        <Block
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-blue-500 md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-white"
            >
                {/* <SiTwitter /> */}
            </a>
        </Block>
    </>
);

const AboutBlock = () => (
    <Block className="col-span-12 text-3xl leading-snug">
        <p>
            My passion is building user friendly websites.{" "}
            <span className="text-zinc-400">
                I build primarily with React, Express, MongoDB, Redux, Tailwind CSS, and Framer Motion.
            </span>
        </p>
    </Block>
);

const PortfolioBlock = () => (
    <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
        <a href="https://namanvarshney.vercel.app" target="_blank"><FiBriefcase className="text-3xl" /></a>
        <a href="https://namanvarshney.vercel.app" target="_blank" className="text-center text-lg text-zinc-400">
            Portfolio
        </a>
    </Block>
);

const EmailListBlock = () => (
    <Block className="col-span-12 md:col-span-9">
        <p className="mb-3 text-lg">Join my mailing list</p>
        <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2"
        >
            <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
            />
            <button
                type="submit"
                className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
            >
                <FiMail />
                Join the list
            </button>
        </form>
    </Block>
);

const Logo = () => {
    return (
        <div className="flex items-center justify-center mb-10">
            <svg id="logo-72"
                width="52"
                height="44"
                viewBox="0 0 53 44"
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z" className="ccustom" fill="#ffffff"></path>
            </svg>
        </div>
    )
}

const Footer = () => {
    return (
        <footer className="mt-12">
            <p className="text-center text-zinc-400">
                Made with ❤️ by{" "}
                <a href="https://www.linkedin.com/in/namanvarshney09/" target="_blank" className="text-red-300 hover:underline">
                    @namanvarshney09
                </a>
            </p>
        </footer>
    );
};

export default Home;