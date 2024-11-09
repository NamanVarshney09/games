import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHeartbeat } from "react-icons/fa"
import { GiHeartBeats } from "react-icons/gi"
import { BsEmojiTear, BsBalloonHeart, BsArrowRepeat } from "react-icons/bs"
import { SiHuggingface } from "react-icons/si"
import { FaArrowRightFromBracket } from 'react-icons/fa6'

const Apology = () => {
    const [anger, setAnger] = useState(0)
    const [stupid, setStupid] = useState(0)
    const [aloven, setAloven] = useState(0)
    const [nlovea, setNlovea] = useState(0)
    const [hug, setHug] = useState(0)
    const [submitted, setSubmitted] = useState(false)
    const [showLanding, setShowLanding] = useState(true)
    const [showForgivenessPopup, setShowForgivenessPopup] = useState(false)

    const handleSubmit = () => {
        setSubmitted(true)
    }

    const restart = () => {
        setAnger(0)
        setAloven(0)
        setNlovea(0)
        setHug(0)
        setSubmitted(false)
        setShowLanding(true)
    }

    const getMessage = () => {
        let message = ""
        if (anger > stupid) {
            message += `Despite a bit of anger, Anshi and Naman overcame it with ${hug === 0 ? "infinite" : hug} hugs !`
        } else {
            message += `Balanced emotions with a lot of love! Anshi forgave Naman with ${hug === 0 ? "infinite" : hug} warm hugs!`
        }
        return message + " ♥️"
    }

    return (
        <div className="flex flex-col gap-3 h-screen w-screen items-center justify-center bg-pink-50 text-neutral-700">
            {/* Landing Page */}
            <AnimatePresence>
                {showLanding && (
                    <motion.div
                        className="flex flex-col items-center justify-center gap-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="w-72 text-3xl text-center font-bold text-purple-700">Welcome to Apology Center</h1>
                        <p className="text-lg w-72 text-center text-gray-700">Place to come up whenever I make any mistake .<span>Please forgive me for my nuisances</span> I love you very very...very much and I cannot see you sad 🥺</p>
                        <motion.button
                            onClick={() => setShowLanding(false)}
                            className="px-8 py-3 bg-purple-300 text-purple-900 font-semibold rounded-full shadow-md hover:bg-purple-400 transform active:scale-90 transition-all"
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            Start Apology
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Counter Display */}
            {!showLanding && (
                <motion.div
                    className="flex items-center justify-center mb-4 gap-4 border-2 p-4 rounded-lg shadow-md bg-purple-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <BsEmojiTear className="text-3xl text-red-500" /> {anger}
                    <FaHeartbeat className="text-3xl text-pink-500" /> {aloven}
                    <GiHeartBeats className="text-3xl text-red-500" /> {nlovea}
                    <SiHuggingface className="text-3xl text-pink-500" /> {hug}
                </motion.div>
            )}

            {/* Buttons */}
            <AnimatePresence>
                {!submitted && !showLanding && (
                    <motion.div
                        className="flex flex-col gap-4 items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <BsBalloonHeart className="text-5xl text-pink-400 mb-2 animate-bounce" />
                        <motion.button
                            onClick={() => {
                                setAnger(anger + 1)
                                setShowForgivenessPopup(true)
                            }}
                            className="flex items-center px-6 py-3 bg-orange-200 text-orange-800 font-semibold rounded-full shadow-md hover:bg-orange-300 transform active:scale-90 transition-all"
                            whileHover={{ scale: 1.1 }}
                        >
                            Anshi is angry with Naman ! <BsEmojiTear className="ml-2 text-2xl" />
                        </motion.button>

                        <motion.button
                            onClick={() => setNlovea(nlovea + 1)}
                            className="flex items-center px-6 py-3 bg-pink-200 text-pink-800 font-semibold rounded-full shadow-md hover:bg-pink-300 transform active:scale-90 transition-all"
                            whileHover={{ scale: 1.1 }}
                        >
                            Naman loves Anshi ! <GiHeartBeats className="ml-2 text-2xl" />
                        </motion.button>

                        <motion.button
                            onClick={() => setAloven(aloven + 1)}
                            className="flex items-center px-6 py-3 bg-pink-200 text-pink-800 font-semibold rounded-full shadow-md hover:bg-pink-300 transform active:scale-90 transition-all"
                            whileHover={{ scale: 1.1 }}
                        >
                            Anshi loves Naman ! <FaHeartbeat className="ml-2 text-2xl" />
                        </motion.button>

                        <motion.button
                            onClick={() => setHug(hug + 1)}
                            className="flex items-center px-6 py-3 bg-red-200 text-red-800 font-semibold rounded-full shadow-md hover:bg-lavender-300 transform active:scale-90 transition-all"
                            whileHover={{ scale: 1.1 }}
                        >
                            Anshi forgives Naman ! <SiHuggingface className="ml-2 text-2xl" />
                        </motion.button>

                        <motion.button
                            onClick={handleSubmit}
                            className="px-8 py-3 bg-purple-300 text-purple-900 font-semibold rounded-full shadow-md hover:bg-purple-400 transform active:scale-90 transition-all mt-4"
                            whileHover={{ scale: 1.1 }}
                        >
                            <FaArrowRightFromBracket />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Final Message */}
            {submitted && (
                <motion.div
                    className="text-center text-lg font-bold text-blue-800 bg-blue-100 p-5 rounded-lg shadow-lg w-3/4 md:w-1/2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                >
                    {getMessage()}
                </motion.div>
            )}

            {submitted && (
                <motion.div
                    className="text-center text-lg font-bold text-blue-800 bg-blue-100 p-5 rounded-lg shadow-lg w-3/4 md:w-1/2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                >
                    {"♥️ Get well soon love ♥️"}
                </motion.div>
            )}

            {/* Restart Button */}
            {submitted && (
                <motion.button
                    onClick={restart}
                    className="flex items-center justify-center mt-4 px-6 py-3 bg-purple-300 text-purple-900 font-semibold rounded-full shadow-md hover:bg-purple-400 transform active:scale-90 transition-all"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <BsArrowRepeat className="text-2xl" />
                </motion.button>
            )}

            {/* Forgiveness Popup */}
            <AnimatePresence>
                {showForgivenessPopup && (
                    <motion.div
                        className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-yellow-100 text-red-800 rounded-lg shadow-lg text-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ type: 'spring', stiffness: 120, damping: 12 }}
                    >
                        <p className="text-lg">I am sorry love Please forgive me ! 💖 I will try not to irritate you...</p>
                        <button
                            className="mt-3 px-4 py-2 bg-yellow-200 text-red-800 font-semibold rounded shadow-md hover:bg-yellow-300"
                            onClick={() => setShowForgivenessPopup(false)}
                        >
                            Close
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Apology
