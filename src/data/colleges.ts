export interface College {
  id: number;
  name: string;
  district: string;
  city: string;
  affiliation: string;
  type: 'Government' | 'Private';
  naacGrade?: string;
  nbaAccreditation: boolean;
  cutoff?: number;
  googleRating: number;
  courses: string[];
  annualFee: number;
  website: string;
}

export const colleges: College[] = [
  {
    id: 1,
    name: "Indian Institute of Technology Hyderabad",
    district: "Medak",
    city: "Sangareddy",
    affiliation: "Autonomous",
    type: "Government",
    naacGrade: "A",
    nbaAccreditation: true,
    cutoff: undefined, // JEE Advanced
    googleRating: 4.4,
    courses: ["CSE", "ECE", "Mechanical", "Chemical", "Civil"],
    annualFee: 200000,
    website: "https://iith.ac.in/"
  },
  {
    id: 2,
    name: "National Institute of Technology Warangal",
    district: "Warangal",
    city: "Warangal",
    affiliation: "Autonomous",
    type: "Government",
    naacGrade: "A",
    nbaAccreditation: true,
    cutoff: undefined, // JEE Main
    googleRating: 4.3,
    courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
    annualFee: 179000,
    website: "https://nitw.ac.in/"
  },
  {
    id: 3,
    name: "International Institute of Information Technology Hyderabad",
    district: "Hyderabad",
    city: "Hyderabad",
    affiliation: "Autonomous",
    type: "Government",
    naacGrade: undefined,
    nbaAccreditation: true,
    cutoff: undefined, // UGEE/JEE Main
    googleRating: 4.5,
    courses: ["CSE", "ECE", "CND", "CLD"],
    annualFee: 1600000,
    website: "https://www.iiit.ac.in/"
  },
  {
    id: 4,
    name: "Jawaharlal Nehru Technological University Hyderabad",
    district: "Hyderabad",
    city: "Hyderabad",
    affiliation: "JNTUH",
    type: "Government",
    naacGrade: "A++",
    nbaAccreditation: true,
    cutoff: 1210,
    googleRating: 3.8,
    courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
    annualFee: 54000,
    website: "https://jntuh.ac.in/"
  },
  {
    id: 5,
    name: "Osmania University College of Engineering",
    district: "Hyderabad",
    city: "Hyderabad",
    affiliation: "Osmania University",
    type: "Government",
    naacGrade: "A+",
    nbaAccreditation: true,
    cutoff: 590,
    googleRating: 3.9,
    courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
    annualFee: 50000,
    website: "https://www.osmania.ac.in/"
  },
  {
    id: 6,
    name: "Chaitanya Bharathi Institute of Technology",
    district: "Ranga Reddy",
    city: "Hyderabad",
    affiliation: "JNTUH",
    type: "Private",
    naacGrade: "A",
    nbaAccreditation: true,
    cutoff: 1655,
    googleRating: 4.2,
    courses: ["CSE", "ECE", "EEE", "IT", "Mechanical"],
    annualFee: 600000,
    website: "https://cbit.ac.in/"
  },
  {
    id: 7,
    name: "Gokaraju Rangaraju Institute of Engineering and Technology",
    district: "Ranga Reddy",
    city: "Hyderabad",
    affiliation: "JNTUH",
    type: "Private",
    naacGrade: "A",
    nbaAccreditation: true,
    cutoff: 4798,
    googleRating: 4.1,
    courses: ["CSE", "ECE", "EEE", "Mechanical", "AI/ML"],
    annualFee: 545000,
    website: "https://griet.ac.in/"
  },
  {
    id: 8,
    name: "Vasavi College of Engineering",
    district: "Hyderabad",
    city: "Hyderabad",
    affiliation: "Osmania University",
    type: "Private",
    naacGrade: "A",
    nbaAccreditation: true,
    cutoff: 12409,
    googleRating: 4.0,
    courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
    annualFee: 540000,
    website: "https://www.vce.ac.in/"
  },
  {
    id: 9,
    name: "Anurag University",
    district: "Medchal–Malkajgiri",
    city: "Hyderabad",
    affiliation: "Autonomous",
    type: "Private",
    naacGrade: "A",
    nbaAccreditation: true,
    cutoff: 8229,
    googleRating: 4.1,
    courses: ["CSE", "AI/ML", "Cybersecurity", "ECE", "Mechanical"],
    annualFee: 1100000,
    website: "https://anurag.edu.in/"
  },
  {
    id: 10,
    name: "SR University",
    district: "Warangal",
    city: "Warangal",
    affiliation: "Autonomous",
    type: "Private",
    naacGrade: "A++",
    nbaAccreditation: true,
    cutoff: 45000, // Estimated
    googleRating: 4.2,
    courses: ["CSE", "AI/DS", "ECE", "Robotics", "Mechanical"],
    annualFee: 905000,
    website: "https://sru.edu.in/"
  },
  {
    id: 11,
    name: "Mahindra University",
    district: "Ranga Reddy",
    city: "Hyderabad",
    affiliation: "Autonomous",
    type: "Private",
    naacGrade: undefined,
    nbaAccreditation: true,
    cutoff: undefined, // JEE Main
    googleRating: 4.3,
    courses: ["CSE", "AI", "ECE", "Mechanical", "Civil"],
    annualFee: 1600000,
    website: "https://mahindrauniversity.edu.in/"
  },
  {
    id: 12,
    name: "University College of Engineering, Osmania University",
    district: "Hyderabad",
    city: "Hyderabad",
    affiliation: "Osmania University",
    type: "Government",
    naacGrade: "A+",
    nbaAccreditation: true,
    cutoff: 805,
    googleRating: 3.7,
    courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
    annualFee: 50000,
    website: "https://uceou.edu/"
  },
  {
    id: 13,
    name: "JNTUH College of Engineering Sultanpur",
    district: "Sangareddy",
    city: "Sultanpur",
    affiliation: "JNTUH",
    type: "Government",
    naacGrade: undefined,
    nbaAccreditation: true,
    cutoff: 22201,
    googleRating: 3.5,
    courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
    annualFee: 40000,
    website: "https://jntuh.ac.in/"
  },
  {
    id: 14,
    name: "CVR College of Engineering",
    district: "Ranga Reddy",
    city: "Hyderabad",
    affiliation: "JNTUH",
    type: "Private",
    naacGrade: "A",
    nbaAccreditation: true,
    cutoff: 1856,
    googleRating: 4.0,
    courses: ["CSE", "ECE", "EEE", "Mechanical", "IT"],
    annualFee: 400000,
    website: "https://cvr.ac.in/"
  },
  {
    id: 15,
    name: "Vardhaman College of Engineering",
    district: "Ranga Reddy",
    city: "Hyderabad",
    affiliation: "JNTUH",
    type: "Private",
    naacGrade: undefined,
    nbaAccreditation: true,
    cutoff: 15000, // Estimated
    googleRating: 4.1,
    courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
    annualFee: 500000,
    website: "https://vardhaman.org/"
  },
  {
    id: 16,
    name: "Guru Nanak Institutions Technical Campus",
    district: "Ranga Reddy",
    city: "Hyderabad",
    affiliation: "JNTUH",
    type: "Private",
    naacGrade: "A",
    nbaAccreditation: true,
    cutoff: 25000, // Estimated
    googleRating: 4.2,
    courses: ["CSE", "ECE", "EEE", "Mechanical", "AI/ML"],
    annualFee: 585000,
    website: "https://gnitc.ac.in/"
  },
  {
    id: 17,
    name: "MVSR Engineering College",
    district: "Hyderabad",
    city: "Hyderabad",
    affiliation: "Osmania University",
    type: "Private",
    naacGrade: "A",
    nbaAccreditation: true,
    cutoff: 18000, // Estimated
    googleRating: 4.0,
    courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
    annualFee: 500000,
    website: "https://mvsrec.edu.in/"
  },
  {
    id: 18,
    name: "Keshav Memorial Institute of Technology",
    district: "Hyderabad",
    city: "Hyderabad",
    affiliation: "JNTUH",
    type: "Private",
    naacGrade: "A",
    nbaAccreditation: true,
    cutoff: 20000, // Estimated
    googleRating: 3.9,
    courses: ["CSE", "ECE", "EEE", "IT", "AI/ML"],
    annualFee: 600000,
    website: "https://kmit.in/"
  },
  {
    id: 19,
    name: "Malla Reddy College of Engineering and Technology",
    district: "Ranga Reddy",
    city: "Hyderabad",
    affiliation: "JNTUH",
    type: "Private",
    naacGrade: undefined,
    nbaAccreditation: true,
    cutoff: 30000, // Estimated
    googleRating: 3.8,
    courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
    annualFee: 500000,
    website: "https://mrcet.ac.in/"
  },
  {
    id: 20,
    name: "CMR College of Engineering",
    district: "Ranga Reddy",
    city: "Hyderabad",
    affiliation: "JNTUH",
    type: "Private",
    naacGrade: undefined,
    nbaAccreditation: true,
    cutoff: 35000, // Estimated
    googleRating: 3.7,
    courses: ["CSE", "ECE", "EEE", "Mechanical", "AI/DS"],
    annualFee: 780000,
    website: "https://cmrcet.ac.in/"
  },
  {
    id: 21,
    name: "Sreenidhi Institute of Science and Technology",
    district: "Ranga Reddy",
    city: "Hyderabad",
    affiliation: "JNTUH",
    type: "Private",
    naacGrade: "A",
    nbaAccreditation: true,
    cutoff: 22000, // Estimated
    googleRating: 4.4,
    courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
    annualFee: 600000,
    website: "https://snist.edu.in/"
  },
  {
    id: 22,
    name: "BVRIT Hyderabad College of Engineering for Women",
    district: "Ranga Reddy",
    city: "Hyderabad",
    affiliation: "JNTUH",
    type: "Private",
    naacGrade: undefined,
    nbaAccreditation: true,
    cutoff: 28000, // Estimated
    googleRating: 4.2,
    courses: ["CSE", "ECE", "EEE", "IT", "AI/ML"],
    annualFee: 900000,
    website: "https://bvrithyderabad.edu.in/"
  },
  {
    id: 23,
    name: "MLR Institute of Technology",
    district: "Ranga Reddy",
    city: "Hyderabad",
    affiliation: "JNTUH",
    type: "Private",
    naacGrade: "B++",
    nbaAccreditation: true,
    cutoff: 40000, // Estimated
    googleRating: 3.8,
    courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
    annualFee: 500000,
    website: "https://mlrit.ac.in/"
  },
  {
    id: 24,
    name: "Matrusri Engineering College",
    district: "Medchal–Malkajgiri",
    city: "Hyderabad",
    affiliation: "JNTUH",
    type: "Private",
    naacGrade: undefined,
    nbaAccreditation: false,
    cutoff: 50000, // Estimated
    googleRating: 3.5,
    courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
    annualFee: 500000,
    website: "https://matrusri.edu.in/"
  },
  {
    id: 25,
    name: "KG Reddy College of Engineering and Technology",
    district: "Ranga Reddy",
    city: "Hyderabad",
    affiliation: "JNTUH",
    type: "Private",
    naacGrade: undefined,
    nbaAccreditation: false,
    cutoff: 55000, // Estimated
    googleRating: 3.4,
    courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
    annualFee: 450000,
    website: "https://kgr.ac.in/"
  },
  {
    id: 26,
    name: "Avanthi Institute of Engineering and Technology",
    district: "Bhupalpally",
    city: "Bhupalpally",
    affiliation: "JNTUH",
    type: "Private",
    naacGrade: undefined,
    nbaAccreditation: false,
    cutoff: 92000,
    googleRating: 3.2,
    courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
    annualFee: 500000,
    website: "https://avanthi.edu.in/"
  },
  {
    id: 27,
    name: "Vignana Bharathi Institute of Technology",
    district: "Ranga Reddy",
    city: "Hyderabad",
    affiliation: "JNTUH",
    type: "Private",
    naacGrade: undefined,
    nbaAccreditation: false,
    cutoff: 60000, // Estimated
    googleRating: 3.3,
    courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
    annualFee: 420000,
    website: "https://vbit.ac.in/"
  },
  {
    id: 28,
    name: "TKR College of Engineering and Technology",
    district: "Ranga Reddy",
    city: "Hyderabad",
    affiliation: "JNTUH",
    type: "Private",
    naacGrade: undefined,
    nbaAccreditation: false,
    cutoff: 65000, // Estimated
    googleRating: 3.6,
    courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
    annualFee: 450000,
    website: "https://tkrcet.ac.in/"
  },
  {
    id: 29,
    name: "Siddhartha Institute of Engineering and Technology",
    district: "Ranga Reddy",
    city: "Hyderabad",
    affiliation: "JNTUH",
    type: "Private",
    naacGrade: undefined,
    nbaAccreditation: false,
    cutoff: 70000, // Estimated
    googleRating: 3.1,
    courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
    annualFee: 480000,
    website: "https://siddhartha.ac.in/"
  },
  {
    id: 30,
    name: "St. Martin's Engineering College",
    district: "Medchal–Malkajgiri",
    city: "Hyderabad",
    affiliation: "JNTUH",
    type: "Private",
    naacGrade: "B",
    nbaAccreditation: false,
    cutoff: 75000, // Estimated
    googleRating: 3.4,
    courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
    annualFee: 500000,
    website: "https://stmartins.in/"
  },
  {
  id: 30,
  name: "Aizza College of Engineering and Technology",
  district: "Mancherial",
  city: "Mancherial",
  affiliation: "JNTUH",
  type: "Private",
  naacGrade: undefined, // NAAC grade not provided
  nbaAccreditation: false,
  cutoff: undefined, // Cutoff not provided
  googleRating: 3.0,
  courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
  annualFee: 40000,
  website: "https://aizzacollege.com"
},
{
  id: 31,
  name: "Abdulkalam Institute of Technology and Sciences",
  district: "Kothagudem",
  city: "Kothagudem",
  affiliation: "JNTUH",
  type: "Private",
  naacGrade: undefined,
  nbaAccreditation: false,
  cutoff: undefined,
  googleRating: 3.1,
  courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
  annualFee: 52000,
  website: "https://akits.ac.in"
},
{
  id: 32,
  name: "Anurag Engineering College",
  district: "Suryapet",
  city: "Kodad",
  affiliation: "JNTUH",
  type: "Private",
  naacGrade: undefined,
  nbaAccreditation: true,
  cutoff: undefined,
  googleRating: 3.6,
  courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
  annualFee: 73000,
  website: "https://anurag.edu.in"
},
{
  id: 33,
  name: "Anurag University (Formerly CVSR College of Engineering)",
  district: "Medchal",
  city: "Ghatkesar",
  affiliation: "Deemed to be University",
  type: "Private",
  naacGrade: "A+",
  nbaAccreditation: true,
  cutoff: undefined,
  googleRating: 4.1,
  courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil", "IT", "Pharmacy", "MBA"],
  annualFee: 125000,
  website: "https://anurag.edu.in"
},
{
  id: 34,
  name: "Arjun College of Technology and Sciences",
  district: "Ranga Reddy",
  city: "Batasingaram",
  affiliation: "JNTUH",
  type: "Private",
  naacGrade: undefined,
  nbaAccreditation: false,
  cutoff: undefined,
  googleRating: 3.3,
  courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
  annualFee: 57000,
  website: "https://arjuncollege.ac.in"
},
{
  id: 35,
  name: "Avanthi Institute of Engineering and Technology",
  district: "Ranga Reddy",
  city: "Hayathnagar",
  affiliation: "JNTUH",
  type: "Private",
  naacGrade: undefined,
  nbaAccreditation: true,
  cutoff: undefined,
  googleRating: 3.4,
  courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
  annualFee: 65000,
  website: "https://avanthi.ac.in"
},
{
  id: 36,
  name: "Auroras Scientific and Technological Institute",
  district: "Medchal",
  city: "Ghatkesar",
  affiliation: "JNTUH",
  type: "Private",
  naacGrade: undefined,
  nbaAccreditation: true,
  cutoff: undefined,
  googleRating: 3.5,
  courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
  annualFee: 60000,
  website: "https://auroras.ac.in"
},
{
  id: 37,
  name: "Auroras Technological and Research Institute",
  district: "Medchal",
  city: "Parvathapur",
  affiliation: "JNTUH",
  type: "Private",
  naacGrade: undefined,
  nbaAccreditation: true,
  cutoff: undefined,
  googleRating: 3.6,
  courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
  annualFee: 72000,
  website: "https://atri.ac.in"
},
{
  id: 38,
  name: "AVN Institute of Engineering and Technology",
  district: "Ranga Reddy",
  city: "Ibrahimpatnam",
  affiliation: "JNTUH",
  type: "Private",
  naacGrade: undefined,
  nbaAccreditation: true,
  cutoff: undefined,
  googleRating: 3.7,
  courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
  annualFee: 78000,
  website: "https://avniet.ac.in"
},
{
  id: 39,
  name: "Azad College of Engineering and Technology",
  district: "Ranga Reddy",
  city: "Moinabad",
  affiliation: "JNTUH",
  type: "Private",
  naacGrade: undefined,
  nbaAccreditation: false,
  cutoff: undefined,
  googleRating: 3.0,
  courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
  annualFee: 35000,
  website: "https://azadcollege.org"
},
{
  id: 40,
  name: "Bharat Institute of Engineering and Technology",
  district: "Ranga Reddy",
  city: "Ibrahimpatnam",
  affiliation: "JNTUH",
  type: "Private",
  naacGrade: undefined,
  nbaAccreditation: true,
  cutoff: undefined,
  googleRating: 3.8,
  courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
  annualFee: 89000,
  website: "https://biet.ac.in"
},
{
  id: 41,
  name: "Balaji Institute of Technology and Sciences",
  district: "Warangal",
  city: "Narsampet",
  affiliation: "JNTUH",
  type: "Private",
  naacGrade: undefined,
  nbaAccreditation: false,
  cutoff: undefined,
  googleRating: 3.2,
  courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
  annualFee: 90000, // Annual fee not provided
  website: "https://bitswgl.ac.in/"
}

];

export const districts = Array.from(
  new Set(colleges.map((college) => college.district))
).sort();

export const courses = Array.from(
  new Set(colleges.flatMap((college) => college.courses))
).sort();

export const collegeTypes = ["Government", "Private"] as const;

export const ratingOptions = [2.0, 2.5, 3.0, 3.5, 4.0, 4.5];

export const feeRanges = [
  { min: 0, max: 100000, label: "Under ₹1 Lakh" },
  { min: 100000, max: 500000, label: "₹1 Lakh - ₹5 Lakh" },
  { min: 500000, max: 1000000, label: "₹5 Lakh - ₹10 Lakh" },
  { min: 1000000, max: Infinity, label: "Above ₹10 Lakh" },
];