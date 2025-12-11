"use client";

import { useEffect, useRef } from "react";
import * as React from "react";

export type FileInputProps = {
  fileList: File[];
  onChange(fileList: FileList | null): void;
};
const FileInput = ({ fileList = [], onChange }: FileInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      const dataTransfer = new DataTransfer();
      fileList.forEach((file) => dataTransfer.items.add(file));
      inputRef.current.files = dataTransfer.files;
    }
  }, [fileList]);

  return (
    <>
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center bg-gray-50 hover:bg-gray-100 border-2 border-gray-300 border-dashed rounded-lg w-full h-48 cursor-pointer"
      >
        <div className="flex flex-col justify-center items-center pt-5 pb-6">
          <svg className="mb-4 w-8 h-8 text-gray-500">...</svg>
          <p className="mb-2 text-sm">
            <span className="font-semibold">בחר תמונה</span>
          </p>
          <p className="text-gray-500 text-xs">PNG, JPG up to 10MB</p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.files);
          }}
        />
      </label>
    </>
  );
};

export default FileInput;
