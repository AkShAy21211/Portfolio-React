import React, {useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
    const [isInit, setIsInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        const initParticles = async () => {
            await initParticlesEngine(async (engine) => {
                await loadSlim(engine);
                setIsInit(true);
            });
        };
        initParticles();
    }, []);

   

    return (
        <>
            {isInit && (
                <Particles
                style={{width:"100%",height:"30px"}}
                    id="tsparticles"
                    options={{
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 50,
                                opacity: 0.5,
                               
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 6,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 100,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                           
                        },
                 
                    }}
                />
            )}
        </>
    );
};

export default ParticleBackground;
