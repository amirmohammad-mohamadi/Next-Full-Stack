"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface ICloudinaryResult {
  public_id: string;
  width: number;
  height: number;
}

const UploadPage = () => {
  const [publicIds, setPublicIds] = useState<ICloudinaryResult[]>([]);
  return (
    <div>
      {publicIds.length > 0 && (
        <div className="flex mb-4 gap-3">
          {publicIds.map((publicId) => (
            <CldImage
              key={publicId.public_id}
              src={publicId.public_id}
              width={publicId.width > 200 ? "200" : publicId.width}
              height={publicId.width > 200 ? "100" : publicId.height}
              alt="uploaded-image"
            />
          ))}
        </div>
      )}
      <CldUploadWidget
        uploadPreset="z2lcqgca"
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as ICloudinaryResult;
          setPublicIds((prevState) => [
            ...prevState,
            {
              public_id: info.public_id,
              width: info.width,
              height: info.height,
            },
          ]);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default UploadPage;
