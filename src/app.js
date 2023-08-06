const express = require("express");
const path = require("path");
const app = express();

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "../public")));

// Sample data for the table
const tableData = [
  {
    id: 1,
    term: "DevOps",
    description:
      "Development + Operations. The mix of methods and tools aimed at enabling organizations to deliver applications and services more quickly than traditional development processes.",
    references:
      "“What Is DevOps and How Does It Work? | Synopsys,” www.synopsys.com. https://www.synopsys.com/glossary/what-is-devops.html#:~:text=Definition",
  },
  {
    id: 2,
    term: "Continuous Integration (CI)",
    description:
      "The process of automatically combining code changes from multiple contributors into one software project.",
    references:
      "Atlassian, “What is Continuous Integration,” Atlassian. https://www.atlassian.com/continuous-delivery/continuous-integration#:~:text=Continuous%20integration%20(CI)%20is%20the",
  },
  {
    id: 3,
    term: "Continuous Delivery (CD)",
    description:
      "Automatically delivering finished code to environments such as testing and development.",
    references:
      "“What Is CI/CD and How Does It Work? | Synopsys,” www.synopsys.com. https://www.synopsys.com/glossary/what-is-cicd.html#:~:text=Continuous%20delivery%20(CD)%20is%20the (accessed Jul. 22, 2023). ‌",
  },
  {
    id: 4,
    term: "Deployment",
    description:
      "Deployment is the act of releasing and installing software or applications into a specific environment, making them available for use by end-users.",
    references:
      'T. B. Brown et al., "Language Models are Few-Shot Learners," 2020.',
  },
  {
    id: 5,
    term: "Version Control",
    description:
      "Version control is the practice of tracking and managing changes to software code.",
    references:
      "Atlassian, “What is version control | Atlassian Git Tutorial,” Atlassian. https://www.atlassian.com/git/tutorials/what-is-version-control#:~:text=Version%20control%2C%20also%20known%20as ‌",
  },
  {
    id: 6,
    term: "Automation",
    description:
      "Automation involves using technology to produce and deliver goods or services with little human involvement. It improves efficiency, reliability, and speed for tasks that used to require human effort.",
    references:
      "Techopedia, “What Is Automation? - Definition from Techopedia,” Techopedia.com, Jun. 08, 2021. https://www.techopedia.com/definition/32099/automation ‌",
  },
  {
    id: 7,
    term: "Infrastructure as Code (IaC)",
    description:
      "Infrastructure as Code (IaC) is the practice of managing and setting up infrastructure using code instead of manual methods.",
    references:
      "“What is Infrastructure as Code (IaC)?,” www.redhat.com. https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac#:~:text=Infrastructure%20as%20Code%20(IaC)%20is ‌",
  },
  {
    id: 8,
    term: "Monitoring",
    description:
      "Continuous Monitoring is the process of regularly gathering, analyzing, and utilizing information to actively improve performance, maximize positive results, and reduce the risk of negative impacts.",
    references:
      "“Monitoring | BetterEvaluation,” www.betterevaluation.org. https://www.betterevaluation.org/methods-approaches/themes/monitoring#:~:text=Monitoring%20is%20a%20process%20to ‌",
  },
  {
    id: 9,
    term: "Incident Management",
    description:
      "Incident Management is the process used by IT Operations and DevOps teams to respond to and address unplanned events that can impact service quality or service operations.",
    references:
      "“What Is Incident Management?,” www.ibm.com. https://www.ibm.com/cloud/blog/what-is-incident-management#:~:text=Incident%20management%20is%20a%20process ‌",
  },
  {
    id: 10,
    term: "Agile",
    description:
      "Agile is a continuous improvement approach that involves a flexible, collaborative, and value-driven methodology. Easy Agile develops Jira apps that help teams work better with agile, offering simple and flexible functionality.",
    references:
      "“Agile 101: A Beginner’s Guide to Agile Methodology,” Easy Agile. https://www.easyagile.com/blog/agile-101/#:~:text=In%20basic%20terms%2C%20agile%20is (accessed Jul. 22, 2023). ‌",
  },
  {
    id: 11,
    term: "Artifact",
    description:
      "A ready-to-use output produced from code, like a software package ready for installation.",
    references:
      "“Managing DevOps Artifacts,” docs.oracle.com. https://docs.oracle.com/en-us/iaas/Content/devops/using/artifacts.htm#:~:text=DevOps%20artifacts%20are%20referenced%20in (accessed Aug. 06, 2023).",
  },
  {
    id: 12,
    term: "Pipeline",
    description:
      "A sequence of automated steps that build and deliver code, like a streamlined process for software development.",
    references:
      "Atlassian, “DevOps Pipeline,” Atlassian. https://www.atlassian.com/devops/devops-tools/devops-pipeline#:~:text=What%20is%20the%20DevOps%20pipeline (accessed Aug. 06, 2023).",
  },
  {
    id: 13,
    term: "Scalability",
    description:
      "The ability of a system to handle more work as needed, like a flexible team adjusting to larger projects.",
    references:
      "“Efficient methods for scaling DevOps & approaches to overcome challenges | ReviewNPrep,” Jul. 24, 2022. https://reviewnprep.com/blog/efficient-methods-for-scaling-devops-approaches-to-overcome-challenges/#:~:text=Scalability%20refers%20to%20the%20ability (accessed Aug. 06, 2023).",
  },
  {
    id: 14,
    term: "Release Management",
    description:
      "Organized planning and control of software updates, like a scheduled and controlled deployment process.",
    references:
      "“DevOps Release Management Concepts & Best Practices,” Splunk-Blogs. https://www.splunk.com/en_us/blog/learn/devops-release-management.html#:~:text=In%20a%20DevOps%20environment%2C%20release (accessed Aug. 06, 2023).",
  },
  {
    id: 15,
    term: "Versioning",
    description:
      "Assigning unique names to different versions of code, like labeling different editions of a book.",
    references:
      "“What is versioning and how does it work?,” Software Quality. https://www.techtarget.com/searchsoftwarequality/definition/versioning#:~:text=In%20software%20development%2C%20versioning%20allows (accessed Aug. 06, 2023).",
  },
  {
    id: 16,
    term: "Change Management",
    description:
      "The careful handling and implementation of modifications, like following an approved plan for changes.",
    references:
      "“Best practices for change management in the age of DevOps,” Atlassian Engineering, May 12, 2020. https://www.atlassian.com/engineering/best-practices-for-change-management-in-the-age-of-devops",
  },
  {
    id: 17,
    term: "Continuous Improvement",
    description:
      "The ongoing process of getting better, like regular practice to enhance a skill.",
    references:
      "“Continuous improvement | DevOps | TMap,” www.tmap.net. https://www.tmap.net/building-blocks/Continuous-improvement-DevOps",
  },
  {
    id: 18,
    term: "Microservices",
    description:
      "Building applications from small, independent parts, like dividing a complex task into smaller, manageable steps.",
    references:
      "“What are Microservices? | AWS,” Amazon Web Services, Inc. https://aws.amazon.com/microservices/#:~:text=Microservices%20are%20an%20architectural%20and",
  },
  {
    id: 19,
    term: "Service Discovery",
    description:
      "Automatically finding and connecting to services, like a smartphone connecting to available Bluetooth devices.",
    references:
      "“What is Service Discovery? Definition and Related FAQs,” Avi Networks. https://avinetworks.com/glossary/service-discovery/#:~:text=Service%20discovery%20is%20the%20process (accessed Aug. 06, 2023).",
  },
  {
    id: 20,
    term: "ChatOps",
    description:
      "Using chat tools to collaborate and control tasks, like a team using a chat group for efficient teamwork.",
    references:
      "“What is ChatOps? | Definition from TechTarget,” IT Operations. https://www.techtarget.com/searchitoperations/definition/ChatOps#:~:text=ChatOps%2C%20sometimes%20known%20as%20conversation (accessed Aug. 06, 2023).",
  },
];

// Routes
app.get("/", (req, res) => {
  res.render("index", { tableData });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
