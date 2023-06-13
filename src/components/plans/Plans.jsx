import React from 'react'
import '../../assets/scss/components/_plans.scss'
import IconSelect from '../../assets/images/Select.png'
import { formatBytes, formatTime } from '../../services/utils'

const Plans = (props) => {
    return (
        <div className='plan'>
            <table class="plan__table">
                <thead className='plan__table-header'>
                    <tr >
                        <th>Order ID <img className='iconSelect' src={IconSelect} alt="" /> </th>
                        <th>Total Bandwidth <img className='iconSelect' src={IconSelect} alt="" /></th>
                        <th>Used Bandwitdh <img className='iconSelect' src={IconSelect} alt="" /></th>
                        <th>Total Request <img className='iconSelect' src={IconSelect} alt="" /></th>
                        <th>Buy Time <img className='iconSelect' src={IconSelect} alt="" /></th>
                        <th>Expire Time <img className='iconSelect' src={IconSelect} alt="" /></th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className='plan__table-body'>      
                   {props.billings.map((item)=>{
                    return (
                       <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{formatBytes(item.totalBandwidth)}</td>
                        <td>{formatBytes(item.currentBandwidth)}</td>
                        <td>{item.totalRequest}</td>
                        <td>{formatTime(item.buyTime)}</td>
                        <td>{formatTime(item.expiredTime)}</td>
                        {
                            item.isActive ? <td className="list__table-body-status">Ative</td> : <td className="services-option-youtube">DeAtive</td>
                        }
                        
                    </tr>
                   
                        )
                   })}
                </tbody>
            </table>
        </div>
    )
}

export default Plans