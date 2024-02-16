import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
function Blogmedia() {
    return (<>
            <div className="container">
            <h1 style={{ textAlign: "center", margin: "40px" }}>Blogs media</h1>
            <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
                <div class="row">
                <SwiperSlide> 
                    <div class="col-sm">
                        <div class="card bg-primary text-white text-center p-3">
                            <blockquote class="blockquote mb-0">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore amet est recusandae, commodi reiciendis assumenda,
                                    voluptatibus sunt architecto tempore eligendi facilis quos quibusdam consequatur fuga modi nisi possimus iste dolor!</p>
                                <footer class="blockquote-footer text-white">
                                    <small>
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                    </SwiperSlide>

                     <SwiperSlide><div class="col-sm">
                        <div class="card bg-primary text-white text-center p-3">
                            <blockquote class="blockquote mb-0">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore amet est recusandae, commodi reiciendis assumenda,
                                    voluptatibus sunt architecto tempore eligendi facilis quos quibusdam consequatur fuga modi nisi possimus iste dolor!</p>
                                <footer class="blockquote-footer text-white">
                                    <small>
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div class="col-sm">
                        <div class="card bg-primary text-white text-center p-3">
                            <blockquote class="blockquote mb-0">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore amet est recusandae, commodi reiciendis assumenda,
                                    voluptatibus sunt architecto tempore eligendi facilis quos quibusdam consequatur fuga modi nisi possimus iste dolor!</p>
                                <footer class="blockquote-footer text-white">
                                    <small>
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div class="col-sm">
                        <div class="card bg-primary text-white text-center p-3">
                            <blockquote class="blockquote mb-0">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore amet est recusandae, commodi reiciendis assumenda,
                                    voluptatibus sunt architecto tempore eligendi facilis quos quibusdam consequatur fuga modi nisi possimus iste dolor!</p>
                                <footer class="blockquote-footer text-white">
                                    <small>
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div class="col-sm">
                        <div class="card bg-primary text-white text-center p-3">
                            <blockquote class="blockquote mb-0">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore amet est recusandae, commodi reiciendis assumenda,
                                    voluptatibus sunt architecto tempore eligendi facilis quos quibusdam consequatur fuga modi nisi possimus iste dolor!</p>
                                <footer class="blockquote-footer text-white">
                                    <small>
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div class="col-sm">
                        <div class="card bg-primary text-white text-center p-3">
                            <blockquote class="blockquote mb-0">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore amet est recusandae, commodi reiciendis assumenda,
                                    voluptatibus sunt architecto tempore eligendi facilis quos quibusdam consequatur fuga modi nisi possimus iste dolor!</p>
                                <footer class="blockquote-footer text-white">
                                    <small>
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                    </SwiperSlide>
                </div>
                </Swiper>
            </div>
    </>);
}

export default Blogmedia;