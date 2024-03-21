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
                    class="d-flex position-fixed top-0 start-0 align-items-center justify-content-center w-100 min-vh-100 bg-black    z80">
                    <div class="loader">
                        <div class="d-flex justify-content-center align-items-center gap-2">
                            <span class="pariloder"></span>
                            <span class="pariloder"></span>
                            <span class="pariloder"></span>
                        </div>
                        <div>
                            <h2 class="prehead fs-lg text-white fw-semibold ">248 Labs</h2>
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
