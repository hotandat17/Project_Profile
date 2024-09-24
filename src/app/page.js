"use client"
import Image from "next/image";
import hd from '../../public/loli.png'
import certificate from '../../public/certificate.png'
import '@/assets/css/containerProfile.css'
import '@/assets/css/containerTime.css'
import '@/assets/css/containerVN.css'
import '@/assets/css/container3D.css'
import { Tilt } from 'react-tilt'
import { ReactTyped } from "react-typed";
import Link from 'next/link'
import { faTiktok, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model1 from "../../public/Girl1";

export default function Home() {
  const [day, setDay] = useState()
  const [month, setMonth] = useState()
  const [year, setYear] = useState()
  const [hours, setHours] = useState()
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()

  const dateTime = () => {
    const date = new Date();
    setDay(String(date.getDate()).padStart(2, '0'));
    setMonth(String(date.getMonth() + 1).padStart(2, '0'));
    setYear(String(date.getFullYear()).padStart(2, '0'));
    setHours(String(date.getHours()).padStart(2, '0'));
    setMinutes(String(date.getMinutes()).padStart(2, '0'));
    setSeconds(String(date.getSeconds()).padStart(2, '0'));
  }
  useEffect(() => {
    setInterval(dateTime, 1000);
  }, [])

  const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  const handleControlsChange = (event) => {
    const { x, y, z } = event.target.object.position; // Tọa độ hiện tại của camera
    // console.log(`Camera Position: x: ${x}, y: ${y}, z: ${z}`);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="containerProfile">
        <Tilt options={defaultOptions} className="profileLeft">
          <div className="containerProfileLeft">
            <Image
              className="imageAnimation"
              src={hd}
              alt="Hồ Đạt"
              width={400}
              height={400} />
          </div>
        </Tilt>
        <div className="containerProfileRight">
          <span>Hey i&rsquo;m </span> <span>Hồ Đạt</span> <br />
          <span>I&rsquo;m </span>
          <ReactTyped
            strings={[
              "Wibu chính hiệu",
              "Titoker 3fl",
              "Dev thất nghiệp",
              "Soái ca khoai to",
            ]}
            typeSpeed={40}
            backSpeed={50}

            loop
          >
            <span className="typeText">Wibu chính hiệu</span>
          </ReactTyped>
          <br />
          <p>Chào các bạn! Mình là Đạt senPai ´꒳`, một otaku chính hiệu với mức độ wibu I&rsquo;siêu phàm.I&rsquo; Nếu bạn thấy mình đang lạc vào thế giới anime, đừng lo – đó chỉ là mình đang tìm cách để đánh bại quái vật (hay ít nhất là tìm đường ra khỏi phòng ngủ của mình). Mình có thể tranh luận về sức mạnh của nhân vật anime suốt ngày mà không thấy chán, và nếu bạn cần một người bạn để cười sảng khoái về những tình tiết hài hước trong manga, thì mình chính là người bạn lý tưởng!</p>
          <div className="containerIcon">
            <ul>
              <li><Link href="https://www.tiktok.com/@ho.dat.09.08.02?is_from_webapp=1&sender_device=pc" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTiktok} bounce />
                </a>
              </Link></li>
              <li>
                <Link href="https://www.facebook.com/tandat.ho.566" legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} bounce />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/hotandat17" legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} bounce />
                  </a>
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </section>

      <section className="containerTime">
        <div>
          <h1>{year}</h1>
          <h2>{day}<span className="time">-</span>{month}  - {hours}<span className="time">:</span>{minutes}<span className="time">:</span>{seconds}</h2>
        </div>
      </section>

      <section className='container3D'>
        <div>
          <Canvas camera={{
            position: [-146.04657119518134, 81.64441727476375, 20.059030655180095]
          }}>
            <Suspense fallback={null}>
              <ambientLight scale={-0.5} />
              <OrbitControls enableZoom={false} target={[0, 45, 0]} />
              <Model1 />
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
        </div>
        <div className="imageCer">

          <Image
            className="imagea"
            src={certificate}
            alt="Hồ Đạt"
            width={665}
            height={400} />
        </div>
      </section>

      <section className="containerVN">
        <div className="flag">
          <div className="star"></div>
        </div>
        <div>
          <h1>VIỆT NAM</h1>
          <h3>Tôi yêu Việt Nam</h3>
          <p>( I Love Vietnamese )</p>
          <h3>Hoàng Sa -Trường Sa <br /> là của Việt Nam</h3>
          <p>( Hoang Sa - Truong Sa belong to Vietnamese )</p>
          <span> Trung Quốc và cali đầu buồi </span>
        </div>
      </section>
    </main>
  );
}
