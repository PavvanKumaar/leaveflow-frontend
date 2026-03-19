import React from 'react'
import {useLeave} from '../components/LeaveContext.jsx'
import Sidebar from '../components/Sidebar.jsx'
export default function RequestHistory(){
    const {stats,requests,loading} = useLeave()
    return (
        <div className = "flex min-h-screen bg-[#f0f0f0] font-sans">
            <Sidebar name = 'requests'/>
            <div class="flex-1 p-6 bg-gray-50 min-h-screen">
                <div class="max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    
                    <div class="flex items-center justify-between p-6">
                    <h2 class="text-2xl font-bold text-gray-800">Leave Request History</h2>
                    
                    <div class="flex gap-4">
                        <div class="relative">
                        <button class="flex items-center justify-between w-40 px-4 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                            <span>Leave Status</span>
                            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        </div>
                        
                        <div class="relative">
                        <button class="flex items-center justify-between w-40 px-4 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                            <span>Leave type</span>
                            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        </div>
                    </div>
                    </div>

                    <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                        <tr class="bg-purple-50/50">
                            <th class="px-6 py-4 text-sm font-semibold text-gray-700">Leave Type</th>
                            <th class="px-6 py-4 text-sm font-semibold text-gray-700">Dates Requested</th>
                            <th class="px-6 py-4 text-sm font-semibold text-gray-700">Reason</th>
                            <th class="px-6 py-4 text-sm font-semibold text-gray-700">Submitted On</th>
                            <th class="px-6 py-4 text-sm font-semibold text-gray-700">Status</th>
                            <th class="px-6 py-4 text-sm font-semibold text-gray-700">Assigned To</th>
                            <th class="px-6 py-4 text-sm font-semibold text-gray-700"></th> </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                        <tr class="hover:bg-gray-50 transition-colors">
                            <td class="px-6 py-4 text-sm text-gray-600"></td>
                            <td class="px-6 py-4 text-sm text-gray-600"></td>
                            <td class="px-6 py-4 text-sm text-gray-600"></td>
                            <td class="px-6 py-4 text-sm text-gray-600"></td>
                            <td class="px-6 py-4 text-sm text-gray-600"></td>
                            <td class="px-6 py-4 text-sm text-gray-600"></td>
                            <td class="px-6 py-4 text-right">
                                <button class="text-purple-600 hover:text-purple-900 px-2">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    )
}