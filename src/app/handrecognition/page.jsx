"use client"
import React, { useRef, useState, useEffect } from 'react'
import Webcam from "react-webcam";
import * as tf from '@tensorflow/tfjs'
import * as handpose from '@tensorflow-models/handpose'
import { GestureEstimator, Gestures } from 'fingerpose'
import { drawHand } from '@/lib/draw';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { handSos, thumbsDownGesture } from '@/lib/handTrack';
import Image from 'next/image'
import thumb from '../../../public/thumb.png';
import thumbdow from "../../../public/thumbdow.png"

export default function Page() {
    const webcamRef = useRef(null)
    const canvaRef = useRef(null)
    const [status, setStatus] = useState(false)
    const [emoij, setEmoij] = useState()


    const handposeHand = async () => {
        const handModel = await handpose.load()

        setInterval(() => {
            detect(handModel)

        }, 100)
        setStatus(true)
    }


    const detect = async (handModel) => {
        if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState === 4) {
            const webcam = webcamRef.current.video
            const webcamWidth = webcamRef.current.video.videoWidth; // Correct width property
            const webcamHeight = webcamRef.current.video.videoHeight; // Correct height property

            webcamRef.current.video.width = webcamWidth
            webcamRef.current.video.height = webcamHeight

            canvaRef.current.width = webcamWidth
            canvaRef.current.height = webcamHeight
            const hand = await handModel.estimateHands(webcam)

            if (hand.length > 0) {
                const GE = new GestureEstimator([
                    handSos,
                    thumbsDownGesture
                ]);


                const detectHandTrack = await GE.estimate(hand[0].landmarks, 8)
                if (detectHandTrack !== null && !detectHandTrack.gestures.length > 0) {
                    setEmoij('Không thấy tín hiệu')
                }
                if (detectHandTrack.gestures !== "undefined" && detectHandTrack.gestures.length > 0) {
                    const score = detectHandTrack.gestures.map(prediction => prediction.score)
                    const maxConfidence = score.indexOf(Math.max.apply(null, score))
                    const gestures = detectHandTrack.gestures[maxConfidence].name

                    setEmoij(gestures);

                }
            }
            const ctx = canvaRef.current.getContext('2d')
            drawHand(hand, ctx)
        }
    }
    useEffect(() => {
        handposeHand();
    }, []);

    return (
        <>
            <h1>Nhận diện bàn tay và Khi bóp bàn tay lạy thì nó sẽ nhận ra đó là tín hiệu SOS vàchupj hình lại những tấm ảnh xung quanh trong 1  phút làm tư liệu (chưa hoàn tất) !!!)</h1>

            {status ? (
                <>
                    <Webcam
                        ref={webcamRef}
                        style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            left: 0,
                            right: 0,
                            textAlign: "center",
                            zIndex: 9,
                            width: "80vw",
                            height: "auto",
                            maxWidth: "640px",
                            maxHeight: "480px",
                        }}
                    />

                    <canvas
                        ref={canvaRef}
                        style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            left: 0,
                            right: 0,
                            textAlign: "center",
                            zIndex: 9,
                            width: "80vw",
                            height: "auto",
                            maxWidth: "640px",
                            maxHeight: "480px",
                        }}
                    />
                    <div style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zIndex: 9,
                        width: "80vw",
                        height: "auto",
                        maxWidth: "640px",
                        maxHeight: "480px",
                        background: 'red'
                    }}>
                        {emoij !== '' ? emoij : "Không tìm thấy"}
                    </div>
                </>
            ) : (
                <div><Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box></div>
            )}
            <div style={{
                position: "absolute",
                display: "flex",
                top: " 70%"
            }}>
                <Image
                    src={thumb}
                    width={500}
                    height={500}
                    alt="Bóp tay lại =]]"
                />
                <Image
                    src={thumbdow}
                    width={500}
                    height={500}
                    alt="tệ thật =]]"
                />
            </div>
        </>
    )
}
