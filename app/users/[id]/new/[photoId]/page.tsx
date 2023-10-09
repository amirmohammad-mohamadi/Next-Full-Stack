import React from "react";

interface IPhotoPage {
  params: { id: number; photoId: number };
}

const PhotoPage = ({ params: { id, photoId } }: IPhotoPage) => {
  return (
    <div>
      PhotoPage {id} {photoId}
    </div>
  );
};

export default PhotoPage;
