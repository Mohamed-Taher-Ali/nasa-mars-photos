import { PhotoType } from "./photo";

interface CameraDTO extends Pick<PhotoType["camera"], "name"> {
  fullName: PhotoType["camera"]["full_name"];
}

interface RoverDTO extends Pick<PhotoType["rover"], "name" | "status"> {
  totalPhotos: PhotoType["rover"]["total_photos"];
}

export interface PhotoDTO extends Pick<PhotoType, "id" | "sol"> {
  earthDate: PhotoType["earth_date"];
  imgSrc: PhotoType["img_src"];
  camera: CameraDTO;
  rover: RoverDTO;
}
