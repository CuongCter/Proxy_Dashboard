import React from 'react'
import '../../assets/scss/components/_plans.scss'
const Plans = () => {
    return (
        <div className='plan'>
            <table class="plan__table">
                <thead className='plan__table-header'>
                    <tr >
                        <th>Order ID</th>
                        <th>Total Bandwidth</th>
                        <th>Used Bandwitdh</th>
                        <th>Total Request</th>
                        <th>Buy Time</th>
                        <th>Expire Time</th>
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