import { Link } from "react-router-dom";
import LiveOperations from "./LiveOperations";
import {
    ArrowRight,
    ShieldCheck,
} from "lucide-react";

const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-10">

            {/* Background */}
            <div className="absolute inset-0">

                <div className="absolute left-1/2 top-0 h-112.5 w-112.5 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

                <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

            </div>

            <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-6">

                <div className="max-w-3xl">

                    {/* Badge */}

                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">

                        <ShieldCheck size={16} />

                        AI Powered Stadium Operations Platform

                    </div>

                    {/* Heading */}

                    <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">

                        Smart Stadium

                        <span className="block bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">

                            Operations Copilot

                        </span>

                    </h1>

                    {/* Description */}

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">

                        ArenaPilot AI helps organizers, volunteers and venue staff
                        manage navigation, crowd flow, multilingual assistance,
                        transportation, sustainability and operational decisions
                        during the FIFA World Cup 2026 using Google Gemini.

                    </p>

                    {/* Buttons */}

                    <div className="mt-10 flex flex-wrap gap-4">

                        <Link
                            to="/dashboard"
                            aria-label="Open Live Stadium Dashboard"
                            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700"
                        >
                            Launch Dashboard

                            <ArrowRight size={18} />
                        </Link>

                        <Link
                            to="/about"
                            className="rounded-xl border border-slate-700 px-7 py-4 font-semibold text-slate-300 transition hover:border-blue-500 hover:text-white"
                        >
                            Learn More
                        </Link>

                    </div>

                    

                </div>

                {/* Right Side */}

                <div className="hidden flex-1 justify-end lg:flex">
                    <LiveOperations />
                </div>

            </div>

        </section>
    );
};


export default Hero;