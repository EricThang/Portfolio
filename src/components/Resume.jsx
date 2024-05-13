import { useState, useEffect, useRef } from 'react'
import styles from './resume.module.css'
export default function Resume({isOpen}) {
    const [open, setOpen] = useState(false);
    const modalRef = useRef();

    useEffect(() => {
        if(isOpen && modalRef.current) {
            modalRef.current.showModal()
        }
    }, [isOpen])

    return (<>
        <div>
            {/* pdf viewer */}
            <dialog ref={modalRef}>
                <article>
                    <form method='dialog'>
                        {/* close button for pdf viewer */}
                        <button label='Close' rel='prev' onClick={() => setOpen(false)}>Close</button>
                        <div>
                            <iframe src="/files/Eric_Thang.pdf" frameborder="0"
                                width={"1000px"} height={"900px"} />
                        </div>
                    </form>
                </article >

            </dialog >


 
        </div>

    </>)
}