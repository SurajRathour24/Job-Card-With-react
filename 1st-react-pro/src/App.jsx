import React from "react";
import Card from "./components/Card";

const App = () => {

  let users = [
    {
      date: "20 May, 2023",
    company: "Amazon",
    title: "Senior UI/UX Designer",
    salary: "$250/hr",
    location: "San Francisco, CA",
    details: "Details",
    postedon: '2 days ago'
    },
     {
    date: "16 June, 2023",
    company: "Google",
    title: "Junior UI/UX Designer",
    salary: "$150/hr",
    location: "California, CA",
    details: "Details",
    postedon: '4 days ago'
  },
  {
      date: "11 Sep, 2023",
    company: "Amazon",
    title: "Senior UI/UX Designer",
    salary: "$250/hr",
    location: "San Francisco, CA",
    details: "Details",
    postedon: '1 days ago'
    },
    {
      date: "24 April, 2026",
    company: "Google",
    title: "Senior Frontend Dev",
    salary: "$400/hr",
    location: "Remote",
    details: "Details",
    postedon: '11 days ago'
    },

  ]


  return (
    <div className="parent">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full">
          
          {/* <!-- Card 1 --> */}
          {users.map(function(user){
            return < Card date={user.date} company={user.company} location={user.location} salary={user.salary} role={user.title} posted={user.postedon} />
          })} 

        </div>
      </div>
    </div>
  );
};

export default App;
