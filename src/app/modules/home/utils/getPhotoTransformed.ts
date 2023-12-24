import { PhotoType, PhotoDTO } from "../types";

export const getPhotoTransformed = ({
  rover: { status, total_photos, name: roverName },
  camera: { name, full_name },
  earth_date,
  img_src,
  sol,
  id,
}: PhotoType): PhotoDTO => ({
  id,
  sol,
  imgSrc: img_src,
  earthDate: earth_date,
  camera: {
    name,
    fullName: full_name,
  },
  rover: {
    status,
    name: roverName,
    totalPhotos: total_photos,
  },
});
