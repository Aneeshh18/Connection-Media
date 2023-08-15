import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TransactionCard from './TransactionCard';

const Transaction = () => {

    const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

    const dummyData = [
        { id: 1, name: names[0], amount: 15, date: '18-04-2023' },
        { id: 2, name: names[1], amount: 20, date: '19-04-2023' },
        { id: 3, name: names[2], amount: 10, date: '20-04-2023' },
        { id: 4, name: names[3], amount: 25, date: '21-04-2023' },
        { id: 5, name: names[4], amount: 30, date: '22-04-2023' }
    ];

    return (
        <div className='box m-4 mt-10 p-2 border md:w-[700px] xl:w-[1000px] overflow-x-hidden'>
            <div className='flex m-3 p-3 ml-10 font-bold text-xl'>
                Transaction History
            </div>

            <div className='input flex items-center justify-center'>
                <Input className='w-full md:w-[645px] p-2' 
                    placeholder='Search Activity/Transaction'
                    allowClear
                    prefix={<SearchOutlined />}
                />
            </div>
            
            <div className='mt-9 ml-6 max-h-[400px] overflow-y-auto'>
                {dummyData.map(item => (
                    <TransactionCard
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        date={item.date}
                    />
                ))}
            </div>
        </div>
    );
}

export default Transaction;
