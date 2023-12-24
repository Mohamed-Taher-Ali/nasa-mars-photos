import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { generateQueryString } from "app/utils";
import { PhotoFilterType } from "../types";
import { useFetchPhotos } from "../hooks";

export const useHomePage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, sol, id] = [
    +(searchParams.get("page") || 0),
    +(searchParams.get("sol") || 0),
    +(searchParams.get("id") || 0),
  ];

  const { photos } = useFetchPhotos(page, sol);
  const imageSources = useMemo(
    () => photos.map(({ imgSrc }) => imgSrc),
    [photos]
  );

  useEffect(() => {
    const ind = photos?.findIndex((p) => p.id == id);

    setCurrentIndex(ind);
  }, [searchParams, photos]);

  const onCloseImageViewer = () => {
    setSearchParams(generateQueryString({ page, sol, id: null }));
  };

  const onCardClick = (id: number) => {
    setSearchParams(generateQueryString({ page, sol, id }));
  };

  const onSwitchImageViewer = (dir: "right" | "left") => () => {
    const step = dir === "left" ? -1 : 1;
    let newIndex = currentIndex + step;

    if (newIndex < 0) newIndex = imageSources.length - 1;
    else if (newIndex == imageSources.length) newIndex = 0;

    const newId = photos[newIndex].id;
    setSearchParams(generateQueryString({ page, sol, id: newId }));
  };

  const onUpdate = (data: Omit<PhotoFilterType, "id">) => {
    setSearchParams(generateQueryString({ ...data, id: null }));
  };

  return {
    onSwitchImageViewer,
    onCloseImageViewer,
    currentIndex,
    imageSources,
    onCardClick,
    onUpdate,
    photos,
    page,
    sol,
    id,
  };
};
