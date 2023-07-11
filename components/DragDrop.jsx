'use client';

import Link from 'next/link';
import * as tf from '@tensorflow/tfjs';
import { useState, useRef, useEffect } from 'react';

const DragDrop = () => {
  const [file, setFile] = useState();
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [predict, setPredict] = useState();
  const [model, setModel] = useState();
  const inputRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const model = await tf.loadLayersModel('./tfjs_model/model.json');
      setModel(model);
      setLoading(true);
    }
    fetchData();
    setLoading(false);
  }, [setModel]);

  const selectFile = () => {
    inputRef.current.click();
  };

  const onSelecFile = async (event) => {
    const file = event.target.files[0];
    let image = new Image(256, 256);
    image.src = window.URL.createObjectURL(file);
    setFile(image);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = 'copy';
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    try {
      setIsDragging(false);
      const file = event.dataTransfer.files[0];
      let image = new Image(256, 256);
      image.src = window.URL.createObjectURL(file);
      setFile(image);
      setImagePreview(URL.createObjectURL(file));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpload = async () => {
    const label = ['Miner', 'Healthy', 'Phoma', 'Rust'];

    let tfTensor = tf.browser.fromPixels(file);
    tfTensor = tfTensor.resizeNearestNeighbor([256, 256]);
    tfTensor = tfTensor.div(tf.scalar(255));
    tfTensor = tfTensor.expandDims();

    let pred = await model.predict(tfTensor).data();

    pred = Array.from(pred).map((value, idx) => {
      return {
        class: label[idx],
        confidence: value,
      };
    });

    pred.sort((x, y) => y.confidence - x.confidence);

    setTimeout(() => {
      setPredict(pred[0]);
      setLoading(true);
    }, 1500);
    setLoading(false);
  };

  const clearData = () => {
    setFile(null);
    setPredict(null);
  };

  if (file)
    return (
      <div className="flex flex-col justify-center items-center h-max md:w-[80%] sm:w-[100%] border-solid border-2 p-5 bg-gradient-to-r relative">
        <div className="flex items-center justify-center my-5 w-[100%] ">
          {imagePreview ? (
            <>
              <img
                className="w-[256px] h-[256px] sm:w-[512px] sm:h-[256px] object-cover"
                src={imagePreview}
                alt={file.name}
              />
            </>
          ) : (
            <span className="flex-1 ml-[30px] font-normal text-[20px] text-white leading-[32.4px]">
              {file.name}
            </span>
          )}
          <button
            className="absolute right-4 top-4 z-2 text-[34px] text-white font-bold "
            onClick={clearData}
          >
            X
          </button>
        </div>

        {predict ? (
          <>
            <button
              type="button"
              onClick={clearData}
              className="flex items-center h-fit py-4 px-6 hero-gradient hover: rounded-[26px] gap-[12px] text-white"
            >
              <img
                src="/trash.svg"
                alt="headset"
                className="w-[24px] h-[24px] object-contain"
              />
              <span className="font-normal text-[16px]">Clear</span>
            </button>{' '}
            <div className="p-4 mt-5 w-auto h-auto rounded-md bg-[#323F5D] text-white md:text-3xl">
              <div className="flex">
                <h3 className="font-bold mr-3">Disease : </h3>
                <p>{predict.class}</p>
              </div>
              <div className="flex">
                <h3 className="font-bold mr-3">Confidence : </h3>
                <p>{(parseFloat(predict.confidence) * 100).toFixed(2)} %</p>
              </div>
              {predict.class !== 'Healthy' ? (
                <Link className="text-sm underline" href={`/${predict.class}`}>
                  How to care?
                </Link>
              ) : null}
            </div>
          </>
        ) : (
          <button
            type="button"
            onClick={handleUpload}
            className={`flex items-center h-fit py-4 px-6 hero-gradient hover: rounded-[32px] gap-[12px] text-white ${
              !loading ? 'disabled:opacity-70' : 'block'
            }`}
            disabled={!loading}
          >
            <img
              src="/scan.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            {loading ? (
              <span className="font-normal text-[16px]">Classification</span>
            ) : (
              <span className="font-normal text-[16px]">Loading...</span>
            )}
          </button>
        )}
      </div>
    );

  return (
    <div
      className="flex flex-col justify-center items-center h-max md:w-[80%] sm:w-[100%] border-dashed border-2 p-5 text-white"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <h1 className="font-bold text-[24px] leading-[30.24px] text-center">
        Drag and Drop File to Classify
      </h1>
      <h1 className="font-bold text-[20px] leading-[30.24px] my-5">Or</h1>
      <input
        type="file"
        onChange={onSelecFile}
        hidden
        accept="image/png, image/jpeg"
        ref={inputRef}
      />
      <button
        type="button"
        onClick={selectFile}
        className="flex items-center h-fit py-4 px-6 hero-gradient hover: rounded-[32px] gap-[12px]"
      >
        <img
          src="/upload.svg"
          alt="headset"
          className="w-[24px] h-[24px] object-contain"
        />
        <span className="font-normal text-[16px]">Select Files</span>
      </button>
    </div>
  );
};

export default DragDrop;
