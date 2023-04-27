import { Dayjs } from "dayjs";

export interface Employee {
  firstName: string;
  lastName: string;
  startDate: Dayjs;
  department: Department;
  birthDate: Dayjs;
  street: string;
  city: string;
  state: State;
  zipCode: number;
}

export enum Department {
  SAL = "Sales",
  MRK = "Marketing",
  ENG = "Engineering",
  HR = "Human Resources",
  LGL = "Legal",
}

export enum State {
  AL = "Alabama",
  AK = "Alaska",
  AR = "Arkansas",
  AS = "American Samoa",
  AZ = "Arizona",
  CA = "California",
  CO = "Colorado",
  CT = "Connecticut",
  DE = "Delaware",
  DC = "District Of Columbia",
  FM = "Federated States Of Micronesia",
  FL = "Florida",
  GA = "Georgia",
  GU = "Guam",
  HI = "Hawaii",
  IA = "Iowa",
  ID = "Idaho",
  IL = "Illinois",
  IN = "Indiana",
  KS = "Kansas",
  KY = "Kentucky",
  LA = "Louisiana",
  MA = "Massachussetts",
  MD = "Maryland",
  ME = "Maine",
  MH = "Marshall Islands",
  MI = "Michigan",
  MN = "Minnesota",
  MO = "Missouri",
  MP = "Northern Mariana Islands",
  MS = "Mississippi",
  MT = "Montana",
  NC = "North Carolina",
  ND = "North Dakota",
  NE = "Nebraska",
  NH = "New Hampshire",
  NJ = "New Jersey",
  NM = "New Mexico",
  NV = "Nevada",
  NY = "New York",
  OH = "Ohio",
  OK = "Oklahoma",
  OR = "Oregon",
  PA = "Pennsylvania",
  PW = "Palau",
  PR = "Puerto Rico",
  RI = "Rhode Island",
  SC = "South Carolina",
  SD = "South Dakota",
  TN = "Tennessee",
  TX = "Texas",
  UT = "Utah",
  VI = "Virgin Islands",
  VT = "Vermont",
  WA = "Washington",
  WI = "Wisconsin",
  WV = "West Virginia",
  WY = "Wyoming",
}
