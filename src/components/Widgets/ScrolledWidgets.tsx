import React, { useContext, useEffect, useRef, useState } from 'react'
import { Grid } from '@material-ui/core'
import InfiniteScroll from 'react-infinite-scroller';
import { useDivarContext } from '../context/divarContext';
import Widget from './Widget';

const ScrolledWidgets = () => {
  
  const { data, completeURL } = useDivarContext()
  const [scrolledData, setScrolledData] = useState([])
  const parentRef = useRef()
  let scrollPageNumber = 2
  let nextPageNumber = 2

  function handleLoadMore(page: any) {
    scrollPageNumber = page
    const getData = async () => {
      const response = await ((await fetch(`${completeURL}${completeURL.includes("?") ? `&page=${page}` : `?page=${page}`}`)).json())
      setScrolledData( prev => prev.concat(response))
      nextPageNumber = +response?.seo_details?.next[response?.seo_details?.next.length - 1]
    }
    getData()
    nextPageNumber = +data?.seo_details?.next[data?.seo_details?.next.length - 1]
  }

  useEffect(() => {
    setScrolledData([])
  }, [completeURL])

  return (
    <InfiniteScroll
        pageStart={1}
        loadMore={handleLoadMore}
        hasMore={scrollPageNumber === nextPageNumber}
        loader={<div className="loader" key={0}>Loading ...</div>}
    >
      <Grid spacing={2} direction="row" container style={{width: "70vw", marginTop: "20px"}}>
        {scrolledData.map(({widget_list} : {widget_list: any}) =>
          widget_list?.map((widget: any) =>
            <Grid key={widget.data.title} item>
              <Widget widgetData={widget.data} />
            </Grid>)
        )}
      </Grid>
    </InfiniteScroll>
  )
}

export default ScrolledWidgets
