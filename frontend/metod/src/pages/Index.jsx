import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const Index = () => {

    return (
        <>
            <div className="main_index">
                <div className="stock">
                    <div className="title">
                        <p>Step to Future</p>
                    </div>
                    <div className="carousel">
                        <Link to="/information/rules">
                            <div className="card">
                                <div className="info">
                                    <p className="main">
                                        Правила ПДД!
                                    </p>
                                    <p className="desc">
                                        Карточка кликабельна
                                    </p>
                                </div>
                                <div className="img">
                                    <img src="https://i.ibb.co/6J2qddg/png-clipart-traffic-light-traffic-light-thumbnail-Photo-Room-png-Photo-Room.png" alt="" />
                                </div>
                            </div>
                        </Link>

                        <Link to="/information/advice">
                            <div className="card2">
                                <div className="info">
                                    <p className="main">
                                        Советы водителям!
                                    </p>
                                    <p className="desc">
                                        Карточка кликабельна
                                    </p>
                                </div>
                                <div className="img">
                                    <img src="https://i.ibb.co/6J2qddg/png-clipart-traffic-light-traffic-light-thumbnail-Photo-Room-png-Photo-Room.png" alt="" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                
                <div className="info_block">
                    <div className="title">
                        <p>Smart TL:</p>
                    </div> 
                    <div className="desc">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, fuga optio consequatur nostrum ea eius dolore ipsa hic impedit iusto est id delectus! Et modi maxime vitae totam nesciunt perferendis optio explicabo soluta iusto dolores officiis perspiciatis placeat animi sequi deserunt, voluptates velit omnis in reiciendis. Saepe adipisci, sint debitis illum, eius dignissimos in reiciendis unde atque modi incidunt distinctio pariatur magnam facilis nesciunt quia ipsam, accusamus aliquid ab inventore natus. Sunt soluta officia repudiandae at similique deserunt vitae possimus. Laudantium fuga unde voluptatum veniam, eum delectus itaque maxime voluptatibus reprehenderit nemo amet magni necessitatibus voluptas vero aliquam. Necessitatibus, quae?</p>
                    </div>
                </div>
            
            </div>
        </>
    );
};

export default Index;