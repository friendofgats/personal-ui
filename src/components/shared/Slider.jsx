import ReactSlider from "react-slider";
import head from '../../assets/images/shared/head.png';

/**
 * Simple implementation of react-slider's ReactSlider.
 * Not looking to reinvent the wheel but using it as it plays nicely with tailwind.
 * @param {*} props 
 * @returns 
 */
const Slider = (props) => {
    return (
        <ReactSlider
            {...props}
            max={10}
            min={1}
            onAfterChange={props?.setVerbosity}
            renderThumb={(props, state) => (
                <div
                    {...props}
                    text={null}
                >
                    <img className="h-full items-center flex items-center justify-center cursor-grab" img src={head} alt="whatever"></img>
                </div>
            )}
            renderTrack={(props, state) => {
                return (
                    <div
                        {...props}
                        className="bg-orange outline outline-2 outline-yellow  top-1/2 -translate-y-1/2"
                    ></div>
                );
            }}
        />
    );
};

export default Slider;