import React, { useRef, useEffect } from 'react';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

interface RiveLandingPageProps {
    onStart: () => void;
}

const RiveLandingPage: React.FC<RiveLandingPageProps> = ({ onStart }) => {
    const canvasRef = useRef(null);

    const { RiveComponent, rive } = useRive({
        src: '/mbti.riv',
        artboard: 'Artboard',
        stateMachines: 'State Machine 1',
        autoplay: true,
    });

    return (
        <div className="moving-dots min-h-screen bg-sky-50 flex flex-col items-center justify-center p-4">
            <div className="text-center max-w-lg">
                {/* Title with white border */}
                <h1 className="text-3xl font-bold text-primary mb-6 relative drop-shadow-xl">
                    {/* White border effect using text-shadow */}
                    <span
                        className="leading-tight inline-block relative"
                        style={{
                            textShadow: '-2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white'
                        }}
                    >
                        서울대
                        <br />
                        동아리
                        <br />
                        테스트
                    </span>
                </h1>

                {/* Bouncing tooltip */}
                <div className="relative animate-bounce">
                    <p className="flex items-center py-1 px-3 rounded-xl text-lg font-light text-white bg-primary">
                        나에게 딱! 맞는 동아리는?
                    </p>
                    {/* Triangle tooltip pointer */}
                    <div className="absolute h-2 w-2 bg-primary rotate-45 -bottom-1 left-1/2 transform -translate-x-1/2"></div>
                </div>
                {/* Rive Animation */}
                <div className="w-full h-48 mb-4" ref={canvasRef}>
                    <RiveComponent />
                </div>

                {/* Pulsing button */}
                <button
                    onClick={onStart}
                    className="drop-shadow-xl px-8 py-3 bg-primary text-black font-bold rounded-lg text-lg font-semibold relative animate-pulse"
                    style={{
                        textShadow: '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white'
                    }}
                >
                    START!
                </button>

                <div className="mt-4 font-light text-sm text-gray-500">@snu.official</div>
            </div>
        </div>
    );
};

export default RiveLandingPage;