import React from 'react';

//images
import image1 from '../../imgs/crypto3.jpg';
import image2 from '../../imgs/crypto4.jpg';

import image3 from '../../imgs/crypto3.jpg';
import image4 from '../../imgs/crypto4.jpg';
import image5 from '../../imgs/crypto5.jpg';
import image6 from '../../imgs/crypto6.jpg';
import image7 from '../../imgs/crypto7.jpg';
import image8 from '../../imgs/crypto8.jpg';
import image9 from '../../imgs/crypto1.jpg';
import image10 from '../../imgs/crypto10.jpg';
import image11 from '../../imgs/crypto11.jpg';
import image12 from '../../imgs/crypto12.jpg';
import image13 from '../../imgs/crypto14.jpg';
import image14 from '../../imgs/crypto15.jpg';
import image15 from '../../imgs/crypto16.jpg';
import image16 from '../../imgs/crypto15.jpg';
import image17 from '../../imgs/crypto16.jpg';
import image18 from '../../imgs/crypto17.jpg';
import image19 from '../../imgs/crypto18.jpg';
import image20 from '../../imgs/crypto19.jpg';
import image21 from '../../imgs/crypto20.jpg';
import image22 from '../../imgs/crypto21.jpg';
import image23 from '../../imgs/crypto22.jpg';


//images



import './Home.css';
import News from '../News/News';
import Chat from '../Chat/Chat';
import CreateGroup from '../CreateGroup/CreateGroup';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import { db } from '../../firebase';
import { collection, getDoc, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore/lite';

const Home = () => {
    const [newName, setNewName] = useState('');
    const [newAge, setNewAge] = useState(0);
    const usersCollectionRef = collection(db, "users");
    const groupsCollectionRef = collection(db, 'groups');

    const getUsers = async () => {   
        const data = await getDoc(usersCollectionRef);
        console.log('Users data ', data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    const createUser = async () => {
        await addDoc(usersCollectionRef, { name: 'testName' });
    }

    const updateUser = async (id) => {
        const userDoc = doc(db, "users", id);
        const newFields = { friends: 'newFriend' };
        await updateDoc(userDoc, newFields);
    }

    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id)
        await deleteDoc(userDoc);
    }

    const images = [
        image1, image2, image3, image4,
        image5, image6, image7, image8,
        image9, image10, image11
        , image12, image13, image14,
        image15, image16, image17, image18,
        image19, image20, image21, image22, image23
    ]

    const [chatPosition, setChatPosition] = useState({});
    const getNews = () => {
        console.log(JSON.parse(localStorage.getItem('items')));
    }

    const news = JSON.parse(localStorage.getItem('items'));
    const isChatOn = useSelector(state => state.chat.isChatOn);

    return (
        <div className='home'>

            <div className="left coins">
                <div className="news-container">
                    <div className="swipe">
                        <Swiper
                            modules={[Pagination]}
                            slidesPerView={3}
                            centeredSlides={true}
                            draggable={true}
                            autoplay={{ delay: 500 }}
                            effect={"flip"}
                            spaceBetween={0}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                                hideOnClick: true,

                            }}>
                            {news.map((item, index) => {
                                return (
                                    <SwiperSlide>
                                        <News id={index} image={images[index % 23]}
                                            title={item.title}
                                            seeMore={item.url} />
                                    </SwiperSlide>)
                            }
                            )}
                        </Swiper>
                    </div>
                    <div className="left-bottom img">
                        <div className='blur b1'></div>
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                        <div className='blur b2'></div>

                    </div>
                    <button id="get-news" onClick={getNews}>
                        Get News
                    </button>
                </div>
                <div className="news-bottom">Something goes here</div>
            </div> {/* LEFT */}
            <div className="midle">
                This is the Middle Side
            </div>
            <div className="Right">
                This is the right Side
                <CreateGroup />
            </div>

            {isChatOn && <motion.div drag="x"
                dragConstraints={chatPosition}
                dragElastic={0}
                initial={{ right: 0, bottom: -100 }}
                transition={{ type: 'spring' }}
                onMouseMove={() => { setChatPosition({ left: -window.innerWidth + 252, right: -2 }) }}
                className="chat">
                <Chat />
            </motion.div>}

        </div>
    )
}

export default Home;