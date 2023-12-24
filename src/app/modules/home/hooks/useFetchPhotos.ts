import { useCallback, useEffect, useState } from "react";
import { getPhotoTransformed } from "../utils";
import { PhotoDTO, PhotoType } from "../types";
import { getPhotosApi } from "../api";
import { checkNum } from "app/utils";

export const useFetchPhotos = (page: number, sol: number) => {
  const api = getPhotosApi(checkNum(page), checkNum(sol));
  const [photos, setPhotos] = useState<PhotoDTO[]>([]);

  const transformPhotos = useCallback(
    (photos: PhotoType[] = []) => {
      const transformedPhotos = photos.map((photo) =>
        getPhotoTransformed(photo)
      );

      setPhotos(transformedPhotos);
    },
    [page, sol]
  );

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data: { photos: PhotoType[] }) => transformPhotos(data?.photos));
  }, [page, sol]);

  return { photos };
};
