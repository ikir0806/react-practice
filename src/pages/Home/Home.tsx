import style from './Home.module.scss'

export function Home() {
    return (<section className="greetings">
        <div className={style.greetings__wrp}>
            <img className={style.greetings__logo} src={require('src/img/logo.svg').default} alt="logo" />
            <p className={style.greetings__company}> 𝘚𝘦𝘭𝘢𝘴𝘢𝘷𝘪𝘢 </p>
        </div>
        <h1 className={style.greetings__title}>Welcome aboard the company's aircraft!</h1>
        <h3 className={style.greetings__description}>We care about the comfort of our passengers, so we offer you a wide
            range
            of multimedia entertainment during the flight. Also, in the additional section you will find
            information about the flight and arrival time. Enjoy your flight!</h3>
    </section>);
}