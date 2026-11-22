'use client';
import { useEffect, type RefObject, type Dispatch, type SetStateAction } from 'react';

export function useViewportPreview(
 player: RefObject<HTMLVideoElement>,
 setBlocked: Dispatch<SetStateAction<boolean>>,
 setPaused: Dispatch<SetStateAction<boolean>>,
){
 useEffect(()=>{
  const video=player.current;if(!video)return;
  let active=true;video.muted=true;
  const play=()=>{video.play()?.catch(()=>{if(active){setBlocked(true);setPaused(true)}})};
  if(!('IntersectionObserver' in window)){play();return()=>{active=false}}
  const observer=new IntersectionObserver(entries=>{
   if(!video.muted)return;
   if(entries.some(entry=>entry.isIntersecting&&entry.intersectionRatio>=0.15)){play()}
   else if(!video.paused){video.pause()}
  },{threshold:[0,0.15]});
  observer.observe(video);
  return()=>{active=false;observer.disconnect()};
 },[player,setBlocked,setPaused]);
}
