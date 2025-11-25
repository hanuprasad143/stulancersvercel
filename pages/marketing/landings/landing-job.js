import { Fragment } from "react";
import { Autocomplete, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

// import widget/custom components
import { LogosTopHeadingOffset2, GeeksSEO, HeroFindJobs } from "widgets";

// import sub components
import {
  BrowseJobCategories,
  CustomerStories,
  HowItWorks,
  LatestJobOpening,
  TopCompanies,
} from "sub-components";

// import data files
import LogoList2 from "data/clientlogos/LogoList2";

// import your layout to override default layout
import JobListingLayout from "layouts/marketing/JobListingLayout";

const skillOptions = {
  "Web Development": [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
  ],
  "Mobile Development": ["Flutter", "React Native", "Kotlin", "Swift"],
  "Data Science": [
    "Python",
    "Pandas",
    "TensorFlow",
    "PyTorch",
    "SQL",
    "Scikit-learn",
  ],
  DevOps: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
};

const LandingJob = () => {
  const [category, setCategory] = useState("Web Development");
  const [skills, setSkills] = useState([]);
  return (
    <Fragment>
      {/* Geeks SEO settings  */}
      <GeeksSEO title="Jobs | Geeks Nextjs Template" />

      <main>
        {/* Find your dream job section */}
        <HeroFindJobs
          title="Find your dream job that you love to do."
          description="The largest remote work community in the world. Sign up and post a job or create your developer profile."
          totalJobs={30642}
          totalCompanies={5717}
        />

        {/* Logos section  */}
        <section className="py-8 bg-white">
          <LogosTopHeadingOffset2 limit={5} offset={1} logos={LogoList2} />
        </section>

        {/* Latest Job Opening section */}
        <LatestJobOpening />

        {/* How It Works section */}
        <HowItWorks />

        {/* Browse Category section */}
        <BrowseJobCategories />

        {/* Customer stories section */}
        <CustomerStories />

        {/* Top companies hiring section */}
        <TopCompanies />
        <div style={{ maxWidth: 600, margin: "50px auto" }}>
          <h2>Skills Required</h2>

          <TextField
            select
            label="Select Development Type"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setSkills([]); // Reset skills when category changes
            }}
            fullWidth
            margin="normal"
          >
            {Object.keys(skillOptions).map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>

          <Autocomplete
            multiple
            options={skillOptions[category]}
            value={skills}
            onChange={(event, newValue) => setSkills(newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Select Skills" variant="outlined" />
            )}
          />

          <div style={{ marginTop: 20 }}>
            <strong>Selected Skills:</strong>
            <ul>
              {skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

LandingJob.Layout = JobListingLayout;

export default LandingJob;
