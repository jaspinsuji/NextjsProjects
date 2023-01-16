import styles from'../../styles/layout.module.css';
export default function Layout({ children }) {
    return (
        <div className="flex bg-gray-200 p-20">
            <div className="m-auto bg-slate-50 rounded-md w-3/5 grid lg:grid-cols-2 shadow-xl">
                <div className={styles.imgStyle}>
                    <div className={styles.cartoonImg}></div>
                    <div className={styles.icon1}></div>
                    <div className={styles.icon2}></div>
                </div>
                <div className="right flex flex-col justify-evenly">
                    <div className="text-center py-10">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
