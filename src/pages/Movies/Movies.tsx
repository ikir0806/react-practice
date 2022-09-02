import style_bundle from 'src/css/swiper-bundle.module.css';
import style from './Movies.module.scss';

import classNames from 'classnames';
import { Link } from 'react-router-dom';

export function Movies() {
    const onLinkClick = (e: any) => {
        e.preventDefault();
        const closestItem = e.target;
        const name = closestItem.dataset.name;
        console.log(name);
        sessionStorage.setItem("movieName", name);
    }

    return (<section className={style.movies}>
        <div className={style.movies__title}>
            <h2 className={style.movies__title_text}>Action</h2>
        </div>
        <div className={classNames(style_bundle.swiper, style.movies__swiper)}>
            <div className={classNames(style_bundle.swiper_wrapper)}>
                <div className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                    <Link className={style.movies__swiper_ref} onClick={onLinkClick} to="/video-player"><img className={style.movies__swiper_img}
                        src={require('src/img/once-upon.jpg')} alt="once-upon" data-name="once-upon" /></Link>
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                    <img className={style.movies__swiper_img} src={require('src/img/drive.jpg')} alt="drive" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                    <img className={style.movies__swiper_img} src={require('src/img/catch-me.jpg')} alt="catch-me" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                    <img className={style.movies__swiper_img} src={require('src/img/interstellar.jpg')} alt="interstellar" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                    <img className={style.movies__swiper_img} src={require('src/img/mad-max.jpg')} alt="mad-max" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                    <img className={style.movies__swiper_img} src={require('src/img/kingsman.jpg')} alt="kingsman" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                    <img className={style.movies__swiper_img} src={require('src/img/blade-runner.jpg')} alt="blade-runnner" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                    <img className={style.movies__swiper_img} src={require('src/img/john-wick.jpg')} alt="john-wick" />
                </div>
            </div>
            <div className={classNames(style_bundle.swiper_button_prev, style.movies__swiper_button_prev)}></div>
            <div className={classNames(style_bundle.swiper_button_next, style.movies__swiper_button_next)}></div>
        </div>
        <div className={style.movies__title}>
            <h2 className={style.movies__title_text}>Drama</h2>
        </div>
        <div className={classNames(style_bundle.swiper, style.movies__swiper)}>
            <div className={classNames(style_bundle.swiper_wrapper)}>
                <div className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)} data-name="la-la-land">
                    <Link className={style.movies__swiper_ref} onClick={onLinkClick} to="/video-player"><img className={style.movies__swiper_img}
                        src={require('src/img/la-la-land.jpg')} alt="" /></Link>
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                    <img className={style.movies__swiper_img} src={require('src/img/green-book.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                    <img className={style.movies__swiper_img} src={require('src/img/coco.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                    <img className={style.movies__swiper_img} src={require('src/img/heaven-door.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                    <img className={style.movies__swiper_img} src={require('src/img/into-the-wild.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                    <img className={style.movies__swiper_img} src={require('src/img/eternal-sunshine.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                    <img className={style.movies__swiper_img} src={require('src/img/500-days.jpg')} alt="" />
                </div>
            </div>
            <div className={classNames(style_bundle.swiper_button_prev, style.movies__swiper_button_prev)}></div>
            <div className={classNames(style_bundle.swiper_button_next, style.movies__swiper_button_next)}></div>
        </div>
        <div className={style.movies__title}>
            <h2 className={style.movies__title_text}>Comedy</h2>
        </div>
        <div className={classNames(style_bundle.swiper, style.movies__swiper)}>
            <div className={classNames(style_bundle.swiper_wrapper)}>
                <div className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                    <img className={style.movies__swiper_img} src={require('src/img/crazy-stupid-love.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                    <img className={style.movies__swiper_img} src={require('src/img/worlds-end.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                    <img className={style.movies__swiper_img} src={require('src/img/intouchables.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                    <img className={style.movies__swiper_img} src={require('src/img/grand-budapest.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                    <img className={style.movies__swiper_img} src={require('src/img/hangover.jpg')} alt="" />
                </div>
                <div className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                    <img className={style.movies__swiper_img} src={require('src/img/home-alone.jpg')} alt="" />
                </div>
            </div>
            <div className={classNames(style_bundle.swiper_button_prev, style.movies__swiper_button_prev)}></div>
            <div className={classNames(style_bundle.swiper_button_next, style.movies__swiper_button_next)}></div>
        </div>
    </section>);
}