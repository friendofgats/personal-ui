import ReactSlider from "react-slider";
import thumb from '../../assets/images/utilities/slider-thumb.png';

/**
 * Simple implementation of react-slider's ReactSlider.
 * Not looking to reinvent the wheel but using it as it plays nicely with tailwind.
 * @param {*} props 
 */
export default function Slider(props) {
    return (
        <div>
            <div className="appearance-none flex flex-col -mt-3 shrink items-center">
                <ReactSlider
                    {...props}
                    max={5}
                    min={1}
                    onAfterChange={props?.setVerbosity}
                    renderThumb={(props, state) => (
                        <div
                            {...props}
                            text={null}
                        >
                            {/* thumb renders off-center with this component so must offset */}
                            <img className="appearance-none h-full flex items-center justify-center mt-3 cursor-grab" src={thumb} alt=""></img>
                        </div>
                    )}
                    renderTrack={(props, state) => {
                        return (
                            <div
                                {...props}
                                className="bg-orange outline outline-2 outline-yellow mr-4 ml-4 top-1/2"
                            ></div>
                        );
                    }}
                />
                <p className="-mt-2 text-xl text-orange ">How much do you want to know?</p>
            </div>
        </div>
    );
};