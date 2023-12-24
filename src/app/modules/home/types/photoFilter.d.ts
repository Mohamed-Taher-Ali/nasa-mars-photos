import { PhotoDTO } from "./photoDTO";

export interface PhotoFilterType extends Pick<PhotoDTO, "id" | "sol"> {
  page: number;
}
