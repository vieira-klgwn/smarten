import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function FlowChart({ flowData }) {
    return (
        <div className="w-full max-w-2xl bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2">Flow Rate Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={flowData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="flowRate" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
