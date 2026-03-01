"use client"

import { motion,useAnimationFrame } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function Cube() {
    const ref = useRef<HTMLDivElement>(null)

    const [paused, setPaused] = useState(false)
    
    // 回転用の「仮想時間」
    const rotationTimeRef = useRef(0)
     
    // 日付と時間を分けて持つ
    const [dateStr, setDateStr] = useState("")
    const [timeStr, setTimeStr] = useState("")

    useEffect(() => {
        const updateTime = () => {
        const now = new Date()

        // 日本時間前提（ブラウザが日本ならこれでOK）
        const year = now.getFullYear()
        const month = String(now.getMonth() + 1).padStart(2, "0")
        const day = String(now.getDate()).padStart(2, "0")
        const hour = String(now.getHours()).padStart(2, "0")
        const minute = String(now.getMinutes()).padStart(2, "0")

        setDateStr(`${year}.${month}.${day}`) // 2026.03.01
        setTimeStr(`${hour}:${minute}`)       // 18:42
        }

        updateTime()
        const interval = setInterval(updateTime, 60000) // 1秒ごとに更新

        return () => clearInterval(interval)
    }, [])

    useAnimationFrame((t, delta) => {
        if (!ref.current) return

        // paused のときは逆方向に進める
        const dir = paused ? -1 : 1
        const speed = 0.5 // ここを 0.5 とかにすると全体の回転速度調整できる

        rotationTimeRef.current += delta * dir * speed

        const vt = rotationTimeRef.current

        // 回転は仮想時間 vt から計算
        const rotate = Math.sin(vt / 10000) * 200

        // y は今まで通り t から計算（paused 無関係）
        const y = Math.sin(t / 1000) * -40

        ref.current.style.transform =
            `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
    })

    return (
    <div className="cube-container">
        <div className="center-text">
            <div>{dateStr}</div>
            <div>{timeStr}</div>
        </div>
        <div
            className="cube"
            ref={ref}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            >
            <div className="side front" />
            <div className="side left" />
            <div className="side right" />
            <div className="side top" />
            <div className="side bottom" />
            <div className="side back" />
        </div>
        <StyleSheet />
    </div>
    )
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
    return (
        <style>{`
        :root {
            --hue-1-transparent: rgba(255, 0, 0, 0.6);
            --hue-2-transparent: rgba(0, 255, 0, 0.6);
            --hue-3-transparent: rgba(0, 0, 255, 0.6);
            --hue-4-transparent: rgba(255, 255, 0, 0.6);
            --hue-5-transparent: rgba(0, 255, 255, 0.6);
            --hue-6-transparent: rgba(255, 0, 255, 0.6);
        }  
            
        .cube-container {
            perspective: 1600px;
            width: 200px;
            height: 200px;
            margin: 0;
            display: grid;
            place-items: center;
        }
        
        .center-text {
            font-size: 18px;
            font-weight: 500;
            color: white;
            text-align: center;
            line-height: 1.4;
            mix-blend-mode: difference;
            z-index: 10;
        }

        .center-text,
        .cube {
            grid-area: 1 / 1;
        }

        .cube {
            width: 200px;
            height: 200px;
            position: relative;
            transform-style: preserve-3d;
        }

        .side {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: red;
            opacity: 0.6;
        }

        .front {
            transform: rotateY(0deg) translateZ(100px);
            background-color: var(--hue-1-transparent);
        }
        .right {
            transform: rotateY(90deg) translateZ(100px);
            background-color: var(--hue-2-transparent);
        }
        .back {
            transform: rotateY(180deg) translateZ(100px);
            background-color: var(--hue-3-transparent);
        }
        .left {
            transform: rotateY(-90deg) translateZ(100px);
            background-color: var(--hue-4-transparent);
        }
        .top {
            transform: rotateX(90deg) translateZ(100px);
            background-color: var(--hue-5-transparent);
        }
        .bottom {
            transform: rotateX(-90deg) translateZ(100px);
            background-color: var(--hue-6-transparent);
        }

    `}</style>
    )
}
