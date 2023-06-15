import React from 'react'

const AppWrapp = (Component, id, classCont = "") => function HOC() {
  return (
    <div className={`app__wrapp ${classCont}`} id={`${id}`}>
      <Component/>
    </div>
  )
}

export default AppWrapp