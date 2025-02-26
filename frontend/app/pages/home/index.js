"use client";
import { useState, useEffect } from "react";
import FlowChart from "@/app/components/FlowChart";
import LeakAlert from "@/app/components/LeakAlert";

export default function Home() {
    
    const [flowRate, setFlowRate] = useState(0);
    const [leakDetected, setLeakDetected] = useState(false);
    const [flowData, setFlowData] = useState([]);

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:5001");

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setFlowRate(data.flowRate);
            setLeakDetected(data.leakDetected);

            setFlowData((prevData) => [...prevData.slice(-20), { time: new Date().toLocaleTimeString(), flowRate: data.flowRate }]);
        };

        return () => ws.close();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-2xl text-gray-950 font-bold mb-4">Water Flow Monitoring</h1>
            <LeakAlert leakDetected={leakDetected} />
            <FlowChart flowData={flowData} />
            <p className="mt-4 text-lg text-gray-900">Current Flow Rate: <strong>{flowRate} L/min</strong></p>
        </div>
    );
}
