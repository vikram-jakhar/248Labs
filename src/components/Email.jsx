import { useState } from "react";
import Comanbtn from "./Comanbtn";
import chek_box from '../assets/Svg/check_box.svg'

const Email = () => {
    const [formData, setFormData] = useState({
        name: "",
        name2: "",
        number: "",
        mail: "",
    });
    const [formErrors, setFormErrors] = useState({
        name: "",
        name2: "",
        number: "",
        mail: "",
    });
    const [formMail, setFormMail] = useState({
        name: "",
        name2: "",
        number: "",
        mail: "",
    });

    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const regex = {
            name: /^[a-zA-Z\s]+$/,
            name2: /^[a-zA-Z\s]+$/,
            number: /^\d{10}$/,
            mail: /^[a-zA-Z\s]/,
        };
        const errors = {};
        if (!regex.name.test(formData.name)) {
            errors.name = "Name is invalid.";
        }
        if (!regex.name2.test(formData.name2)) {
            errors.name2 = "Name is invalid.";
        }
        if (!regex.number.test(formData.number)) {
            errors.number = "Number is invalid.";
        }
        if (!regex.mail.test(formData.mail)) {
            errors.mail = "Email is invalid.";
        }

        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            setShowSuccessPopup(true);
        }
    };

    const handlePopupClose = () => {
        setShowSuccessPopup(false);
        setFormData({
            name: "",
            name2: "",
            number: "",
            mail: "",
        });
        setFormErrors({
            name: "",
            name2: "",
            number: "",
            mail: "",
        });
    };

    return (
        <div>
            <div className="Emailbg bg-black  d-flex overflow-x-clip ">
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <div className="row ps-3 flex-grow-md-1 align-items-center justify-content-center">
                        <div className="col-lg-8 col-12">
                            <form className="registration-form w-100  " onSubmit={handleSubmit}>
                                <h1 className=" font_flex fs-lg pb-2 mb-3 fw-bold text-white">Get updated with us</h1>
                                <div className="d-md-flex pb-2 gap-4 text-white justify-content-between">
                                    <div className="mb-20 max_310  ">
                                        <label className="fw-medium text-white fs-sm1 font_flex " htmlFor="name">First Name:</label>
                                        <input type="text" id="name" placeholder="Park Seijun" name="name" value={formData.name} onChange={handleChange} />
                                        {formErrors.name && (<p className="invalid-message">{formErrors.name}</p>)}
                                    </div>
                                    <div className="mb-20 max_310 ">
                                        <label className="fw-medium text-white fs-1sm font_flex " htmlFor="name2">Last Name:</label>
                                        <input type="text" id="name2" placeholder=" Seijun" name="name2" value={formData.name2} onChange={handleChange} />
                                        {formErrors.name2 && (<p className="invalid-message">{formErrors.name2}</p>)}
                                    </div>
                                </div>
                                <div className="d-md-flex pb-2 gap-4 justify-content-between">
                                    <div className="mb-20 max_310 ">
                                        <label className="fw-medium text-white fs-1sm font_flex " htmlFor="number">Phone Number:</label>
                                        <input type="number" id="number" placeholder="+12 5858526478" name="number" value={formData.number} onChange={handleChange} className={formErrors.number ? "error" : ""} />
                                        {formErrors.number && (<p className="invalid-message">{formErrors.number}</p>)}
                                    </div>
                                    <div className="mb-20 max_310">
                                        <label className="fw-medium text-white fs-1sm font_flex  " htmlFor="mail" >Email:</label>
                                        <input type="mail" id="mail" placeholder="Park@458@Gmail.com" name="mail" value={formData.mail} onChange={handleChange} />
                                        {formErrors.mail && (<p className="invalid-message">{formErrors.mail}</p>)}
                                    </div>
                                </div>
                                <div className=" d-flex  align-items-md-start gap-2  ">
                                    {/* <img src={chek_box} alt="chek_box" className="top-" /> */}
                                    <input type="checkbox" name="check-box" className="w-unset  mt-2" id="checkbox" />
                                    <p className=" text-white fw-normal font_flex  fs-md max_547">By sending this form I confirm that I have read and accept the <span className="fw-semibold font-poppins">Privacy Policy</span></p>
                                </div>
                                <div className="mt-4 "> <Comanbtn text="Subscribe" paddings="py-3" /></div>
                            </form>
                            {showSuccessPopup && (
                                <div className="success-popup d-flex justify-content-center align-items-center flex-column ">
                                    <p className="fw-bold fs-2md text-green text-center font_flex">Form submitted successfully!</p>
                                    <button onClick={handlePopupClose} className="mt-5">Close</button>
                                </div>
                            )}
                        </div>
                        <div className="col-lg-4 pt-4 pt-lg-0  ">
                            <p className="fs-1md font_flex fw-normal text-white mb-0  mb-lg-2 pb-1 m-0 ">Stay updated</p>
                            <p className="fs-1sm fw-normal text-light2 font_flex  mb-lg-4 mb-1 m-0 max_373 "> At 248 Labs, our constant pursuit is to build engaging games that spared joy. Don’t hesitate to reach out to us with your thoughts and messages - we are all ears!</p>
                            <p className="fs-1md font_flex fw-normal text-white mb-0  mb-lg-2 pb-1 m-0 "> Address</p>
                            <p className="fs-1sm fw-normal text-light2 font_flex m-0 ">390 Orchard Road, 03-07, Palais Renaissance.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Email;