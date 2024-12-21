import Marquee from "react-fast-marquee";
const ExtraSectionOne = () => {
    return (
        <div>
            <Marquee>
                {/* <img className="mr-10 lg:mr-40" src="https://i.ibb.co/PC8gQ4x/h1-custom-icon-1-hover.png" alt="" />
                <img className="mr-10 lg:mr-40" src="https://i.ibb.co/xJsrV6j/h1-custom-icon-2-hover.png" alt="" />
                <img className="mr-10 lg:mr-40" src="https://i.ibb.co/5MhMHYT/h1-custom-icon-3-hover.png" alt="" />
                <img className="mr-10 lg:mr-40" src="https://i.ibb.co/chDtZVF/h1-custom-icon-4-hover.png" alt="" />
                <img className="mr-10 lg:mr-40" src="https://i.ibb.co/hDhHBPf/h1-custom-icon-5-hover.png" alt="" /> */}
                <div className="space-y-4 hover:text-yellow-400 mr-10 lg:mr-40">
                    <img src="https://i.ibb.co/PC8gQ4x/h1-custom-icon-1-hover.png" alt="" />
                    <p className="font-bold">Self Guided</p>
                </div>
                <div className="space-y-4 hover:text-yellow-400 mr-10 lg:mr-40">
                    <img src="https://i.ibb.co/xJsrV6j/h1-custom-icon-2-hover.png" alt="" />
                    <p className="font-bold">Self Guided</p>
                </div>
                <div className="space-y-4 hover:text-yellow-400 mr-10 lg:mr-40">
                    <img src="https://i.ibb.co/5MhMHYT/h1-custom-icon-3-hover.png" alt="" />
                    <p className="font-bold">Self Guided</p>
                </div>
                <div className="space-y-4 hover:text-yellow-400 mr-10 lg:mr-40">
                    <img src="https://i.ibb.co/chDtZVF/h1-custom-icon-4-hover.png" alt="" />
                    <p className="font-bold">Self Guided</p>
                </div>
                <div className="space-y-4 hover:text-yellow-400 mr-10 lg:mr-40">
                    <img src="https://i.ibb.co/hDhHBPf/h1-custom-icon-5-hover.png" alt="" />
                    <p className="font-bold">Self Guided</p>
                </div>
            </Marquee>
        </div>
    );
};

export default ExtraSectionOne;