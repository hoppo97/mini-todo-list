import React from 'react'
import { Button } from '../UI/Button'
import {filter} from './../../utils.js'
export const Filters = ({changeIsActive, isActive}) => {
  return (
    <div>
        {filter.map((item) => (
            <Button
              key={item.id}
              type={isActive === item.filter ? 'active' : item.color}
              onClick={() => changeIsActive(item.filter)}
            >
              {item.title}
            </Button>
          ))}
      </div>
  )
}
