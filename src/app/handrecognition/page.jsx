"use client"
import React, { useRef } from 'react'
import Webcam from "react-webcam";
import * as tf from '@tensorflow/tfjs'
import * as handpose from '@tensorflow-models/handpose'
import { drawHand } from '@/lib/draw';


export default function Page() {
    const webcamRef = useRef(null)
    const canvaRef = useRef(null)

    const handposeHand = async () => {
        const handModel = await handpose.load()
        setInterval(() => {
            detect(handModel)
        }, 100)

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
            // console.log(hand)
            const ctx = canvaRef.current.getContext('2d')
            drawHand(hand, ctx)
        }
    }
    handposeHand()
    return (
        <>
            <h1>Nhận diện bàn tay và vẽ tranh (chưa hoàn thành vẽ tranh !!!)</h1>
            <Webcam ref={webcamRef}
                tyle={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    zindex: 9,
                    width: 640,
                    height: 480,
                }}
            />
            <canvas ref={canvaRef}
                style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 0,
                    right: "42em",
                    textAlign: "center",
                    zindex: 9,
                    width: 640,
                    height: 480,
                }}
            />
        </>
    )
}
