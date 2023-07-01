import React from 'react';
import { FiDownload } from 'react-icons/fi';

const Download = ({ data }) => {
  const url = data

  console.log(data)
  const handleDownload = () => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const videoUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = videoUrl;
        link.download = `${data.original_title}.mp4`;
        link.click();
        window.URL.revokeObjectURL(videoUrl);
      });
  };
  return (
    <div>
      <button onClick={handleDownload}>
        <button className='cursor-pointer'>
          <FiDownload className='text-xl mx-auto'></FiDownload>
          <p className='text-xs'>Download</p>
        </button>
      </button>
    </div>
  );
};

export default Download;