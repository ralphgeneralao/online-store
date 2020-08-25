import React from 'react'
import CollectionItem from '../collection-item/CollectionItem'

import './collectionPreview.scss'

const CollectionPreview = (props) => {
  const { collection } = props
  const { title, items } = collection
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {
          items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
            // <div key={id}>{name}</div>
          ))
        }
      </div>
    </div>
  )
}

export default CollectionPreview