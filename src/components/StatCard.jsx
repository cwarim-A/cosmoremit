import React from 'react'

const StatCard = ({ title, amount, gradient }) => {
    return (
        <div className={`rounded-2xl p-5  text-white w-full h-[180px]  md:h-[150px] md:w-1/2 ${gradient}`}>
            <p className="text-sm opacity-80 mt-8">{title}</p>
            <h2 className="text-xl font-bold mt-2">{amount}</h2>
        </div>

    )
}

export default StatCard