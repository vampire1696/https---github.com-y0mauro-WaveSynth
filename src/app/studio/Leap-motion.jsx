'use client'
import React, { useEffect, useState } from 'react';
import Leap from "leapjs";
import Audioplayer from './Audioplayer'
import { useAppDispatch,useAppSelector } from '@/store';
import { setVolume } from '@/store/slices/volume_slice';
import { setFilter } from '@/store/slices/filter_slice';
const LeapMotion = () => {
  const volume = useAppSelector(state => state.volumeReducer.value);
  const filter = useAppSelector(state => state.filterReducer.value);
  const dispatch = useAppDispatch()
  const [handVisible, setHandVisible] = useState(false);

  useEffect(() => {
    // Callback khi có dữ liệu từ Leap Motion
    console.log("Leap Motion Run ")
    const handleFrame = (frame) => {
      if (frame.hands.length > 0) {
        const hand = frame.hands[0];
        const handPosition = hand.palmPosition;

        // Lấy giá trị trục Y của tay
        const y = handPosition[1];
        console.log("gia tri y",y);
        // Chuyển đổi giá trị trục Y thành giá trị âm thanh,can xem lai ky
        const newVolume = mapRange(y, 50, 400, 0, 1);
        const newFilter = mapRange(y, 50, 400, 0, 3000);
        // setVolume(newVolume);
        // dispatch(setVolume(newVolume));
        dispatch(setFilter(newFilter));
        setHandVisible(true);
      } else {
        setHandVisible(false);
        
      }
    };

    // Kết nối Leap Motion
    const controller = new Leap.Controller();
    controller.connect();

    // Đăng ký callback cho sự kiện frame
    controller.on('frame', handleFrame);

    // Hủy đăng ký callback khi component unmount
    return () => {
      controller.disconnect();
    };
  },[]);

  // Hàm chuyển đổi giá trị trong khoảng
  const mapRange = (value, inMin, inMax, outMin, outMax) => {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };

  return (
    <div>
      {handVisible && <div>Volume: {volume}</div>}
      {!handVisible && <div>Volume error: {volume}</div>}
      <div>Filter: {filter}</div>
      <Audioplayer/>
    </div>
  );
};

const Hand = () => {
  
  return <div>Co tay</div>;
};

export default LeapMotion;
