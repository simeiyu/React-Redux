import React from 'react'
import {ALL, COMPLETED, UNCOMPLETED} from '../../constants'
import Link from './link'
import './style.css'

const Filter = () => (
    <p className="filters">
       <Link filter={ALL}>{ALL}</Link> 
       <Link filter={COMPLETED}>{COMPLETED}</Link> 
       <Link filter={UNCOMPLETED}>{UNCOMPLETED}</Link> 
    </p>
)

export default Filter
