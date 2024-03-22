"use client";
import { TypeAnimation } from "react-type-animation";

export default function WhoAmI() {
    return (
        <div className="flex flex-col justify-center items-center font-mono font-bold text-2xl ">
            <div className="flex-auto">
                <span>My Tech Stack Includes</span>
            </div>
            <div className="flex-auto">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Java',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Elasticsearch / ELK ',
                        1000,
                        'JavaScript',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </div>
        </div>
    );
}