import vdo from '../assets/vdo.mp4'
function VideoPlayer() {
  return (
    <div>
      <h2>Video Player</h2>
      <video controls className='w-1/4 m-auto border-white'>
        <source src={vdo} type="video/mp4"  />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
