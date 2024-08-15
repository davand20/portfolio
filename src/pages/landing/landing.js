import './landing.css';
import arrowDown from './assets/ArrowDown.svg';
import arrowUp from './assets/ArrowUp.svg';
import birthIcon from './assets/BirthIcon.png';
import doctorPic from './assets/doctorPic.png';
import downLoadIcon from './assets/DownloadIcon.png';
import femaleIcon from './assets/FemaleIcon.png';
import gearIcon from './assets/gearIcon.png';
import heartBPM from './assets/HeartBPM.svg';
import horizontalPoints from './assets/horizontalPoints.png';
import insuranceIcon from './assets/InsuranceIcon.png';
import phoneIcon from './assets/PhoneIcon.png';
import respiratoryRate from './assets/respiratoryRate.svg';
import searchIcon from './assets/searchIcon.png';
import sections1 from './assets/sections_1.svg';
import sections2 from './assets/sections_2.svg';
import sections3 from './assets/sections_3.svg';
import sections4 from './assets/sections_4.svg';
import sections5 from './assets/sections_5.svg';
import temperatureIcon from './assets/temperature.svg';
import verticalPoints from './assets/verticalPoints.png';
import { useEffect } from 'react';

export default function Landing() {

    const info = [
        {
            "name": "Emily Williams",
            "gender": "Female",
            "age": 18,
            "profile_picture": "https://fedskillstest.ct.digital/1.png",
            "date_of_birth": "2006-08-19",
            "phone_number": "(711) 984-6696",
            "emergency_contact": "(680) 653-9512",
            "insurance_type": "Premier Auto Corporation",
            "diagnosis_history": [
                {
                    "month": "March",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 163,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 95,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 79,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 27,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "February",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 151,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 120,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 88,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 27,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 168,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 77,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 82,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 158,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 92,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 60,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 117,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 95,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 100,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "October",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 115,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 80,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 63,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 14,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "September",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 133,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 68,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 91,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 13,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "August",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 149,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 70,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 69,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 14,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "July",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 165,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 95,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 71,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 14,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                }
            ],
            "diagnostic_list": [
                {
                    "name": "Type 2 Diabetes",
                    "description": "A chronic condition that affects the way the body processes blood sugar (glucose).",
                    "status": "Actively being treated"
                },
                {
                    "name": "Type 2 Diabetes",
                    "description": "A chronic condition that affects the way the body processes blood sugar (glucose).",
                    "status": "Untreated"
                },
                {
                    "name": "Hypertension",
                    "description": "A condition in which the force of the blood against the artery walls is too high.",
                    "status": "Under observation"
                }
            ],
            "lab_results": [
                "Complete Blood Count (CBC)",
                "Echocardiogram",
                "Liver Function Tests",
                "Mammography",
                "Urinalysis",
                "Ultrasound",
                "Prostate-Specific Antigen (PSA)",
                "Hemoglobin A1C",
                "Lipid Panel",
                "Radiology Report"
            ]
        },
        {
            "name": "Ryan Johnson",
            "gender": "Male",
            "age": 45,
            "profile_picture": "https://fedskillstest.ct.digital/2.png",
            "date_of_birth": "1979-11-02",
            "phone_number": "(913) 228-2252",
            "emergency_contact": "(761) 811-3559",
            "insurance_type": "Secure Travel Services",
            "diagnosis_history": [
                {
                    "month": "March",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 137,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 92,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 60,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 149,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 76,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 68,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 15,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 171,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 84,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 91,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 30,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 143,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 120,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 100,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "November",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 113,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 93,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 85,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 29,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "October",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 97,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 61,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 64,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 28,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "September",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 151,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 117,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 66,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "August",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 119,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 112,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 65,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                }
            ],
            "diagnostic_list": [
                {
                    "name": "Allergies",
                    "description": "The immune system's reaction to foreign substances that are typically not harmful.",
                    "status": "Under observation"
                },
                {
                    "name": "Allergies",
                    "description": "The immune system's reaction to foreign substances that are typically not harmful.",
                    "status": "Cured"
                },
                {
                    "name": "Heart Murmur",
                    "description": "Sounds during your heartbeat cycle made by turbulent blood in or near your heart.",
                    "status": "Cured"
                }
            ],
            "lab_results": [
                "Complete Blood Count (CBC)",
                "Basic Metabolic Panel (BMP)",
                "Electrocardiogram (EKG)",
                "Comprehensive Metabolic Panel (CMP)",
                "X-Ray",
                "MRI",
                "Renal Function Tests",
                "Radiology Report",
                "Hemoglobin A1C"
            ]
        },
        {
            "name": "Brandon Mitchell",
            "gender": "Male",
            "age": 36,
            "profile_picture": "https://fedskillstest.ct.digital/3.png",
            "date_of_birth": "1988-11-17",
            "phone_number": "(833) 322-4325",
            "emergency_contact": "(586) 969-4847",
            "insurance_type": "Secure Reinsurance Brokers",
            "diagnosis_history": [
                {
                    "month": "March",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 122,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 109,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 62,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 103,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 107,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 76,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 167,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 111,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 94,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 16,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 179,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 96,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 71,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 26,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "November",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 135,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 81,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 70,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "October",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 155,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 104,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 77,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 15,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "September",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 95,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 96,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 71,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 18,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "August",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 157,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 61,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 99,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 30,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "July",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 133,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 115,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 90,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "June",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 110,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 84,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 81,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "May",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 120,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 64,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 68,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 15,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "April",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 138,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 78,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 76,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 13,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "March",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 125,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 116,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 93,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "February",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 155,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 107,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 64,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 108,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 109,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 85,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 16,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 170,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 95,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 87,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 16,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 170,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 94,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 97,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "October",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 127,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 78,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 86,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "September",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 154,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 62,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 87,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 26,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "August",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 146,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 67,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 96,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 28,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "July",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 163,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 75,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 61,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 18,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "June",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 126,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 60,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 76,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "May",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 180,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 108,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 68,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "April",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 147,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 66,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 91,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "March",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 126,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 91,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 69,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 29,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 116,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 94,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 61,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 30,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "January",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 95,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 116,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 76,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 29,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                }
            ],
            "diagnostic_list": [
                {
                    "name": "Type 2 Diabetes",
                    "description": "A chronic condition that affects the way the body processes blood sugar (glucose).",
                    "status": "Actively being treated"
                },
                {
                    "name": "Hypertension",
                    "description": "A condition in which the force of the blood against the artery walls is too high.",
                    "status": "Cured"
                }
            ],
            "lab_results": [
                "Urinalysis",
                "Complete Blood Count (CBC)",
                "Mammography",
                "Hemoglobin A1C",
                "Bone Density Scan"
            ]
        },
        {
            "name": "Jessica Taylor",
            "gender": "Female",
            "age": 28,
            "profile_picture": "https://fedskillstest.ct.digital/4.png",
            "date_of_birth": "08/23/1996",
            "phone_number": "(415) 555-1234",
            "emergency_contact": "(415) 555-5678",
            "insurance_type": "Sunrise Health Assurance",
            "diagnosis_history": [
                {
                    "month": "March",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 160,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 78,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 78,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98.6,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 119,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 73,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 99,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 128,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 86,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 82,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "December",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 91,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 111,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 83,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 14,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "November",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 173,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 103,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 83,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 16,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "October",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 125,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 103,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 93,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "September",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 123,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 113,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 76,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 29,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "August",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 137,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 112,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 76,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "July",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 148,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 87,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 79,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 24,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "June",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 102,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 73,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 85,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 26,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "May",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 98,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 115,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 99,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "April",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 130,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 108,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 86,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "March",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 129,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 101,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 68,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "February",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 173,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 69,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 91,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 30,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 159,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 96,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 92,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 139,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 61,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 84,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "November",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 142,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 81,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 77,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "October",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 175,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 108,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 92,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "September",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 117,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 111,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 75,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "August",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 102,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 114,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 87,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "July",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 166,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 61,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 63,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "June",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 122,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 61,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 97,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "May",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 150,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 91,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 69,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 14,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "April",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 131,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 96,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 81,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "March",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 179,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 84,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 80,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 26,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                }
            ],
            "diagnostic_list": [
                {
                    "name": "Hypertension",
                    "description": "Chronic high blood pressure",
                    "status": "Under Observation"
                },
                {
                    "name": "Type 2 Diabetes",
                    "description": "Insulin resistance and elevated blood sugar",
                    "status": "Cured"
                },
                {
                    "name": "Asthma",
                    "description": "Recurrent episodes of bronchial constriction",
                    "status": "Inactive"
                },
                {
                    "name": "Osteoarthritis",
                    "description": "Degenerative joint disease",
                    "status": "Untreated"
                }
            ],
            "lab_results": [
                "Blood Tests",
                "CT Scans",
                "Radiology Reports",
                "X-Rays"
            ]
        },
        {
            "name": "Samantha Johnson",
            "gender": "Female",
            "age": 56,
            "profile_picture": "https://fedskillstest.ct.digital/5.png",
            "date_of_birth": "1968-11-11",
            "phone_number": "(381) 577-7868",
            "emergency_contact": "(632) 679-8116",
            "insurance_type": "Secure Auto Agency",
            "diagnosis_history": [
                {
                    "month": "March",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 137,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 105,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 92,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 26,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "February",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 177,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 95,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 96,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 167,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 94,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 78,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "December",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 131,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 61,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 67,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 156,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 109,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 91,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "October",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 166,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 72,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 97,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "September",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 119,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 63,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 86,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 15,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "August",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 140,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 93,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 85,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 14,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "July",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 161,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 92,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 78,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "June",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 164,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 77,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 66,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "May",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 178,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 93,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 93,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "April",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 93,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 70,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 70,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 28,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "March",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 128,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 83,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 92,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 14,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 91,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 108,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 75,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 30,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 179,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 85,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 61,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 114,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 82,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 79,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 138,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 65,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 88,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "October",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 142,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 101,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 78,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 16,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "September",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 116,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 105,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 85,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 28,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "August",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 166,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 100,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 76,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "July",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 107,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 82,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 85,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "June",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 113,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 110,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 99,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "May",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 100,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 99,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 89,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 14,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                }
            ],
            "diagnostic_list": [
                {
                    "name": "Hypertension",
                    "description": "A condition in which the force of the blood against the artery walls is too high.",
                    "status": "Untreated"
                }
            ],
            "lab_results": [
                "Prostate-Specific Antigen (PSA)",
                "Ultrasound",
                "Radiology Report",
                "X-Ray",
                "Lipid Panel",
                "Hemoglobin A1C",
                "Urinalysis"
            ]
        },
        {
            "name": "Ashley Martinez",
            "gender": "Female",
            "age": 54,
            "profile_picture": "https://fedskillstest.ct.digital/6.png",
            "date_of_birth": "1970-07-16",
            "phone_number": "(954) 474-2572",
            "emergency_contact": "(848) 505-7394",
            "insurance_type": "First Casualty Brokers",
            "diagnosis_history": [
                {
                    "month": "March",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 125,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 100,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 78,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 145,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 108,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 60,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 14,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 124,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 72,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 90,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 26,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 100,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 60,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 83,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 28,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 115,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 63,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 83,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "October",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 123,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 106,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 69,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 18,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "September",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 130,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 94,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 78,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "August",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 167,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 100,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 96,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 30,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                }
            ],
            "diagnostic_list": [
                {
                    "name": "Type 1 Diabetes",
                    "description": "A chronic condition in which the pancreas produces little or no insulin.",
                    "status": "Untreated"
                },
                {
                    "name": "Type 1 Diabetes",
                    "description": "A chronic condition in which the pancreas produces little or no insulin.",
                    "status": "Under observation"
                },
                {
                    "name": "Eczema",
                    "description": "A condition that causes inflamed, itchy, cracked, and rough skin.",
                    "status": "Under observation"
                },
                {
                    "name": "Type 1 Diabetes",
                    "description": "A chronic condition in which the pancreas produces little or no insulin.",
                    "status": "Untreated"
                }
            ],
            "lab_results": [
                "Prostate-Specific Antigen (PSA)",
                "MRI",
                "Bone Density Scan",
                "Complete Blood Count (CBC)"
            ]
        },
        {
            "name": "Olivia Brown",
            "gender": "Female",
            "age": 32,
            "profile_picture": "https://fedskillstest.ct.digital/7.png",
            "date_of_birth": "1992-02-29",
            "phone_number": "(660) 228-0411",
            "emergency_contact": "(489) 330-7401",
            "insurance_type": "American Life Brokers",
            "diagnosis_history": [
                {
                    "month": "March",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 149,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 108,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 88,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 18,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "February",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 109,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 84,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 87,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 15,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 170,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 70,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 70,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 18,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "December",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 92,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 89,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 61,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 27,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "November",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 179,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 69,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 82,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "October",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 152,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 62,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 83,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 29,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "September",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 145,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 74,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 98,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 13,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "August",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 139,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 116,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 87,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "July",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 133,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 118,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 82,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "June",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 150,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 120,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 67,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "May",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 97,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 108,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 78,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 13,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "April",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 144,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 87,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 91,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 28,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "March",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 147,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 72,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 94,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 12,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 170,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 114,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 74,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 28,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 96,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 103,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 77,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 29,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 179,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 115,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 78,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 155,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 72,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 71,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 28,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "October",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 160,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 91,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 65,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 13,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "September",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 174,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 98,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 78,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 27,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "August",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 163,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 112,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 74,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 29,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "July",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 164,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 81,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 82,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                }
            ],
            "diagnostic_list": [
                {
                    "name": "Hyperhidrosis",
                    "description": "A condition characterized by excessive sweating.",
                    "status": "Under observation"
                },
                {
                    "name": "Type 1 Diabetes",
                    "description": "A chronic condition in which the pancreas produces little or no insulin.",
                    "status": "Under observation"
                },
                {
                    "name": "Asthma",
                    "description": "A condition in which your airways narrow and swell and may produce extra mucus.",
                    "status": "Untreated"
                },
                {
                    "name": "Type 2 Diabetes",
                    "description": "A chronic condition that affects the way the body processes blood sugar (glucose).",
                    "status": "Actively being treated"
                }
            ],
            "lab_results": [
                "Echocardiogram",
                "Radiology Report",
                "X-Ray",
                "CT Scan",
                "Mammography",
                "MRI",
                "Hemoglobin A1C",
                "Complete Blood Count (CBC)"
            ]
        },
        {
            "name": "Tyler Davis",
            "gender": "Male",
            "age": 19,
            "profile_picture": "https://fedskillstest.ct.digital/8.png",
            "date_of_birth": "2005-12-23",
            "phone_number": "(390) 417-5963",
            "emergency_contact": "(606) 352-0954",
            "insurance_type": "Elite Auto Insurance",
            "diagnosis_history": [
                {
                    "month": "March",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 128,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 62,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 81,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 24,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "February",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 131,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 86,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 71,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 18,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 95,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 97,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 60,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "December",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 106,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 117,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 82,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 112,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 78,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 74,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 12,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "October",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 145,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 71,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 81,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "September",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 113,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 103,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 97,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 30,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "August",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 170,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 106,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 71,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "July",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 156,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 104,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 92,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "June",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 116,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 60,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 67,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "May",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 100,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 85,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 71,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 16,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "April",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 116,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 82,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 87,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 14,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "March",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 97,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 64,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 96,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 30,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 106,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 79,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 87,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 12,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 120,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 74,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 67,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 14,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "December",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 145,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 72,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 74,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 13,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "November",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 136,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 109,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 75,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "October",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 138,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 81,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 97,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 24,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "September",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 173,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 62,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 90,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 14,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "August",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 154,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 93,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 70,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 24,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "July",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 93,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 93,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 100,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 15,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "June",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 107,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 68,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 97,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 24,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "May",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 93,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 91,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 89,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 30,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "April",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 105,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 99,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 86,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "March",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 166,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 107,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 67,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 159,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 84,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 82,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 128,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 71,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 63,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 30,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 119,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 91,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 74,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 12,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 99,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 99,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 79,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "October",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 158,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 67,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 93,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 18,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "September",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 134,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 101,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 73,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 16,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "August",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 117,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 86,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 70,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                }
            ],
            "diagnostic_list": [
                {
                    "name": "Osteoarthritis",
                    "description": "A type of arthritis that occurs when flexible tissue at the ends of bones wears down.",
                    "status": "Untreated"
                },
                {
                    "name": "Type 2 Diabetes",
                    "description": "A chronic condition that affects the way the body processes blood sugar (glucose).",
                    "status": "Actively being treated"
                },
                {
                    "name": "Hyperhidrosis",
                    "description": "A condition characterized by excessive sweating.",
                    "status": "Untreated"
                }
            ],
            "lab_results": [
                "Radiology Report",
                "Hemoglobin A1C",
                "Lipid Panel",
                "Urinalysis",
                "Complete Blood Count (CBC)",
                "Thyroid Stimulating Hormone (TSH)",
                "CT Scan",
                "Basic Metabolic Panel (BMP)"
            ]
        },
        {
            "name": "Kevin Anderson",
            "gender": "Male",
            "age": 30,
            "profile_picture": "https://fedskillstest.ct.digital/9.png",
            "date_of_birth": "1994-06-18",
            "phone_number": "(499) 323-3592",
            "emergency_contact": "(627) 657-9647",
            "insurance_type": "United Auto Services",
            "diagnosis_history": [
                {
                    "month": "March",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 121,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 117,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 72,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 141,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 100,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 92,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "January",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 91,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 63,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 99,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "December",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 94,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 102,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 99,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 16,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "November",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 122,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 72,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 74,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "October",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 148,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 68,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 67,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 30,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "September",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 101,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 98,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 68,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 14,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "August",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 165,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 73,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 77,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 14,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "July",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 94,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 96,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 85,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "June",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 129,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 95,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 79,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 16,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "May",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 147,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 73,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 75,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 28,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "April",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 142,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 101,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 61,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "March",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 169,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 77,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 63,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 18,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "February",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 171,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 111,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 78,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "January",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 95,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 72,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 78,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 26,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 117,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 115,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 87,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "November",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 175,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 98,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 86,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 24,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "October",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 165,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 96,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 77,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "September",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 180,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 104,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 70,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "August",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 145,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 111,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 64,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 29,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "July",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 100,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 78,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 62,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "June",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 150,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 67,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 98,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 13,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "May",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 150,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 76,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 95,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "April",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 95,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 116,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 61,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "March",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 121,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 96,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 82,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 149,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 105,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 75,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 26,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 136,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 66,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 88,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "December",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 124,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 113,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 98,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                }
            ],
            "diagnostic_list": [
                {
                    "name": "Heart Murmur",
                    "description": "Sounds during your heartbeat cycle made by turbulent blood in or near your heart.",
                    "status": "Untreated"
                },
                {
                    "name": "Type 1 Diabetes",
                    "description": "A chronic condition in which the pancreas produces little or no insulin.",
                    "status": "Actively being treated"
                },
                {
                    "name": "Asthma",
                    "description": "A condition in which your airways narrow and swell and may produce extra mucus.",
                    "status": "Untreated"
                },
                {
                    "name": "Asthma",
                    "description": "A condition in which your airways narrow and swell and may produce extra mucus.",
                    "status": "Actively being treated"
                },
                {
                    "name": "Osteoarthritis",
                    "description": "A type of arthritis that occurs when flexible tissue at the ends of bones wears down.",
                    "status": "Actively being treated"
                }
            ],
            "lab_results": [
                "Prostate-Specific Antigen (PSA)",
                "Complete Blood Count (CBC)",
                "MRI",
                "Bone Density Scan",
                "Renal Function Tests",
                "CT Scan",
                "Electrocardiogram (EKG)",
                "Comprehensive Metabolic Panel (CMP)",
                "Hemoglobin A1C",
                "X-Ray"
            ]
        },
        {
            "name": "Dylan Thompson",
            "gender": "Male",
            "age": 36,
            "profile_picture": "https://fedskillstest.ct.digital/10.png",
            "date_of_birth": "1988-03-15",
            "phone_number": "(390) 510-8465",
            "emergency_contact": "(517) 955-1190",
            "insurance_type": "Secure Auto Corporation",
            "diagnosis_history": [
                {
                    "month": "March",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 120,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 94,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 78,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 138,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 115,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 63,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 13,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "January",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 152,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 84,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 100,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 14,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 117,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 109,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 62,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 15,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "November",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 138,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 76,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 84,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "October",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 134,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 82,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 78,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 16,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "September",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 156,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 90,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 60,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 29,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "August",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 141,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 68,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 71,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 24,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "July",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 118,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 82,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 79,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 15,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "June",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 145,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 117,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 68,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 27,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "May",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 120,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 113,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 99,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 29,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "April",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 116,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 63,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 91,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 16,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "March",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 139,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 60,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 73,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 145,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 97,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 91,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 24,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 131,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 106,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 64,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 18,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 154,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 70,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 76,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 148,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 70,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 78,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 14,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "October",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 168,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 112,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 72,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "September",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 114,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 118,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 74,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "August",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 131,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 62,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 100,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 26,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "July",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 139,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 96,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 76,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "June",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 135,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 120,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 82,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "May",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 93,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 95,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 87,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "April",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 167,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 120,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 77,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 26,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "March",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 117,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 77,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 73,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "February",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 132,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 91,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 92,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 103,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 82,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 98,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 12,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "December",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 169,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 97,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 87,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 149,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 86,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 84,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "October",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 93,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 65,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 89,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 16,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "September",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 118,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 99,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 74,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 30,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "August",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 167,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 92,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 61,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 14,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "July",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 137,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 103,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 74,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 30,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "June",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 116,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 96,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 84,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 30,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "May",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 113,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 110,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 88,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 24,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                }
            ],
            "diagnostic_list": [
                {
                    "name": "Asthma",
                    "description": "A condition in which your airways narrow and swell and may produce extra mucus.",
                    "status": "Cured"
                },
                {
                    "name": "Asthma",
                    "description": "A condition in which your airways narrow and swell and may produce extra mucus.",
                    "status": "Under observation"
                },
                {
                    "name": "Eczema",
                    "description": "A condition that causes inflamed, itchy, cracked, and rough skin.",
                    "status": "Actively being treated"
                },
                {
                    "name": "Allergies",
                    "description": "The immune system's reaction to foreign substances that are typically not harmful.",
                    "status": "Cured"
                }
            ],
            "lab_results": [
                "Echocardiogram",
                "Lipid Panel",
                "Radiology Report",
                "X-Ray",
                "Mammography",
                "Basic Metabolic Panel (BMP)",
                "Liver Function Tests",
                "Thyroid Stimulating Hormone (TSH)",
                "Ultrasound"
            ]
        },
        {
            "name": "Nathan Evens",
            "gender": "Male",
            "age": 58,
            "profile_picture": "https://fedskillstest.ct.digital/11.png",
            "date_of_birth": "1966-09-15",
            "phone_number": "(793) 755-6214",
            "emergency_contact": "(895) 782-5271",
            "insurance_type": "Pacific Casualty Agency",
            "diagnosis_history": [
                {
                    "month": "March",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 98,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 101,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 83,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "February",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 124,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 67,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 73,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 30,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 116,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 95,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 76,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 29,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "December",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 151,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 107,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 88,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "November",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 95,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 105,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 82,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "October",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 101,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 104,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 98,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 29,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "September",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 159,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 62,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 91,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 27,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "August",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 163,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 103,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 85,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 12,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "July",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 152,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 98,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 92,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 24,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "June",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 109,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 115,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 90,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "May",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 147,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 63,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 61,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 15,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "April",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 97,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 114,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 92,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 13,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "March",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 108,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 72,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 77,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "February",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 177,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 90,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 64,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 28,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "January",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 129,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 114,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 73,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "December",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 125,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 62,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 99,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 154,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 92,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 97,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 27,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "October",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 119,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 113,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 66,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 18,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "September",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 138,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 62,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 88,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "August",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 141,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 96,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 93,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 29,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "July",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 116,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 90,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 66,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "June",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 100,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 76,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 95,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "May",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 122,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 97,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 77,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "April",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 157,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 108,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 72,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "March",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 119,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 115,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 88,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 152,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 64,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 76,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 96,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 66,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 66,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 15,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 93,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 68,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 92,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 173,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 75,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 91,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 28,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "October",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 154,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 70,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 91,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 27,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                }
            ],
            "diagnostic_list": [
                {
                    "name": "Type 1 Diabetes",
                    "description": "A chronic condition in which the pancreas produces little or no insulin.",
                    "status": "Under observation"
                },
                {
                    "name": "Type 1 Diabetes",
                    "description": "A chronic condition in which the pancreas produces little or no insulin.",
                    "status": "Cured"
                }
            ],
            "lab_results": [
                "Urinalysis",
                "Renal Function Tests",
                "Lipid Panel",
                "Basic Metabolic Panel (BMP)",
                "Complete Blood Count (CBC)",
                "Mammography"
            ]
        },
        {
            "name": "Mike Nolan",
            "gender": "Male",
            "age": 31,
            "profile_picture": "https://fedskillstest.ct.digital/12.png",
            "date_of_birth": "1993-05-18",
            "phone_number": "(253) 820-3171",
            "emergency_contact": "(826) 361-5767",
            "insurance_type": "Secure Cargo Services",
            "diagnosis_history": [
                {
                    "month": "March",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 116,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 67,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 90,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 13,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "February",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 143,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 83,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 99,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "January",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 124,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 108,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 84,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 24,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 119,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 94,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 99,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 90,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 94,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 93,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 29,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "October",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 171,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 116,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 63,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 29,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "September",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 129,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 89,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 79,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 16,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "August",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 104,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 61,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 71,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 16,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "July",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 176,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 60,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 73,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "June",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 119,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 86,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 85,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 28,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "May",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 103,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 71,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 69,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "April",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 101,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 62,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 62,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 29,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "March",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 122,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 87,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 97,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 104,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 73,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 100,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 13,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 139,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 109,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 89,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "December",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 109,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 94,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 73,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 27,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "November",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 108,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 81,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 85,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 26,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "October",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 104,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 67,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 68,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "September",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 116,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 77,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 70,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "August",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 156,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 106,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 75,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 13,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "July",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 90,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 72,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 95,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 18,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "June",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 157,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 101,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 93,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "May",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 147,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 62,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 84,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "April",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 133,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 67,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 70,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 18,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "March",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 162,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 106,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 84,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 102,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 109,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 74,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 26,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "January",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 97,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 68,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 86,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 27,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 166,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 72,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 86,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "November",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 162,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 112,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 65,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 12,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "October",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 135,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 61,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 78,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "September",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 126,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 113,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 89,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "August",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 141,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 84,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 64,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "July",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 111,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 106,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 94,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "June",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 92,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 107,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 60,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 29,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                }
            ],
            "diagnostic_list": [
                {
                    "name": "Allergies",
                    "description": "The immune system's reaction to foreign substances that are typically not harmful.",
                    "status": "Untreated"
                },
                {
                    "name": "Heart Murmur",
                    "description": "Sounds during your heartbeat cycle made by turbulent blood in or near your heart.",
                    "status": "Under observation"
                }
            ],
            "lab_results": [
                "MRI",
                "Mammography",
                "Comprehensive Metabolic Panel (CMP)",
                "Bone Density Scan"
            ]
        },
        {
            "name": "John Martinez",
            "gender": "Male",
            "age": 59,
            "profile_picture": "https://fedskillstest.ct.digital/1.png",
            "date_of_birth": "1965-07-26",
            "phone_number": "(667) 294-1057",
            "emergency_contact": "(813) 493-1443",
            "insurance_type": "Premier Reinsurance Agency",
            "diagnosis_history": [
                {
                    "month": "March",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 103,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 73,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 82,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 26,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "February",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 176,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 98,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 86,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 26,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "January",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 123,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 75,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 89,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 16,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 111,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 118,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 74,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 14,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 144,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 75,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 99,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "October",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 104,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 92,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 77,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "September",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 117,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 91,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 65,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "August",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 121,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 87,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 69,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 13,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "July",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 137,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 119,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 75,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 28,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "June",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 138,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 87,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 88,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 28,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "May",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 103,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 60,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 84,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "April",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 165,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 68,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 80,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 16,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "March",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 174,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 91,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 60,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 168,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 86,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 99,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 27,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 122,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 95,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 60,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 134,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 66,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 71,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 24,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 134,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 81,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 100,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 24,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "October",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 131,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 86,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 81,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 26,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "September",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 145,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 89,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 86,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 12,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "August",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 157,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 102,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 99,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 14,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "July",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 91,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 88,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 75,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "June",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 101,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 106,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 78,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 12,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "May",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 95,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 100,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 73,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 29,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "April",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 176,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 98,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 66,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 29,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "March",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 121,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 100,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 88,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "February",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 161,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 63,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 62,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 168,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 84,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 61,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "December",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 104,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 93,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 80,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 16,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 135,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 63,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 78,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 28,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                }
            ],
            "diagnostic_list": [
                {
                    "name": "Allergies",
                    "description": "The immune system's reaction to foreign substances that are typically not harmful.",
                    "status": "Actively being treated"
                }
            ],
            "lab_results": [
                "Complete Blood Count (CBC)",
                "CT Scan",
                "Prostate-Specific Antigen (PSA)",
                "Comprehensive Metabolic Panel (CMP)",
                "Hemoglobin A1C",
                "Basic Metabolic Panel (BMP)",
                "Vitamin D Level",
                "Echocardiogram"
            ]
        },
        {
            "name": "Richard Brown",
            "gender": "Male",
            "age": 77,
            "profile_picture": "https://fedskillstest.ct.digital/2.png",
            "date_of_birth": "1947-01-13",
            "phone_number": "(219) 842-6105",
            "emergency_contact": "(263) 806-3766",
            "insurance_type": "Elite Liability Assurance",
            "diagnosis_history": [
                {
                    "month": "March",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 120,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 87,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 79,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 173,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 114,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 88,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 118,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 74,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 88,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 28,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "December",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 168,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 76,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 73,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 118,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 61,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 86,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 27,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "October",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 99,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 83,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 75,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "September",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 122,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 113,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 81,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 28,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "August",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 109,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 109,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 70,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "July",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 103,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 63,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 75,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "June",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 114,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 67,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 88,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "May",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 140,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 102,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 74,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 24,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "April",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 122,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 103,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 89,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "March",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 133,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 63,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 95,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 122,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 62,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 63,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "January",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 127,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 64,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 89,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 121,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 65,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 93,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 12,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 154,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 80,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 90,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 30,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "October",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 92,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 114,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 66,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "September",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 105,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 60,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 73,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 18,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "August",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 171,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 82,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 71,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "July",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 143,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 81,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 95,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 28,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "June",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 116,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 66,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 94,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "May",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 176,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 73,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 97,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 18,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "April",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 152,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 76,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 79,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "March",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 165,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 99,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 70,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 18,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                }
            ],
            "diagnostic_list": [
                {
                    "name": "Heart Murmur",
                    "description": "Sounds during your heartbeat cycle made by turbulent blood in or near your heart.",
                    "status": "Actively being treated"
                },
                {
                    "name": "Type 2 Diabetes",
                    "description": "A chronic condition that affects the way the body processes blood sugar (glucose).",
                    "status": "Untreated"
                }
            ],
            "lab_results": [
                "Basic Metabolic Panel (BMP)",
                "Comprehensive Metabolic Panel (CMP)",
                "Electrocardiogram (EKG)"
            ]
        },
        {
            "name": "Jennifer Johnson",
            "gender": "Female",
            "age": 89,
            "profile_picture": "https://fedskillstest.ct.digital/3.png",
            "date_of_birth": "1935-07-13",
            "phone_number": "(801) 717-8033",
            "emergency_contact": "(404) 393-5571",
            "insurance_type": "Elite Health Assurance",
            "diagnosis_history": [
                {
                    "month": "March",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 93,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 71,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 80,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 27,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "February",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 131,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 96,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 89,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 92,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 66,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 69,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 26,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 125,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 96,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 93,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 29,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 168,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 99,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 94,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "October",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 102,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 65,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 72,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 12,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "September",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 134,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 105,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 75,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "August",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 125,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 98,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 77,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 30,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "July",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 147,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 102,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 61,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 14,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "June",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 176,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 91,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 62,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "May",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 162,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 102,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 93,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 30,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "April",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 130,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 69,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 67,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 13,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "March",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 97,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 117,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 75,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 26,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "February",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 133,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 119,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 87,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 30,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 124,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 65,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 70,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 129,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 65,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 60,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "November",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 174,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 69,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 83,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 18,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "October",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 150,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 97,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 94,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "September",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 105,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 77,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 72,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 12,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "August",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 142,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 103,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 94,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "July",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 127,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 80,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 64,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "June",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 129,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 113,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 95,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                }
            ],
            "diagnostic_list": [
                {
                    "name": "Type 1 Diabetes",
                    "description": "A chronic condition in which the pancreas produces little or no insulin.",
                    "status": "Cured"
                },
                {
                    "name": "Hyperhidrosis",
                    "description": "A condition characterized by excessive sweating.",
                    "status": "Actively being treated"
                },
                {
                    "name": "Allergies",
                    "description": "The immune system's reaction to foreign substances that are typically not harmful.",
                    "status": "Untreated"
                },
                {
                    "name": "Allergies",
                    "description": "The immune system's reaction to foreign substances that are typically not harmful.",
                    "status": "Under observation"
                },
                {
                    "name": "Heart Murmur",
                    "description": "Sounds during your heartbeat cycle made by turbulent blood in or near your heart.",
                    "status": "Actively being treated"
                }
            ],
            "lab_results": [
                "Hemoglobin A1C",
                "X-Ray",
                "Echocardiogram",
                "Basic Metabolic Panel (BMP)",
                "Ultrasound",
                "Bone Density Scan",
                "CT Scan",
                "Comprehensive Metabolic Panel (CMP)"
            ]
        },
        {
            "name": "Thomas Johnson",
            "gender": "Male",
            "age": 47,
            "profile_picture": "https://fedskillstest.ct.digital/4.png",
            "date_of_birth": "1977-12-12",
            "phone_number": "(567) 253-4481",
            "emergency_contact": "(724) 623-7174",
            "insurance_type": "Elite Cargo Brokers",
            "diagnosis_history": [
                {
                    "month": "March",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 90,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 103,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 69,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "February",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 167,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 93,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 60,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "January",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 129,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 120,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 63,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 13,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "December",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 110,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 73,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 73,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 15,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 114,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 110,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 98,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 16,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "October",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 138,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 84,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 75,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 14,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "September",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 179,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 108,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 81,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 15,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "August",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 95,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 113,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 76,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "July",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 113,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 102,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 92,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 24,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "June",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 114,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 98,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 65,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 13,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "May",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 176,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 91,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 69,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 27,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "April",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 171,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 75,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 74,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "March",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 143,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 84,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 98,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 12,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 108,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 93,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 77,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 136,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 60,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 93,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 176,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 114,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 73,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 13,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 175,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 120,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 80,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 13,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "October",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 167,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 75,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 84,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "September",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 105,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 75,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 78,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 28,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "August",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 107,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 116,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 94,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 16,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "July",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 146,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 95,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 84,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "June",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 171,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 73,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 71,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 27,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "May",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 113,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 114,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 61,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "April",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 113,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 114,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 84,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 26,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "March",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 155,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 105,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 62,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 12,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 155,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 82,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 100,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 12,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 125,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 86,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 82,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "December",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 110,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 65,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 93,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 15,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 120,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 103,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 79,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 18,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "October",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 119,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 83,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 94,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 18,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "September",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 110,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 85,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 61,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 16,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "August",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 144,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 67,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 72,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 16,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "July",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 160,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 66,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 86,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "June",
                    "year": 2021,
                    "blood_pressure": {
                        "systolic": {
                            "value": 155,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 99,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 87,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 29,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                }
            ],
            "diagnostic_list": [
                {
                    "name": "Heart Murmur",
                    "description": "Sounds during your heartbeat cycle made by turbulent blood in or near your heart.",
                    "status": "Under observation"
                },
                {
                    "name": "Osteoarthritis",
                    "description": "A type of arthritis that occurs when flexible tissue at the ends of bones wears down.",
                    "status": "Untreated"
                },
                {
                    "name": "Type 1 Diabetes",
                    "description": "A chronic condition in which the pancreas produces little or no insulin.",
                    "status": "Untreated"
                },
                {
                    "name": "Osteoarthritis",
                    "description": "A type of arthritis that occurs when flexible tissue at the ends of bones wears down.",
                    "status": "Actively being treated"
                }
            ],
            "lab_results": [
                "Ultrasound",
                "Electrocardiogram (EKG)",
                "Hemoglobin A1C",
                "CT Scan",
                "Thyroid Stimulating Hormone (TSH)",
                "X-Ray"
            ]
        },
        {
            "name": "William Johnson",
            "gender": "Male",
            "age": 51,
            "profile_picture": "https://fedskillstest.ct.digital/5.png",
            "date_of_birth": "1973-04-15",
            "phone_number": "(536) 287-3257",
            "emergency_contact": "(946) 299-4175",
            "insurance_type": "Global Auto Corporation",
            "diagnosis_history": [
                {
                    "month": "March",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 116,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 63,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 79,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 14,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 120,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 74,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 87,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "January",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 146,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 109,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 98,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "December",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 98,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 62,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 98,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 24,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 91,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 120,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 85,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "October",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 112,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 85,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 97,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 30,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "September",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 154,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 73,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 66,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "August",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 177,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 112,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 78,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "July",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 153,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 118,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 87,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 29,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                }
            ],
            "diagnostic_list": [
                {
                    "name": "Osteoarthritis",
                    "description": "A type of arthritis that occurs when flexible tissue at the ends of bones wears down.",
                    "status": "Cured"
                },
                {
                    "name": "Eczema",
                    "description": "A condition that causes inflamed, itchy, cracked, and rough skin.",
                    "status": "Cured"
                }
            ],
            "lab_results": [
                "Thyroid Stimulating Hormone (TSH)",
                "Basic Metabolic Panel (BMP)",
                "Complete Blood Count (CBC)",
                "Comprehensive Metabolic Panel (CMP)",
                "Ultrasound",
                "Prostate-Specific Antigen (PSA)",
                "Liver Function Tests",
                "Echocardiogram",
                "Lipid Panel"
            ]
        },
        {
            "name": "David Miller",
            "gender": "Male",
            "age": 34,
            "profile_picture": "https://fedskillstest.ct.digital/6.png",
            "date_of_birth": "1990-04-02",
            "phone_number": "(952) 767-2936",
            "emergency_contact": "(216) 364-3474",
            "insurance_type": "First Casualty Insurance",
            "diagnosis_history": [
                {
                    "month": "March",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 134,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 114,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 100,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "February",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 90,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 64,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 92,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 28,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "January",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 180,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 106,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 79,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 18,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "December",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 141,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 113,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 90,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 16,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "November",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 130,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 114,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 87,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "October",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 92,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 78,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 71,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 13,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "September",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 93,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 70,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 68,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 30,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "August",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 143,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 93,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 99,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 15,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "July",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 176,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 93,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 93,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                }
            ],
            "diagnostic_list": [
                {
                    "name": "Osteoarthritis",
                    "description": "A type of arthritis that occurs when flexible tissue at the ends of bones wears down.",
                    "status": "Under observation"
                },
                {
                    "name": "Heart Murmur",
                    "description": "Sounds during your heartbeat cycle made by turbulent blood in or near your heart.",
                    "status": "Cured"
                },
                {
                    "name": "Asthma",
                    "description": "A condition in which your airways narrow and swell and may produce extra mucus.",
                    "status": "Untreated"
                }
            ],
            "lab_results": [
                "CT Scan",
                "Mammography",
                "Liver Function Tests",
                "Radiology Report",
                "Complete Blood Count (CBC)"
            ]
        },
        {
            "name": "David Johnson",
            "gender": "Male",
            "age": 61,
            "profile_picture": "https://fedskillstest.ct.digital/7.png",
            "date_of_birth": "1963-01-26",
            "phone_number": "(513) 221-6670",
            "emergency_contact": "(833) 998-1719",
            "insurance_type": "Premier Property Services",
            "diagnosis_history": [
                {
                    "month": "March",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 167,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 64,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 64,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 15,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 173,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 82,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 84,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 28,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 179,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 86,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 65,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 99,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 94,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 64,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 27,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 164,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 60,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 81,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "October",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 92,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 86,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 94,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 28,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "September",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 152,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 73,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 82,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "August",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 163,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 79,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 94,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "July",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 139,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 115,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 99,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "June",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 158,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 81,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 83,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 101,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "May",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 114,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 71,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 84,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "April",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 90,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 72,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 89,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 13,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "March",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 108,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 75,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 66,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 15,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "February",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 107,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 105,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 94,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 152,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 106,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 96,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 118,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 104,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 88,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 29,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 140,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 89,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 76,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 21,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 97,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "October",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 138,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 105,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 95,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 22,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "September",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 152,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 98,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 80,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "August",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 162,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 61,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 98,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "July",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 167,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 91,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 66,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 14,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "June",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 108,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 115,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 97,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 15,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "May",
                    "year": 2022,
                    "blood_pressure": {
                        "systolic": {
                            "value": 91,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 67,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 69,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 26,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                }
            ],
            "diagnostic_list": [
                {
                    "name": "Type 2 Diabetes",
                    "description": "A chronic condition that affects the way the body processes blood sugar (glucose).",
                    "status": "Under observation"
                },
                {
                    "name": "Osteoarthritis",
                    "description": "A type of arthritis that occurs when flexible tissue at the ends of bones wears down.",
                    "status": "Under observation"
                },
                {
                    "name": "Asthma",
                    "description": "A condition in which your airways narrow and swell and may produce extra mucus.",
                    "status": "Actively being treated"
                },
                {
                    "name": "Heart Murmur",
                    "description": "Sounds during your heartbeat cycle made by turbulent blood in or near your heart.",
                    "status": "Actively being treated"
                },
                {
                    "name": "Asthma",
                    "description": "A condition in which your airways narrow and swell and may produce extra mucus.",
                    "status": "Under observation"
                }
            ],
            "lab_results": [
                "Renal Function Tests",
                "CT Scan",
                "X-Ray",
                "Echocardiogram",
                "Vitamin D Level",
                "Electrocardiogram (EKG)",
                "Liver Function Tests"
            ]
        },
        {
            "name": "Elizabeth Johnson",
            "gender": "Female",
            "age": 31,
            "profile_picture": "https://fedskillstest.ct.digital/8.png",
            "date_of_birth": "1993-01-10",
            "phone_number": "(325) 542-8009",
            "emergency_contact": "(690) 207-5485",
            "insurance_type": "Global Property Assurance",
            "diagnosis_history": [
                {
                    "month": "March",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 115,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 77,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 60,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 24,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "February",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 175,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 109,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 80,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "January",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 110,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 67,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 96,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "December",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 95,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 118,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 85,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 16,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "November",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 174,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 60,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 98,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 24,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "October",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 150,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 118,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 70,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 19,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "September",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 116,
                            "levels": "Normal"
                        },
                        "diastolic": {
                            "value": 93,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 80,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "August",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 165,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 113,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 74,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 15,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 100,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "July",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 146,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 114,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 82,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 25,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 102,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "June",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 142,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 79,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 99,
                        "levels": "Normal"
                    },
                    "respiratory_rate": {
                        "value": 17,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                },
                {
                    "month": "May",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 137,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 80,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 65,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 23,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 99,
                        "levels": "Normal"
                    }
                },
                {
                    "month": "April",
                    "year": 2023,
                    "blood_pressure": {
                        "systolic": {
                            "value": 149,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 90,
                            "levels": "Normal"
                        }
                    },
                    "heart_rate": {
                        "value": 61,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 13,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 103,
                        "levels": "Higher than Average"
                    }
                }
            ],
            "diagnostic_list": [
                {
                    "name": "Allergies",
                    "description": "The immune system's reaction to foreign substances that are typically not harmful.",
                    "status": "Cured"
                },
                {
                    "name": "Heart Murmur",
                    "description": "Sounds during your heartbeat cycle made by turbulent blood in or near your heart.",
                    "status": "Cured"
                },
                {
                    "name": "Heart Murmur",
                    "description": "Sounds during your heartbeat cycle made by turbulent blood in or near your heart.",
                    "status": "Actively being treated"
                },
                {
                    "name": "Asthma",
                    "description": "A condition in which your airways narrow and swell and may produce extra mucus.",
                    "status": "Under observation"
                },
                {
                    "name": "Hyperhidrosis",
                    "description": "A condition characterized by excessive sweating.",
                    "status": "Under observation"
                }
            ],
            "lab_results": [
                "Ultrasound",
                "Urinalysis",
                "Lipid Panel",
                "Radiology Report",
                "Bone Density Scan",
                "Prostate-Specific Antigen (PSA)"
            ]
        }
    ]
    const selectedPatient = info[3];

    function GetMetricLabel(level) {
        if (String(level.level).startsWith('Lower')) {
            return <><img alt="" className="diagnosisHistory__metrics__arrow" src={arrowDown}/> {level.level}</>;
        }
        else if (String(level.level).startsWith('Higher')) {
            return <><img alt="" className="diagnosisHistory__metrics__arrow" src={arrowUp} /> {level.level}</>;
        }
        return <>{level.level}</>;
    }

    // eslint-disable-next-line
    useEffect(() => { printData(); }, [])


    function printData() {
        let selectedPatient = info[3];
        let patientInfo = document.getElementsByClassName("information")[0];
        patientInfo.children[0].src = selectedPatient.profile_picture;
        patientInfo.children[1].innerHTML = selectedPatient.name;
        let patientInfoItems = patientInfo.getElementsByClassName("information__item");
        patientInfoItems[0].children[1].children[1].innerHTML = selectedPatient.date_of_birth;
        patientInfoItems[1].children[1].children[1].innerHTML = selectedPatient.gender;
        patientInfoItems[2].children[1].children[1].innerHTML = selectedPatient.phone_number;
        patientInfoItems[3].children[1].children[1].innerHTML = selectedPatient.emergency_contact;
        patientInfoItems[4].children[1].children[1].innerHTML = selectedPatient.insurance_type;



        let patientMetricsDiv = document.getElementsByClassName("diagnosisHistory__metrics")[0];
        let patientLastMetrics = selectedPatient.diagnosis_history[0];
        patientMetricsDiv.children[0].getElementsByClassName("diagnosisHistory__metrics__value")[0].innerHTML = patientLastMetrics.respiratory_rate.value + ' bpm';
        patientMetricsDiv.children[1].getElementsByClassName("diagnosisHistory__metrics__value")[0].innerHTML = selectedPatient.diagnosis_history[0].temperature.value + ' °F';
        patientMetricsDiv.children[2].getElementsByClassName("diagnosisHistory__metrics__value")[0].innerHTML = selectedPatient.diagnosis_history[0].heart_rate.value + ' bpm';

        let patientBloodPressure = document.getElementsByClassName("diagnosisHistory__bloodPressure__right")[0];
        patientBloodPressure.children[0].getElementsByClassName("diagnosisHistory__bloodPressure__right__item__legend")[0].style.background = '#E66FD2';
        patientBloodPressure.children[0].getElementsByClassName("diagnosisHistory__bloodPressure__right__item__value")[0].innerHTML = selectedPatient.diagnosis_history[0].blood_pressure.systolic.value;
        patientBloodPressure.children[1].getElementsByClassName("diagnosisHistory__bloodPressure__right__item__legend")[0].style.background = '#8C6FE6';
        patientBloodPressure.children[1].getElementsByClassName("diagnosisHistory__bloodPressure__right__item__value")[0].innerHTML = selectedPatient.diagnosis_history[0].blood_pressure.diastolic.value;

        const DATA_COUNT = 6;
        const labels = [];
        const systolic = [];
        const diastolic = [];
        for (let i = 0; i < DATA_COUNT; i++) {
            let aux = selectedPatient.diagnosis_history[i];
            labels.push(String(aux.month).slice(0, 3) + ', ' + aux.year);
            systolic.push(aux.blood_pressure.systolic.value);
            diastolic.push(aux.blood_pressure.diastolic.value);
        }
        const data = {
            labels: labels.reverse(),
            datasets: [
                {
                    data: systolic.reverse(),
                    borderColor: '#C26EB4',
                    pointBackgroundColor: '#E66FD2',
                    pointRadius: 7,
                    fill: false,
                    cubicInterpolationMode: 'monotone',
                    tension: 0.4,
                }, {
                    data: diastolic.reverse(),
                    borderColor: '#7E6CAB',
                    pointBackgroundColor: '#8C6FE6',
                    pointRadius: 7,
                    fill: false,
                    cubicInterpolationMode: 'monotone',
                    tension: 0.4
                }
            ]
        };
        const config = {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                legend: {
                    display: false
                },
                interaction: {
                    intersect: false,
                },
                scales: {
                    xAxes: [{
                        display: true,
                        title: {
                            display: true
                        },
                        gridLines: {
                            display: false
                        }
                    }],
                }
            },
        };
        new Chart(document.getElementById("myChart"), config);// eslint-disable-line
    }

    return (
        <>
            <div className="container">
                <div className="navbar">
                    <div className="nav__logo">
                    </div>
                    <div className="nav__sections">
                        <div className="nav__section">
                            <div className="nav__section__icon">
                                <img src={sections1} alt=""/>
                            </div>
                            <div className="nav__section__label">
                                Overview
                            </div>
                        </div>
                        <div className="nav__section nav__section--selected">
                            <div className="nav__section__icon">
                                <img src={sections2}  alt=""/>
                            </div>
                            <div className="nav__section__label">
                                Patients
                            </div>
                        </div>
                        <div className="nav__section">
                            <div className="nav__section__icon">
                                <img src={sections3}  alt=""/>
                            </div>
                            <div className="nav__section__label">
                                Schedule
                            </div>
                        </div>
                        <div className="nav__section">
                            <div className="nav__section__icon">
                                <img src={sections4}  alt=""/>
                            </div>
                            <div className="nav__section__label">
                                Message
                            </div>
                        </div>
                        <div className="nav__section">
                            <div className="nav__section__icon">
                                <img src={sections5} alt="" />
                            </div>
                            <div className="nav__section__label">
                                Transactions
                            </div>
                        </div>
                    </div>
                    <div className="nav__user">
                        <img className="nav__user__pic" src={doctorPic}  alt=""/>
                        <div className="nav__user__info">
                            <p className="nav__user__info__title">
                                Dr. Jose Simmons
                            </p>
                            <p className="nav__user__info__subtitle">
                                General Practitioner
                            </p>
                        </div>
                        <div className="nav__user__settings">
                            <img className="nav__user__settings__icon" src={gearIcon} alt=""/>
                            <img alt=""  className="nav__user__settings__icon" src={verticalPoints} />
                        </div>
                    </div>
                </div>
                <main>
                    <div className="patients">
                        <div className="patients__search">
                            Patients
                            <img alt="" className="patients__search__icon" src={searchIcon} />
                        </div>
                        {info.map((patient, index) => (
                            <div className="patients__patient" key={index}>
                                <div className="flex-row-center">
                                    <img alt="" className="patients__patient__pic" src={patient.profile_picture} />
                                    <div className="patients__patient__label">
                                        <p className="patients__patient__label__title">{patient.name}</p>
                                        <p className="patients__patient__label__subtitle">{patient.gender} , {patient.age}</p>
                                    </div>
                                </div>
                                <img alt="" className="patients__patient__options" src={horizontalPoints} />
                            </div>
                        ))}
                    </div>
                    <div className="main__center">
                        <div className="diagnosisHistory">
                            <p className="sectionTitle">Diagnosis History</p>
                            <div className="diagnosisHistory__bloodPressure">
                                <div className="diagnosisHistory__bloodPressure__left">
                                    <div className="diagnosisHistory__bloodPressure__left__header">
                                        <div className="diagnosisHistory__bloodPressure__left__header__title">
                                            Blood Pressure
                                        </div>
                                        <div className="diagnosisHistory__bloodPressure__left__header__filter">
                                            Last 6 months
                                        </div>
                                    </div>
                                    <canvas id="myChart"></canvas>
                                </div>
                                <div className="diagnosisHistory__bloodPressure__right">
                                    <div className="diagnosisHistory__bloodPressure__right__item">
                                        <div className="diagnosisHistory__bloodPressure__right__item__label flex-row-center">
                                            <div className="diagnosisHistory__bloodPressure__right__item__legend flex-row-center">
                                            </div>
                                            Systolic
                                        </div>
                                        <p className="diagnosisHistory__bloodPressure__right__item__value">

                                        </p>
                                        <p className="diagnosisHistory__bloodPressure__right__item__level flex-row-center">
                                            <GetMetricLabel level = {selectedPatient.diagnosis_history[0].blood_pressure.systolic.levels}/>
                                        </p>
                                    </div>
                                    <div className="diagnosisHistory__bloodPressure__right__item">
                                        <div className="diagnosisHistory__bloodPressure__right__item__label flex-row-center">
                                            <div className="diagnosisHistory__bloodPressure__right__item__legend"></div>
                                            Diastolic
                                        </div>
                                        <p className="diagnosisHistory__bloodPressure__right__item__value">

                                        </p>
                                        <p className="diagnosisHistory__bloodPressure__right__item__level flex-row-center">
                                        <GetMetricLabel level = {selectedPatient.diagnosis_history[0].blood_pressure.diastolic.levels}/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="diagnosisHistory__metrics">
                                <div className="diagnosisHistory__metrics__respiratory diagnosisHistory__metrics__item">
                                    <img alt="" className="diagnosisHistory__metrics__pic" src={respiratoryRate} />
                                    <p className="diagnosisHistory__metrics__label">Respiratory Rate</p>
                                    <p className="diagnosisHistory__metrics__value"></p>
                                    <p className="diagnosisHistory__metrics__range">
                                    <GetMetricLabel level = {selectedPatient.diagnosis_history[0].respiratory_rate.levels}/>
                                    </p>
                                </div>
                                <div className="diagnosisHistory__metrics__temperature diagnosisHistory__metrics__item">
                                    <img alt="" className="diagnosisHistory__metrics__pic" src={temperatureIcon} />
                                    <p className="diagnosisHistory__metrics__label">Temperature</p>
                                    <p className="diagnosisHistory__metrics__value"></p>
                                    <p className="diagnosisHistory__metrics__range">
                                    <GetMetricLabel level = {selectedPatient.diagnosis_history[0].temperature.levels}/>
                                    </p>
                                </div>
                                <div className="diagnosisHistory__metrics__heart diagnosisHistory__metrics__item">
                                    <img alt="" className="diagnosisHistory__metrics__pic" src={heartBPM} />
                                    <p className="diagnosisHistory__metrics__label">Heart Rate</p>
                                    <p className="diagnosisHistory__metrics__value"></p>
                                    <p className="diagnosisHistory__metrics__range">
                                    <GetMetricLabel level = {selectedPatient.diagnosis_history[0].heart_rate.levels}/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="diagnosisList">
                            <p className="sectionTitle">Diagnostic List</p>
                            <div className="diagnosisList__header">
                                <div className="diagnosisList__header__problem">Problem/Diagnosis</div>
                                <div className="diagnosisList__header__description">Description</div>
                                <div className="diagnosisList__header__status">Status</div>
                            </div>
                            <div className='diagnosisList__list'>
                                {selectedPatient.diagnostic_list.map((diagnostic,index) => (
                                    <div className="diagnosisList__list__item" key={index}>
                                        <div className="diagnosisList__list__item__problem">{diagnostic.name}</div>
                                        <div className="diagnosisList__list__item__description">{diagnostic.description}</div>
                                        <div className="diagnosisList__list__item__status">{diagnostic.status}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="main__right">
                        <div className="information">
                            <img alt="" className="information__pic" />
                            <p className="information__name"></p>
                            <div className="information__items">
                                <div className="information__item">
                                    <img alt="" className="information__item__icon" src={birthIcon} />
                                    <div className="information__item__label">
                                        <p className="information__item__label__title">Date of Birth</p>
                                        <p className="information__item__label__subtitle"></p>
                                    </div>
                                </div>
                                <div className="information__item">
                                    <img alt="" className="information__item__icon" src={femaleIcon} />
                                    <div className="information__item__label">
                                        <p className="information__item__label__title">Gender</p>
                                        <p className="information__item__label__subtitle"></p>
                                    </div>
                                </div>
                                <div className="information__item">
                                    <img alt="" className="information__item__icon" src={phoneIcon} />
                                    <div className="information__item__label">
                                        <p className="information__item__label__title">Contact Info</p>
                                        <p className="information__item__label__subtitle"></p>
                                    </div>
                                </div>
                                <div className="information__item">
                                    <img alt="" className="information__item__icon" src={phoneIcon} />
                                    <div className="information__item__label">
                                        <p className="information__item__label__title">Emergency Contacts</p>
                                        <p className="information__item__label__subtitle"></p>
                                    </div>
                                </div>
                                <div className="information__item">
                                    <img alt="" className="information__item__icon" src={insuranceIcon} />
                                    <div className="information__item__label">
                                        <p className="information__item__label__title">Insurance Provider</p>
                                        <p className="information__item__label__subtitle"></p>
                                    </div>
                                </div>
                                <div className="information__show">
                                    Show All Information
                                </div>
                            </div>
                        </div>
                        <div className="results">
                            <p className="sectionTitle">Results</p>
                            <div className='results__items'>
                                {selectedPatient.lab_results.map((result, index) => (
                                    <div className="results__item" key={index}>{result}
                                        <img alt="" src={downLoadIcon} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}