export type Candidate = {
  constituency: string;
  party: string;
  position: string;
  candidateName: string;
  PWD: string;
  age: number;
  gender: string;
  qualificaton: string;
  remarks?: string | undefined | null;
};

export type Parliament = {
  [key: string]: SeatData;
};

export interface SeatData {
  seats: number;
  colour: string;
}
