import { useRef, useState,useCallback,useEffect,memo } from "react";
import Leap,{ Frame}  from "leapjs";
// import { Frame} from 'leapjs';
import { useAppSelector,useAppDispatch } from "@/store";

import { setVolume } from "@/store/slices/volume_slice";
import { setFilter } from "@/store/slices/filter_slice";




const Audioplayer: React.FC = () => {
  
  
  useEffect(() =>{
    console.log("Audioplayer");
    Leap.loop(function(frame){

      var hands       = frame.hands
      var handsLength = hands.length;
      
      if(handsLength === 1){
          var hand = hands[0];

          //these are available to other files becuase on global scope
          const xPos = hand.palmPosition[0];
          const yPos = hand.palmPosition[1];
          const zPos = hand.palmPosition[2];

          const handPositionExport = [xPos,yPos,zPos];

          const handExport = hand;

          
       
      };

});
  }, []);
  let isFiltering = false;

  let animationController: number;
  const [file, setFile] = useState<File | null>(null);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const source = useRef<MediaElementAudioSourceNode>();
  const analyzer = useRef<AnalyserNode>();
  const audioContext = new AudioContext();
  const gainNode = audioContext.createGain();
  const filterNode = audioContext.createBiquadFilter();
   
  filterNode.type = "lowpass";
  const buffer = new AudioBufferSourceNode(audioContext);
 

  const handleAudioPlay = () => {
    if (!source.current) {
      source.current = audioContext.createMediaElementSource(audioRef.current!);
      analyzer.current = audioContext.createAnalyser();
      source.current.connect(analyzer.current);
      analyzer.current.connect(gainNode);
      gainNode.connect(audioContext.destination);
    }
    visualizeData();
  };

  const visualizeData = () => {
    animationController = window.requestAnimationFrame(visualizeData);
    if (audioRef.current!.paused) {
      return cancelAnimationFrame(animationController);
    }
    const songData = new Uint8Array(140);
    analyzer.current!.getByteFrequencyData(songData);
    const bar_width = 3;
    let start = 0;
    const ctx = canvasRef.current!.getContext("2d")!;
    ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
    for (let i = 0; i < songData.length; i++) {
      start = i * 4;
      let gradient = ctx.createLinearGradient(
        0,
        0,
        canvasRef.current!.width,
        canvasRef.current!.height
      );
      gradient.addColorStop(0.2, "#2392f5");
      gradient.addColorStop(0.5, "#fe0095");
      gradient.addColorStop(1.0, "purple");

      ctx.fillStyle = gradient;
      ctx.fillRect(start, canvasRef.current!.height, bar_width, -songData[i]);
    }
  }

  

  const handleFilterButtonPressed = () => {
    isFiltering = !isFiltering;
    if (isFiltering) {
      source.current!.disconnect();
      source.current!.connect(filterNode);
      filterNode.connect(gainNode);
      gainNode.connect(audioContext.destination);
    } else {
      source.current!.connect(gainNode);
      gainNode.connect(audioContext.destination);
    }
  };

  

  return (
    <div className="grid gap-1 m-5 h-fit p-6 shadow-2xl">
      <input
        type="file"
        onChange={({ target: { files } }) => files![0] && setFile(files![0])}
        id="userInput"
        className="w-full py-2 px-4  border-purple-800	 border-1  rounded-md font-medium  text-white placeholder-white focus:outline-none focus:ring-2"
      />

{file && (
        <audio
          ref={audioRef}
          onPlay={handleAudioPlay}
          src={window.URL.createObjectURL(file)}
          controls
          className="w-full  rounded-md shadow"
        />
      )}

     {gainNode && <VolumnControl gainNode={gainNode} />}

     {gainNode && <FilterControl gainNode={gainNode} source={source.current} filterNode={filterNode} audioContext={audioContext} />}


      <canvas ref={canvasRef} width={500} height={200} id="canvasVisualizer" />
      
      {/*<button id="audioFilterControl" onClick={handleFilterButtonPressed}>Apply Filter</button>*/}
    </div>
  );
};

export default memo(Audioplayer)
function FilterControl({ gainNode,source,filterNode,audioContext}: {audioContext:AudioContext,  filterNode:BiquadFilterNode, gainNode:GainNode,source :MediaElementAudioSourceNode|undefined }) {
  const filterleap = useAppSelector(state => state.filterReducer.value);
  const dispatch = useAppDispatch()
  useEffect(() => {
    gainNode.gain.value = (filterleap);
  },[filterleap,gainNode])
  const onFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    source!.disconnect();
    filterNode.frequency.value = parseFloat(event.target.value);
    source!.connect(filterNode);
    filterNode.connect(gainNode);
    gainNode.connect(audioContext.destination);
    dispatch(setFilter(parseFloat(event.target.value)));
  };
  return <input
  id="audioFilterControl"
  onChange={onFilterChange}
  className=" accent-purple-700"
  type="range"
  min="0"
  max="3000"
  step="5"
  value={filterleap}
></input>
}


function VolumnControl({ gainNode}: { gainNode:GainNode }) {
  const volumeleap = useAppSelector(state => state.volumeReducer.value);
  const dispatch = useAppDispatch()
  useEffect(() => {
    gainNode.gain.value = (volumeleap);
  },[volumeleap,gainNode])
  const onVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Volume is now " + event.target.value);
    
    dispatch(setVolume(parseFloat(event.target.value)))

    gainNode.gain.value = parseFloat(event.target.value);
  };
  return <input
  id="audioPlayerGainControl"
  className=" accent-purple-700"
  onChange={onVolumeChange}
  type="range"
  min= {0}
  max={1}
  step={0.1}
  value={volumeleap}
/>
}
