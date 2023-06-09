    import React from 'react'
    
    const Billings = () => {
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
                <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                    <td>Data 1</td>
                    <td>Data 2</td>

                </tr>
                <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                    <td>Data 1</td>
                    <td>Data 2</td>
                </tr>
            </tbody>
        </table>
    </div>
      )
    }
    
    export default Billings