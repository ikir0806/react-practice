import classNames from 'classnames';
import style_bundle from 'src/bundle/swiper-bundle.module.css';
import style from './Music.module.scss';

export const Music = () => {
    return (<section className={style.music}>
        <div className={style.music__title}>
            <h2 className={style.music__title_text}>Pop</h2>
        </div>
        <div className={classNames(style_bundle.swiper, style.music__swiper)}>
            <div className={classNames(style_bundle.swiper_wrapper)}>
                <div className={classNames(style_bundle.swiper_slide, style.music__swiper_slide)}>
                    <img className={style.music__swiper_img} src={require('src/img/random-access-memories.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.music__swiper_slide)}>
                    <img className={style.music__swiper_img} src={require('src/img/future-nostalgia.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.music__swiper_slide)} data-name="silk-sonic">
                    <a className={style.music__swiper_ref} href="./audio-player.html"><img className={style.music__swiper_img}
                        src={require('src/img/silk-sonic.jpg')} alt="" /></a>
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.music__swiper_slide)}>
                    <img className={style.music__swiper_img} src={require('src/img/after-hours.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.music__swiper_slide)}>
                    <img className={style.music__swiper_img} src={require('src/img/fine-line.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.music__swiper_slide)}>
                    <img className={style.music__swiper_img} src={require('src/img/norman-rockwell.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.music__swiper_slide)}>
                    <img className={style.music__swiper_img} src={require('src/img/happier-than-ever.jpg')} alt="" />
                </div>
            </div>
            <div className={classNames(style_bundle.swiper_button_prev, style.music__swiper_button_prev)}></div>
            <div className={classNames(style_bundle.swiper_button_next, style.music__swiper_button_next)}></div>
        </div>
        <div className={style.music__title}>
            <h2 className={style.music__title_text}>Rock</h2>
        </div>
        <div className={classNames(style_bundle.swiper, style.music__swiper)}>
            <div className={classNames(style_bundle.swiper_wrapper)}>
                <div className={classNames(style_bundle.swiper_slide, style.music__swiper_slide)} data-name="getaway" data-count="13">
                    <a className={style.music__swiper_ref} href="./audio-player.html"><img className={style.music__swiper_img}
                        src={require('src/img/getaway.jpg')} alt="" /></a>
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.music__swiper_slide)}>
                    <img className={style.music__swiper_img} src={require('src/img/queen.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.music__swiper_slide)}>
                    <img className={style.music__swiper_img} src={require('src/img/new-abnormal.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.music__swiper_slide)}>
                    <img className={style.music__swiper_img} src={require('src/img/love-city.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.music__swiper_slide)}>
                    <img className={style.music__swiper_img} src={require('src/img/everything-not-saved.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.music__swiper_slide)}>
                    <img className={style.music__swiper_img} src={require('src/img/am.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.music__swiper_slide)}>
                    <img className={style.music__swiper_img} src={require('src/img/rumours.jpg')} alt="" />
                </div>
            </div>
            <div className={classNames(style_bundle.swiper_button_prev, style.music__swiper_button_prev)}></div>
            <div className={classNames(style_bundle.swiper_button_next, style.music__swiper_button_next)}></div>
        </div>
        <div className={style.music__title}>
            <h2 className={style.music__title_text}>Rap</h2>
        </div>
        <div className={classNames(style_bundle.swiper, style.music__swiper)}>
            <div className={classNames(style_bundle.swiper_wrapper)}>
                <div className={classNames(style_bundle.swiper_slide, style.music__swiper_slide)}>
                    <img className={style.music__swiper_img} src={require('src/img/pimp-a-butterfly.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.music__swiper_slide)}>
                    <img className={style.music__swiper_img} src={require('src/img/igor.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.music__swiper_slide)}>
                    <img className={style.music__swiper_img} src={require('src/img/circles.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.music__swiper_slide)}>
                    <img className={style.music__swiper_img} src={require('src/img/introvert.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.music__swiper_slide)}>
                    <img className={style.music__swiper_img} src={require('src/img/nectar.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.music__swiper_slide)}>
                    <img className={style.music__swiper_img} src={require('src/img/murdered-by.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.music__swiper_slide)}>
                    <img className={style.music__swiper_img} src={require('src/img/run-the-jewels.jpg')} alt="" />
                </div>
            </div>
            <div className={classNames(style_bundle.swiper_button_prev, style.music__swiper_button_prev)}></div>
            <div className={classNames(style_bundle.swiper_button_next, style.music__swiper_button_next)}></div>
        </div>
    </section >);
}