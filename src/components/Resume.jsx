import { useState, useEffect, useRef } from 'react'
import styles from './resume.module.css'
import App from '../App';

export default function Resume({ isOpen }) {
    const [open, setOpen] = useState(false);
    const modalRef = useRef();

    //when the button is pressed, sends the isopen value to be used here
    useEffect(() => {
        if (isOpen && modalRef.current) {
            modalRef.current.showModal()
        }


    }, [isOpen])

    return (<>
        <div>

            <dialog ref={modalRef}>
                <article>
                    <form className='form' method='dialog'>
                        {/* close button for pdf viewer */}
                        <button type='close' onClick={() => { modalRef.current.close(); }}>Close</button>

                        <div>
                            {/* iframe functions as a pdf viewer */}
                            <iframe src="/files/Eric_Thang.pdf#zoom100"
                                width={"100%"} height={"800px"} />
                        </div>
                    </form>
                </article >

            </dialog >



        </div >

    </>)
}