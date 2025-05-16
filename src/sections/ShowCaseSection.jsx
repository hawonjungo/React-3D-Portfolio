import {useRef} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);




    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((card, index) => {
            gsap.fromTo(card,
                {y: 50, opacity: 0},
                {y: 0,opacity :1, duration:1,delay:0.3 *(index+1),scrollTrigger:{
                        trigger:card,
                        start: 'top bottom -=100',
                    }})
        })
        gsap.fromTo(sectionRef.current,
            {opacity: 0},
            {opacity: 1,duration:1.5})
    },[]);
    return (

        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/*LEFT*/}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/3Element.PNG" alt="3Elements"   className="w-full h-full object-contain"/>
                        </div>
                        <div className="text-content">
                            <h2>C++ Game (SDL2): Titled "Three Elements".</h2>
                            <p className="text-white-50 md:text-xl">
                                2D game using OOP, SDL2 for graphics and event handling.
                            </p>
                        </div>
                    </div>
                    {/*RIGHT*/}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/rosagif.gif" alt="rosaPig" />
                            </div>
                            <h2> Rosa Pig: Created by using NodeJS + Express + MongoDB(Mongoose) </h2>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/inventory.PNG" alt="inventory" />
                            </div>
                            <h2>React (Hooks), MongoDB, and RESTful APIs for inventory tracking.</h2>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
export default ShowCaseSection
