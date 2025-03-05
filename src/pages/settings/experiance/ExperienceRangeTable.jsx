import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../../components/table-format/DynamicTable";

const ExperienceRangeTable = () => {
  const columns = [
    { id: "id", label: "No." },
    { id: "min_experience", label: "Experience Range (Years)" },
    { id: "description", label: "Description" },
  ];
  
  const data = [
    { id: 1, min_experience: "0", description: "Entry-level, no experience required" },
    { id: 2, min_experience: "1", description: "Junior level, basic industry experience" },
    { id: 3, min_experience: "3", description: "Mid-level, hands-on experience required" },
    { id: 4, min_experience: "5", description: "Senior level, advanced expertise" },
    { id: 5, min_experience: "10", description: "Expert level, leadership and strategy" },
  ];
  

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Experience Range List
      </Typography>

      <DynamicTable columns={columns} data={data} />
    </>
  );
};

export default ExperienceRangeTable;
