import style_bundle from 'src/bundle/swiper-bundle.module.css';
import style from './Movies.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import 'swiper/scss';


export function Movies() {

    const onLinkClick = (e: any) => {
        e.preventDefault();
        const closestItem = e.target;
        const name = closestItem.dataset.name;
        console.log(name);
        sessionStorage.setItem("movieName", name);
    }

    return (
        <section className={style.movies}>
            <div className={style.movies__title}>
                <h2 className={style.movies__title_text}>Action</h2>
            </div>
            <div className={classNames(style_bundle.swiper, style.movies__swiper)}>
                <Swiper spaceBetween={15}
                    slidesPerView={6}>
                    <SwiperSlide className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                        <Link className={style.movies__swiper_ref} onClick={onLinkClick} to="/video-player"><img className={style.movies__swiper_img}
                            src={require('src/img/once-upon.jpg')} alt="once-upon" data-name="once-upon" /></Link>
                    </SwiperSlide>
                    <SwiperSlide className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                        <img className={style.movies__swiper_img} src={require('src/img/drive.jpg')} alt="drive" />
                    </SwiperSlide>
                    <SwiperSlide className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                        <img className={style.movies__swiper_img} src={require('src/img/catch-me.jpg')} alt="catch-me" />
                    </SwiperSlide>
                    <SwiperSlide className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                        <img className={style.movies__swiper_img} src={require('src/img/interstellar.jpg')} alt="interstellar" />
                    </SwiperSlide>
                    <SwiperSlide className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                        <img className={style.movies__swiper_img} src={require('src/img/mad-max.jpg')} alt="mad-max" />
                    </SwiperSlide>
                    <SwiperSlide className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                        <img className={style.movies__swiper_img} src={require('src/img/kingsman.jpg')} alt="kingsman" />
                    </SwiperSlide>
                    <SwiperSlide className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                        <img className={style.movies__swiper_img} src={require('src/img/blade-runner.jpg')} alt="blade-runnner" />
                    </SwiperSlide>
                    <SwiperSlide className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                        <img className={style.movies__swiper_img} src={require('src/img/john-wick.jpg')} alt="john-wick" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={style.movies__title}>
                <h2 className={style.movies__title_text}>Drama</h2>
            </div>
            <div className={classNames(style_bundle.swiper, style.movies__swiper)}>
                <Swiper spaceBetween={15}
                    slidesPerView={6}>
                    <SwiperSlide className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)} data-name="la-la-land">
                        <Link className={style.movies__swiper_ref} onClick={onLinkClick} to="/video-player"><img className={style.movies__swiper_img}
                            src={require('src/img/la-la-land.jpg')} alt="" /></Link>
                    </SwiperSlide>
                    <SwiperSlide className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                        <img className={style.movies__swiper_img} src={require('src/img/green-book.jpg')} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                        <img className={style.movies__swiper_img} src={require('src/img/coco.jpg')} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                        <img className={style.movies__swiper_img} src={require('src/img/heaven-door.jpg')} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                        <img className={style.movies__swiper_img} src={require('src/img/into-the-wild.jpg')} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                        <img className={style.movies__swiper_img} src={require('src/img/eternal-sunshine.jpg')} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                        <img className={style.movies__swiper_img} src={require('src/img/500-days.jpg')} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={style.movies__title}>
                <h2 className={style.movies__title_text}>Comedy</h2>
            </div>
            <div className={classNames(style_bundle.swiper, style.movies__swiper)}>
                <Swiper spaceBetween={15}
                    slidesPerView={6}>
                    <SwiperSlide className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                        <img className={style.movies__swiper_img} src={require('src/img/crazy-stupid-love.jpg')} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                        <img className={style.movies__swiper_img} src={require('src/img/worlds-end.jpg')} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                        <img className={style.movies__swiper_img} src={require('src/img/intouchables.jpg')} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                        <img className={style.movies__swiper_img} src={require('src/img/grand-budapest.jpg')} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                        <img className={style.movies__swiper_img} src={require('src/img/hangover.jpg')} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className={classNames(style_bundle.swiper_slide, style.movies__swiper_slide)}>
                        <img className={style.movies__swiper_img} src={require('src/img/home-alone.jpg')} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section >);
}