import React from 'react'
import '../../assets/scss/components/_plansBillings.scss'
const PlansBillings = () => {
  return (
    <div className='planBilling'>
        <div className="planBilling__header">
            <div className='planBilling__header-choose'>
                <button>Plans</button>
                <button>Billings</button>
            </div>
            <div className="planBilling__header-filter">
                <h3>Filter</h3>
                <div>None</div>
                <div>Asc</div>
                <input type="text" placeholder='Search' />
            </div>
        </div>
    </div>
  )
}

export default PlansBillings