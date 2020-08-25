import React from 'react'

import './collectionItem.scss'
const CollectionItem = (props) => {
  const { imageUrl1, name, price } = props.item
  return (
    <div className='collection-item'>
      <div className='image'
        style={{
          backgroundImage: `url(${imageUrl1})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  )
}

export default CollectionItem