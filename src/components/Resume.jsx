import { useState } from 'react'
import styles from './resume.module.css'
export default function Resume() {
    const [open, setOpen] = useState(false);

    return (<>
        <div>
            {/* pdf viewer */}
            <dialog open={open}>
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


            <button className={styles.btn} onClick={() => setOpen(true)}>Resume</button>

        </div>

    </>)
}