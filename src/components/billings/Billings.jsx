import React from 'react'
import { formatBytes, formatTime } from '../../services/utils'
    
    const Billings = (props) => {
      return (
        <div className='plan'>
        <table class="plan__table">
            <thead className='plan__table-header'>
                <tr >
                    <th>ID</th>
                    <th>Amount</th>
                    <th>Bandwitdh</th>
                    <th>Buy Time</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody className='plan__table-body'>      
            {props.billings.map((item)=>{
                    return (
                       <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>${item.amount}</td>
                        <td>{formatBytes(item.totalBandwidth)}</td>
                        <td>{formatTime(item.buyTime)}</td>
                    </tr>
                   
                        )
                   })}
            </tbody>
        </table>
    </div>
      )
    }
    
    export default Billings