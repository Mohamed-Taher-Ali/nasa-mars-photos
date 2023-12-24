import ImageViewer from "react-simple-image-viewer";

type PhotosViewerParams = {
  onSwitchImageViewer: (dir: "right" | "left") => () => void;
  onCloseImageViewer: () => void;
  imageSources: string[];
  currentIndex: number;
};

export const PhotosViewer = ({
  onSwitchImageViewer,
  onCloseImageViewer,
  imageSources,
  currentIndex,
}: PhotosViewerParams) => {
  return (
    <ImageViewer
      src={imageSources}
      disableScroll={true}
      currentIndex={currentIndex}
      onClose={onCloseImageViewer}
      leftArrowComponent={
        <div onClick={onSwitchImageViewer("left")}>{"<"}</div>
      }
      rightArrowComponent={
        <div onClick={onSwitchImageViewer("right")}>{">"}</div>
      }
    />
  );
};
