type CameraStateType = {
  full_name: string;
  name: string;
};

type CameraDataType = CameraStateType & {
  rover_id: number;
  id: number;
};

type RoverType = {
  id: number;
  name: string;
  status: string;
  max_sol: number;
  max_date: string;
  launch_date: string;
  landing_date: string;
  total_photos: number;
  cameras: CameraStateType[];
};

export type PhotoType = {
  id: number;
  sol: number;
  img_src: string;
  rover: RoverType;
  earth_date: string;
  camera: CameraDataType;
};
