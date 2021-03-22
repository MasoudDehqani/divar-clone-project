import React, { useContext } from 'react'
import { DivarContext } from '../context/divarContext'
import SuggestionButton from './SuggestionButton'

const SuggestionBar = () => {

  const { data } = useContext(DivarContext)

  return (
    <div style={{margin: "10px 0"}}>
      {data.suggestion_list?.map(({displayed_text, value} : {displayed_text: any, value: any}) => 
        <SuggestionButton 
          text={displayed_text} 
          categoryName={value.category.value}
        />)}    
    </div>
  )
}

export default SuggestionBar
