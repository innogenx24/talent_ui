import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../../components/table-format/DynamicTable";
import axios from "axios";
import API_URL from "../../../api/Api_url";

const ExperienceRangeTable = () => {
  const [experienceRanges, setExperienceRanges] = useState([]);

  useEffect(() => {
    const fetchExperienceRanges = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(`${API_URL}/experience-range`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const formattedData = response.data.map((item, index) => ({
          serial: index + 1,
          id: item.id,
          experience_range: item.experience_range,
          description: item.description || "N/A",
          status: item.active_status ? "Active" : "Inactive",
        }));

        setExperienceRanges(formattedData);
      } catch (error) {
        console.error("Error fetching experience ranges:", error);
      }
    };

    fetchExperienceRanges();
  }, []);

  const columns = [
    { id: "serial", label: "No." },
    { id: "experience_range", label: "Experience Range" },
    { id: "description", label: "Description" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Experience Range List
      </Typography>

      <DynamicTable columns={columns} data={experienceRanges} />
    </>
  );
};

export default ExperienceRangeTable;
