import styles from "./Jobs.module.scss";
import React from "react";
import ReactMarkdown from "react-markdown";

const CustomList = ({ children }) => <ul className="list-disc list-inside">{children}</ul>;

function JobCard(props) {
  return (
    <div className={`flex flex-col gap-4 bg-gray-100 p-8 py-4 rounded-lg ${styles["job-card"]}`}>
      {/* Position Title */}
      <h3 className="font-semibold text-2xl text-center">{props.title}</h3>
      {/* Description */}
      <ReactMarkdown>
        {props.description}
      </ReactMarkdown>
      <h4 className="text-center text-lg font-semibold underline">Education and Experience</h4>
      {/* Requirements */}
      <ReactMarkdown components={{
        ul: ({ node, ...ulProps }) => <CustomList {...ulProps}/>,
      }}>
        {props.requirements}
      </ReactMarkdown>
    </div>
  );
}

export default function Jobs(props) {
  if (props.jobs.length === 0) {
    return (
      <p className="text-lg">
        We are always seeking exceptional talent that is passionate about making a difference in the lives of patients with cancer or autoimmune disorders. If you share our mission, and are interested in joining our team, please reach out to us via email at <a href="mailto:contact@anwitabio.com">contact@anwitabio.com</a>.
      </p>
    );
  }
  return (
    <div className="grid gap-4">
      {/* Job Cards */}
      {props.jobs.map((job) => (
        <JobCard key={job.id} title={job.title} description={job.description} requirements={job.requirements} />
      ))}
    </div>
  );
}
