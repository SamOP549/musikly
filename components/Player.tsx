import React, { useState, useEffect } from 'react'
import useSound from "use-sound";
import audio1 from '../public/music/on-n-on.mp3'

const Player = ({ display, setDisplay }: any) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currTime, setCurrTime] = useState({
        min: 0,
        sec: 0,
    });
    const [totTime, settotTime] = useState(
        {
            min: 0,
            sec: 0,
        }
    )
    const [play, { pause, duration, sound }] = useSound(audio1);
    const [seconds, setSeconds] = useState();
    const [songs, setSongs] = useState([
        {
            title: "Forget me too ft. Halsey",
            artist: "Machine Gun Kelly",
            img_src: "./images/song-1.jpg",
            src: "./music/on-n-on.mp3"
        },
        {
            title: "Song 2",
            artist: "Artist 2",
            img_src: "./images/song-2.jpg",
            src: "./music/somebody-new.mp3"
        }
    ]);

    useEffect(() => {
        const sec = duration / 1000;
        const min = Math.floor(sec / 60);
        const secRemain = Math.floor(sec % 60);
        settotTime({
            min: min,
            sec: secRemain
        })
    }, [sound]);
    useEffect(() => {
        const interval = setInterval(() => {
            if (sound) {
                setSeconds(sound.seek([])); // setting the seconds state with the current state
                const min = Math.floor(sound.seek([]) / 60);
                const sec = Math.floor(sound.seek([]) % 60);
                setCurrTime({
                    min,
                    sec,
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [sound]);

    const closePlayer = () => {
        pause()
        setDisplay(false)
    }

    const playingButton = () => {
        if (isPlaying) {
            pause();
            setIsPlaying(false);
        } else {
            play();
            setIsPlaying(true);
        }
    }

    return (
        <div className="w-full fixed bottom-0 right-0 bg-gray-300 bg-opacity-75 z-10">
            <h2 onClick={closePlayer} className='text-black z-20 fixed top-10 right-10 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </h2>
            <div className="h-2 bg-red-light"></div>
            <div className="flex items-center justify-center h-screen bg-red-lightest">
                <div className="bg-white shadow-lg rounded-lg" style={{ width: "45rem !important" }}>
                    <div className="flex">
                        <div>
                            <img className="w-full rounded hidden md:block" src="https://tailwindcss.com/img/card-top.jpg" alt="Album Pic" />
                        </div>
                        <div className="w-full p-8">
                            <div className="flex justify-between">
                                <div>
                                    <h3 className="text-2xl text-gray-900 font-medium">A Sky Full of Stars</h3>
                                    <p className="text-sm text-gray-600 mt-1">Ghost Stories</p>
                                </div>
                                <div className="text-red-lighter">
                                    <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" /></svg>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-8">
                                <div className="text-grey-darker">
                                    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z" /></svg>
                                </div>
                                <div className="text-grey-darker">
                                    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" /></svg>
                                </div>
                                {
                                    isPlaying ? (
                                        <div onClick={playingButton} className="text-white p-8 rounded-full bg-red-500 shadow-lg">
                                            <svg className="w-8 h-8" fill="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" /></svg>
                                        </div>) :
                                        (
                                            <div onClick={playingButton} className="p-8 rounded-full bg-red-500 shadow-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                                </svg>
                                            </div>
                                        )

                                }
                                <div className="text-grey-darker">
                                    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" /></svg>
                                </div>
                                <div className="text-grey-darker">
                                    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-8 py-4">
                        <div className="flex justify-between text-sm text-grey-darker">
                            <p>{currTime.min}:{currTime.sec}</p>
                            <p>{totTime.min}:{totTime.sec}</p>
                        </div>
                        <div className="mt-1">
                            <input
                                type="range"
                                min="0"
                                max={duration / 1000}
                                default="0"
                                value={seconds}
                                className="timeline w-full bg-[#27ae60]"
                                onChange={(e) => {
                                    sound.seek([e.target.value]);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player