import React from 'react';
import { Input } from 'antd';

export default function Col_mange() {
    const { TextArea } = Input;
    return (
        <div className='flex w-full h-screen bg-gray-300 '>
            <div className='h-full bg-gray-400 '>
                <div className='flex flex-col items-center '>
                    <p className='text-2xl '>代收付管理</p>
                    <p>編號</p>
                    <p>1</p>
                    <div className='inline-flex '>
                        <p>房號</p>
                        <Input placeholder='Basic usage' />
                    </div>
                    <div className='inline-flex '>
                        <p>費用名稱</p>
                        <select name="" id="">
                            <option value="">電費</option>
                            <option value="">水費</option>
                            <option value="">管理費</option>
                        </select>
                    </div>
                    <div className='inline-flex '>
                        <p>費用金額:</p>
                        <Input placeholder='Basic usage' />
                    </div>
                    <div className='inline-flex '>
                        <p>繳納方式:</p>
                        <select name="" id="">
                            <option value="現金">現金</option>
                            <option value="匯款">匯款</option>
                            <option value="支票">支票</option>
                        </select>
                    </div>
                    <div className='inline-flex '>
                        <p>備註:</p>
                        <TextArea placeholder='Basic usage' />
                    </div>
                    <div className='inline-flex '>
                        <p>匯款銀行:</p>
                        <Input placeholder='Basic usage' />
                    </div>
                    <div className='inline-flex '>
                        <p>匯款帳號:</p>
                        <Input placeholder='Basic usage' />
                    </div>
                </div>
            </div>

        </div>
    );
}

