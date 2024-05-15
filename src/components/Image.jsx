import styles from './image.module.css'

export default function Image() {
    return (<>
        <div className={styles.imgContainer}>    <img src="https://placehold.co/250" alt="" />    </div>

        {/* filler picture for now, will update with a real picture when given the chance */}
    </>)
}