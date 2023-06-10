import React from 'react'
import '../../assets/scss/components/_plans.scss'
import IconSelect from '../../assets/images/Select.png'
const Plans = () => {
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
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td>Data 3</td>
                    </tr>
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td>Data 3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Plans