import { PhotosViewer } from "../components/PhotosViewer";
import { EmptyData, ShouldRender } from "app/components";
import { FilterForm, MarsCards } from "../components";
import { useHomePage } from "./useHomePage";
import { usePageTitle } from "app/hooks";
import "./homePage.css";

export function HomePage() {
  usePageTitle("Mars Photos");

  const {
    sol,
    page,
    photos,
    onUpdate,
    onCardClick,
    imageSources,
    currentIndex,
    onCloseImageViewer,
    onSwitchImageViewer,
  } = useHomePage();

  return (
    <>
      <FilterForm onUpdate={onUpdate} sol={sol} page={page} />
      <MarsCards data={photos} onClick={onCardClick} />
      {!!photos?.length && currentIndex != -1 && (
        <PhotosViewer
          currentIndex={currentIndex}
          imageSources={imageSources}
          onCloseImageViewer={onCloseImageViewer}
          onSwitchImageViewer={onSwitchImageViewer}
        />
      )}
      <ShouldRender if={photos?.length === 0}>
        <EmptyData />
      </ShouldRender>
    </>
  );
}
