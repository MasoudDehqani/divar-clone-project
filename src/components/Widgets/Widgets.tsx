import { Grid } from '@material-ui/core'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useDivarContext } from '../context/divarContext'
import Widget from './Widget'
import { v4 as uuidv4 } from 'uuid';

const Widgets = () => {

  const { data, setData, completeURL } = useDivarContext()
  let observer = useRef(null)
  // const [page, setPage] = useState(!data.seo_details?.next[data?.seo_details?.next.length - 1] ? "" : data.seo_details?.next[data?.seo_details?.next.length - 1])

  // console.log(data.seo_details?.next[data?.seo_details?.next.length - 1]);

  let nextPageNumber = data.seo_details?.next[data?.seo_details?.next.length - 1]
  

  const lastWidgetRef = useCallback( node => {
    //@ts-ignore
    if (observer.current) observer.current.disconnect()
    //@ts-ignore
    observer.current = new IntersectionObserver( ([entry]) => {
      if (entry.isIntersecting) {
        const getData = async () => {
          const response = await ((await fetch(`${completeURL}${completeURL.includes("?") ? `&page=${nextPageNumber}` : `?page=${nextPageNumber}`}`)).json())
          console.log(response);
          
          //@ts-ignore
          setData( prev => ({...prev, widget_list: prev.widget_list.concat(response.widget_list)}))
          // setPage((prev: string) => +prev + 1)
          // console.log(page);
          
        }
        getData()
      }
    })
    //@ts-ignore
    if (node) observer.current.observe(node)
  }, [completeURL, nextPageNumber, setData])

  useEffect(() => {

  }, [])

  return (
    <Grid spacing={2} direction="row" container style={{width: "calc(100vw - 280px)", marginTop: "20px"}}>
      {data.widget_list?.map((widget: any, index: number) => {
        if (data.widget_list.length === index + 1) {
          return(
            <Grid key={index} item>
              <Widget lastElementRef={lastWidgetRef} widgetData={widget.data} />
            </Grid>
          )
        }
        return (
          <Grid key={index} item>
            <Widget widgetData={widget.data} />
          </Grid>
        )
      }
      )}
      {/* <ScrolledWidgets /> */}
    </Grid>
  )
}

export default Widgets

// const getData = async () => {
//   const response = await ((await fetch(`${completeURL}${completeURL.includes("?") ? `&page=${page}` : `?page=${page}`}`)).json())
//   console.log(response);
  
//   //@ts-ignore
//   setData( prev => ({...prev, widget_list: prev.widget_list.concat(response.widget_list)}))
//   setPage(response.seo_details?.next[response?.seo_details?.next.length - 1])
// }
// getData()