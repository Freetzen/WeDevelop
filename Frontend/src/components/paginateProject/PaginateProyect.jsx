import React from 'react'
import projectsProvider from '../../utils/provider/projectsProvider/projectsProvider'
import style from './PaginateProyect.module.css'

const PaginateProyect = ({ totalInfo, selectedOptions, dataInit, bringData }) => {


  const handleNext = async () => {
    if (!selectedOptions.length) {
      dataInit(totalInfo.nextPage)
    }
    else {
      bringData(totalInfo.nextPage)
    }
  };

  const handlePrev = async () => {
    if (!selectedOptions.length) {
      dataInit(totalInfo.prevPage)
    }
    else {
      bringData(totalInfo.prevPage)
    }
  };

  return (
    <div>
      {
        totalInfo.hasPrevPage ? <button className={style.Buttons} onClick={handlePrev}>Prev</button> : null
      }
      {
        totalInfo.hasNextPage ? <button className={style.Buttons} onClick={handleNext}>Next</button> : null
      }
    </div>
  )
}

export default PaginateProyect