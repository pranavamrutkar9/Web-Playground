import React from 'react'
import './App.css'
import { Bookmark, User } from 'lucide-react';
import Card from './components/Card.jsx';


const App = () => {

  const jobOpenings = [
    {
      companyLogo: 'https://placehold.co/100x100/4285F4/ffffff?text=G',
      name: 'Google',
      position: 'Software Engineer, Machine Learning',
      type: 'Full-time',
      level: 'Senior-level',
      rate: '₹40,00,000 - ₹60,00,000 PA',
      location: 'Bengaluru, Karnataka',
      daysPosted: 3
    },
    {
      companyLogo: 'https://placehold.co/100x100/FF9900/000000?text=A',
      name: 'Amazon',
      position: 'Cloud Support Engineer',
      type: 'Full-time',
      level: 'Mid-level',
      rate: '₹15,00,000 - ₹25,00,000 PA',
      location: 'Hyderabad, Telangana',
      daysPosted: 7
    },
    {
      companyLogo: 'https://placehold.co/100x100/F25022/FFFFFF?text=M',
      name: 'Microsoft',
      position: 'Cloud Solutions Architect',
      type: 'Full-time',
      level: 'Senior-level',
      rate: '₹35,00,000 - ₹55,00,000 PA',
      location: 'Bengaluru, Karnataka',
      daysPosted: 2
    },
    {
      companyLogo: 'https://placehold.co/100x100/A2AAAD/000000?text=A',
      name: 'Apple',
      position: 'iOS Developer',
      type: 'Full-time',
      level: 'Mid-level',
      rate: '₹20,00,000 - ₹35,00,000 PA',
      location: 'Hyderabad, Telangana (Remote)',
      daysPosted: 12
    },
    {
      companyLogo: 'https://placehold.co/100x100/00529F/FFFFFF?text=TCS',
      name: 'Tata Consultancy Services',
      position: 'IT Consultant',
      type: 'Full-time',
      level: 'Senior-level',
      rate: '₹18,00,000 - ₹28,00,000 PA',
      location: 'Mumbai, Maharashtra',
      daysPosted: 5
    },
    {
      companyLogo: 'https://placehold.co/100x100/0078D2/FFFFFF?text=I',
      name: 'Infosys',
      position: 'Senior Systems Engineer',
      type: 'Full-time',
      level: 'Mid-Senior level',
      rate: '₹12,00,000 - ₹20,00,000 PA',
      location: 'Pune, Maharashtra',
      daysPosted: 9
    },
    {
      companyLogo: 'https://placehold.co/100x100/34A853/FFFFFF?text=W',
      name: 'Wipro',
      position: 'Project Manager',
      type: 'Hybrid',
      level: 'Senior-level',
      rate: '₹22,00,000 - ₹32,00,000 PA',
      location: 'Chennai, Tamil Nadu',
      daysPosted: 15
    },
    {
      companyLogo: 'https://placehold.co/100x100/00447C/FFFFFF?text=HCL',
      name: 'HCL Technologies',
      position: 'Automation Test Lead',
      type: 'Full-time',
      level: 'Mid-level',
      rate: '₹11,00,000 - ₹17,00,000 PA',
      location: 'Noida, Uttar Pradesh',
      daysPosted: 4
    },
    {
      companyLogo: 'https://placehold.co/100x100/A100FF/FFFFFF?text=A',
      name: 'Accenture',
      position: 'Technology Consulting Manager',
      type: 'Full-time',
      level: 'Mid-Senior level',
      rate: '₹25,00,000 - ₹40,00,000 PA',
      location: 'Gurugram, Haryana',
      daysPosted: 8
    },
    {
      companyLogo: 'https://placehold.co/100x100/054ADA/FFFFFF?text=IBM',
      name: 'IBM',
      position: 'Data and AI Specialist',
      type: 'Hybrid',
      level: 'Senior-level',
      rate: '₹30,00,000 - ₹50,00,000 PA',
      location: 'Kolkata, West Bengal',
      daysPosted: 6
    }
  ];



  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        console.log(idx)
        return <Card key={idx} logo={elem.companyLogo} company={elem.name}  post={elem.position} daysPosted={elem.daysPosted} type={elem.type} level={elem.level} pay={elem.level} location={elem.location} />
      })}
    </div>
  )
}

export default App
