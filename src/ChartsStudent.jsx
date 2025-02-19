// import React, { useState, useEffect } from "react";
// import { PieChart, Pie, ResponsiveContainer } from "recharts";

// const ChartsStudent = () => {
//   const [classes, setClasses] = useState([]);
//   const [selectedClass, setSelectedClass] = useState("");
//   const [sectionsData, setSectionsData] = useState({
//     "Section-A": [],
//     "Section-B": [],
//     "Section-C": [],
//     "Section-D": [],
//   });

//   useEffect(() => {
//     // Fetch available classes from the API
//     fetch("API_URL_FOR_CLASSES")
//       .then((response) => response.json())
//       .then((data) => setClasses(data))
//       .catch((error) => console.error("Error fetching classes:", error));
//   }, []);

//   useEffect(() => {
//     if (selectedClass) {
//       // Fetch data for each section based on the selected class
//       ["Section-A", "Section-B", "Section-C", "Section-D"].forEach(
//         (section) => {
//           fetch(`API_URL_FOR_DATA?class=${selectedClass}&section=${section}`)
//             .then((response) => response.json())
//             .then((data) =>
//               setSectionsData((prevData) => ({
//                 ...prevData,
//                 [section]: data,
//               }))
//             )
//             .catch((error) =>
//               console.error(`Error fetching data for ${section}:`, error)
//             );
//         }
//       );
//     }
//   }, [selectedClass]);

//   return (
//     <div>
//       <div>
//         <label htmlFor="class">Class:</label>
//         <select
//           id="class"
//           value={selectedClass}
//           onChange={(e) => setSelectedClass(e.target.value)}
//         >
//           <option value="">Select Class</option>
//           {classes.map((cls) => (
//             <option key={cls} value={cls}>
//               {cls}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           flexWrap: "wrap",
//         }}
//       >
//         {["Section-A", "Section-B", "Section-C", "Section-D"].map((section) => (
//           <div key={section} style={{ width: "45%", margin: "20px" }}>
//             <h3>{section}</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   dataKey="value"
//                   startAngle={180}
//                   endAngle={0}
//                   data={sectionsData[section]}
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={80}
//                   fill="#8884d8"
//                   label
//                 />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ChartsStudent;

// import React, { useState, useEffect } from "react";
// import { PieChart, Pie, ResponsiveContainer } from "recharts";

// const data = {
//   class1: {
//     "Section-A": [
//       { name: "House A", value: 100 },
//       { name: "House B", value: 80 },
//       { name: "House C", value: 50 },
//       { name: "House D", value: 70 },
//     ],
//     "Section-B": [
//       { name: "House A", value: 90 },
//       { name: "House B", value: 60 },
//       { name: "House C", value: 50 },
//       { name: "House D", value: 40 },
//     ],
//     "Section-C": [
//       { name: "House A", value: 85 },
//       { name: "House B", value: 75 },
//       { name: "House C", value: 95 },
//       { name: "House D", value: 100 },
//     ],
//     "Section-D": [
//       { name: "House A", value: 70 },
//       { name: "House B", value: 80 },
//       { name: "House C", value: 60 },
//       { name: "House D", value: 50 },
//     ],
//   },
//   // More classes can be added here
// };

// const fetchClassData = (className) => {
//   // Simulate an API call
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(data[className] || {});
//     }, 1000);
//   });
// };

// const PieChartComponent = () => {
//   const [selectedClass, setSelectedClass] = useState("class1");
//   const [classData, setClassData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       const result = await fetchClassData(selectedClass);
//       setClassData(result);
//       setLoading(false);
//     };

//     fetchData();
//   }, [selectedClass]);

//   const handleClassChange = (event) => {
//     setSelectedClass(event.target.value);
//   };

//   const renderPieChart = (section) => (
//     <ResponsiveContainer width="100%" height={200}>
//       <PieChart>
//         <Pie
//           dataKey="value"
//           startAngle={180}
//           endAngle={0}
//           data={classData[section]}
//           cx="50%"
//           cy="50%"
//           outerRadius={80}
//           fill="#8884d8"
//           label
//         />
//       </PieChart>
//     </ResponsiveContainer>
//   );

//   return (
//     <div>
//       <label>Select Class:</label>
//       <select value={selectedClass} onChange={handleClassChange}>
//         <option value="class1">Class 1</option>
//         {/* Add more classes here */}
//       </select>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           <h3>Section A</h3>
//           {renderPieChart("Section-A")}
//           <h3>Section B</h3>
//           {renderPieChart("Section-B")}
//           <h3>Section C</h3>
//           {renderPieChart("Section-C")}
//           <h3>Section D</h3>
//           {renderPieChart("Section-D")}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PieChartComponent;

// // Third attempt
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { PieChart, Pie, ResponsiveContainer } from "recharts";

// const mockClasses = ["class1", "class2", "class3"];
// const mockData = {
//   class1: {
//     "Section-A": [
//       { name: "House A", value: 100 },
//       { name: "House B", value: 80 },
//       { name: "House C", value: 50 },
//       { name: "House D", value: 70 },
//     ],
//     "Section-B": [
//       { name: "House A", value: 90 },
//       { name: "House B", value: 60 },
//       { name: "House C", value: 50 },
//       { name: "House D", value: 40 },
//     ],
//     "Section-C": [
//       { name: "House A", value: 85 },
//       { name: "House B", value: 75 },
//       { name: "House C", value: 95 },
//       { name: "House D", value: 100 },
//     ],
//     "Section-D": [
//       { name: "House A", value: 70 },
//       { name: "House B", value: 80 },
//       { name: "House C", value: 60 },
//       { name: "House D", value: 50 },
//     ],
//   },
//   // More mock data for other classes...
// };

// // Mock API calls for demonstration purposes
// const fetchClasses = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(mockClasses);
//     }, 1000);
//   });
// };

// const fetchSectionData = async (selectedClass, section) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(mockData[selectedClass][section]);
//     }, 1000);
//   });
// };

// const PieChartComponent = () => {
//   const [classes, setClasses] = useState([]);
//   const [selectedClass, setSelectedClass] = useState("");
//   const [sectionsData, setSectionsData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const fetchedClasses = await fetchClasses();
//       setClasses(fetchedClasses);
//       setSelectedClass(fetchedClasses[0]);
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const fetchSectionDataForClass = async () => {
//       if (!selectedClass) return;

//       setLoading(true);
//       const sectionNames = ["Section-A", "Section-B", "Section-C", "Section-D"];
//       const data = {};

//       for (const section of sectionNames) {
//         data[section] = await fetchSectionData(selectedClass, section);
//       }

//       setSectionsData(data);
//       setLoading(false);
//     };

//     fetchSectionDataForClass();
//   }, [selectedClass]);

//   const handleClassChange = (event) => {
//     setSelectedClass(event.target.value);
//   };

//   const renderPieChart = (section) => (
//     <ResponsiveContainer height={"100%"} className={`flex flex-row`}>
//       <PieChart>
//         <Pie
//           dataKey="value"
//           startAngle={180}
//           endAngle={0}
//           data={sectionsData[section]}
//           cx="50%"
//           cy="50%"
//           outerRadius={80}
//           fill="#8884d8"
//           label
//         />
//       </PieChart>
//     </ResponsiveContainer>
//   );

//   return (
//     <div>
//       <label>Select Class:</label>
//       <select value={selectedClass} onChange={handleClassChange}>
//         <option value="">Select Class</option>
//         {classes.map((cls) => (
//           <option key={cls} value={cls}>
//             {cls}
//           </option>
//         ))}
//       </select>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           <h3>Section A</h3>
//           {renderPieChart("Section-A")}
//           <h3>Section B</h3>
//           {renderPieChart("Section-B")}
//           <h3>Section C</h3>
//           {renderPieChart("Section-C")}
//           <h3>Section D</h3>
//           {renderPieChart("Section-D")}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PieChartComponent;

// // Four attempts
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { PieChart, Pie, ResponsiveContainer } from "recharts";

// const API_URL = "http://127.0.0.1:8000";

// const dummyData = {
//   class1: [
//     { name: "Group A", value: 400 },
//     { name: "Group B", value: 300 },
//     { name: "Group C", value: 300 },
//     { name: "Group D", value: 200 },
//   ],
//   class2: [
//     { name: "Group A", value: 200 },
//     { name: "Group B", value: 100 },
//     { name: "Group C", value: 300 },
//     { name: "Group D", value: 400 },
//   ],
//   // More classes can be added here
// };

// const ChartsStudent = () => {
//   const [classes, setClasses] = useState([]);
//   const [selectedClass, setSelectedClass] = useState("");
//   const [classData, setClassData] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchClasses = async () => {
//       try {
//         const token = localStorage.getItem("authToken");
//         const academicYr = localStorage.getItem("academicYear");

//         if (!token || !academicYr) {
//           throw new Error("No authentication token or academic year found");
//         }

//         const response = await axios.get(`${API_URL}/api/classes`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "X-Academic-Year": academicYr,
//           },
//         });

//         setClasses(response.data);
//       } catch (error) {
//         setError(error.message);
//         console.error("Error fetching classes:", error);
//       }
//     };

//     fetchClasses();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (!selectedClass) return;

//         const token = localStorage.getItem("authToken");
//         const academicYr = localStorage.getItem("academicYear");

//         if (!token || !academicYr) {
//           throw new Error("No authentication token or academic year found");
//         }

//         const response = await axios.get(`${API_URL}/api/data`, {
//           params: { class: selectedClass },
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "X-Academic-Year": academicYr,
//           },
//         });

//         setClassData(response.data);
//       } catch (error) {
//         console.error("Error fetching class data:", error);
//         // Fallback to dummy data in case of an error
//         setClassData(dummyData[selectedClass] || []);
//       }
//     };

//     fetchData();
//   }, [selectedClass]);

//   const renderPieChart = () => (
//     <ResponsiveContainer width="100%" height={400}>
//       <PieChart>
//         <Pie
//           dataKey="value"
//           startAngle={180}
//           endAngle={0}
//           data={classData}
//           cx="50%"
//           cy="50%"
//           outerRadius={80}
//           fill="#8884d8"
//           label
//         />
//       </PieChart>
//     </ResponsiveContainer>
//   );

//   return (
//     <div>
//       <label>Select Class:</label>
//       <select
//         value={selectedClass}
//         onChange={(e) => setSelectedClass(e.target.value)}
//       >
//         <option value="">Select Class</option>
//         {classes.map((cls) => (
//           <option key={cls} value={cls}>
//             {cls}
//           </option>
//         ))}
//       </select>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {selectedClass ? (
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "space-between",
//           }}
//         >
//           {Array(4)
//             .fill()
//             .map((_, index) => (
//               <div key={index} style={{ width: "48%", marginBottom: "20px" }}>
//                 {renderPieChart()}
//               </div>
//             ))}
//         </div>
//       ) : (
//         <p>Please select a class to view the charts.</p>
//       )}
//     </div>
//   );
// };

// export default ChartsStudent;

// fifth type
import React, { useState, useEffect } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const dummyClasses = ["class1", "class2"]; // Dummy classes data

const dummyData = {
  class1: [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ],
  class2: [
    { name: "Group A", value: 200 },
    { name: "Group B", value: 100 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 400 },
  ],
  // More classes can be added here
};

const ChartsStudent = () => {
  const [classes, setClasses] = useState(dummyClasses);
  const [selectedClass, setSelectedClass] = useState("");
  const [classData, setClassData] = useState([]);
  const [error, setError] = useState("");

  // useEffect to fetch classes from API (currentlyfds using dummy data)
  useEffect(() => {
    // Uncomment and modify the following block when API is available
    /*
    const fetchClasses = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const academicYr = localStorage.getItem("academicYear");

        if (!token || !academicYr) {
          throw new Error("No authentication token or academic year found");
        }

        const response = await axios.get(`${API_URL}/api/classes`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "X-Academic-Year": academicYr,
          },
        });

        setClasses(response.data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching classes:", error);
      }
    };

    fetchClasses();
    */
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!selectedClass) return;

        // Simulate API call with dummy data
        // Uncomment and modify the following block when API is available
        /*
        const token = localStorage.getItem("authToken");
        const academicYr = localStorage.getItem("academicYear");

        if (!token || !academicYr) {
          throw new Error("No authentication token or academic year found");
        }

        const response = await axios.get(`${API_URL}/api/data`, {
          params: { class: selectedClass },
          headers: {
            Authorization: `Bearer ${token}`,
            "X-Academic-Year": academicYr,
          },
        });

        setClassData(response.data);
        */
        setClassData(dummyData[selectedClass] || []);
      } catch (error) {
        console.error("Error fetching class data:", error);
        // Fallback to dummy data in case of an error
        setClassData(dummyData[selectedClass] || []);
      }
    };

    fetchData();
  }, [selectedClass]);

  const renderPieChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={classData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );

  return (
    <div>
      <label>Select Class:</label>
      <select
        value={selectedClass}
        onChange={(e) => setSelectedClass(e.target.value)}
      >
        <option value="">Select Class</option>
        {classes.map((cls) => (
          <option key={cls} value={cls}>
            {cls}
          </option>
        ))}
      </select>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {selectedClass ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // flexWrap: "wrap",
            width: "66vw",
            gap: "5px",
            border: "1px solid red",
            // justifyContent: "space-between",
          }}
        >
          {Array(4)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                style={{
                  boxSizing: "border-box",
                  width: "20vw",
                  border: "2px solid black",
                  marginBottom: "20px",
                }}
              >
                {renderPieChart()}
              </div>
            ))}
        </div>
      ) : (
        <p>Please select a class to view the charts.</p>
      )}
    </div>
  );
};

export default ChartsStudent;
