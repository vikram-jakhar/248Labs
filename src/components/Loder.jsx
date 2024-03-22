import React, { useEffect, useState } from 'react'

const Lodersec = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => { setloader(false); }, 3000);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }
    return (
        <>
            {loder ? (
                <div id="preloder"
                    className="d-flex position-fixed top-0 start-0 align-items-center justify-content-center w-100 min-vh-100 bg-black    z80">
                    <div className="loader d-flex flex-column  ">
                        <div>
                            <h2 className="prehead fs-lg text-white fw-semibold animation-bounse ">248 Labs</h2>
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <span className="pariloder"></span>
                            <span className="pariloder"></span>
                            <span className="pariloder"></span>
                        </div>

                    </div>
                </div>
            )
                : ("")

            }

        </>
    )
}

export default Lodersec
