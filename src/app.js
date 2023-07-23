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
      "[1]“What Is DevOps and How Does It Work? | Synopsys,” www.synopsys.com. https://www.synopsys.com/glossary/what-is-devops.html#:~:text=Definition",
  },
  {
    id: 2,
    term: "Continuous Integration (CI)",
    description:
      "The process of automatically combining code changes from multiple contributors into one software project.",
    references:
      "[1]Atlassian, “What is Continuous Integration,” Atlassian. https://www.atlassian.com/continuous-delivery/continuous-integration#:~:text=Continuous%20integration%20(CI)%20is%20the",
  },
  {
    id: 3,
    term: "Continuous Delivery (CD)",
    description:
      "Automatically delivering finished code to environments such as testing and development.",
    references:
      "[1]“What Is CI/CD and How Does It Work? | Synopsys,” www.synopsys.com. https://www.synopsys.com/glossary/what-is-cicd.html#:~:text=Continuous%20delivery%20(CD)%20is%20the (accessed Jul. 22, 2023). ‌",
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
      "[1]Atlassian, “What is version control | Atlassian Git Tutorial,” Atlassian. https://www.atlassian.com/git/tutorials/what-is-version-control#:~:text=Version%20control%2C%20also%20known%20as ‌",
  },
  {
    id: 6,
    term: "Automation",
    description:
      "Automation involves using technology to produce and deliver goods or services with little human involvement. It improves efficiency, reliability, and speed for tasks that used to require human effort.",
    references:
      "[1]Techopedia, “What Is Automation? - Definition from Techopedia,” Techopedia.com, Jun. 08, 2021. https://www.techopedia.com/definition/32099/automation ‌",
  },
  {
    id: 7,
    term: "Infrastructure as Code (IaC)",
    description:
      "Infrastructure as Code (IaC) is the practice of managing and setting up infrastructure using code instead of manual methods.",
    references:
      "[1]“What is Infrastructure as Code (IaC)?,” www.redhat.com. https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac#:~:text=Infrastructure%20as%20Code%20(IaC)%20is ‌",
  },
  {
    id: 8,
    term: "Monitoring",
    description:
      "Continuous Monitoring is the process of regularly gathering, analyzing, and utilizing information to actively improve performance, maximize positive results, and reduce the risk of negative impacts.",
    references:
      "[1]“Monitoring | BetterEvaluation,” www.betterevaluation.org. https://www.betterevaluation.org/methods-approaches/themes/monitoring#:~:text=Monitoring%20is%20a%20process%20to ‌",
  },
  {
    id: 9,
    term: "Incident Management",
    description:
      "Incident Management is the process used by IT Operations and DevOps teams to respond to and address unplanned events that can impact service quality or service operations.",
    references:
      "[1]“What Is Incident Management?,” www.ibm.com. https://www.ibm.com/cloud/blog/what-is-incident-management#:~:text=Incident%20management%20is%20a%20process ‌",
  },
  {
    id: 10,
    term: "Agile",
    description:
      "Agile is a continuous improvement approach that involves a flexible, collaborative, and value-driven methodology. Easy Agile develops Jira apps that help teams work better with agile, offering simple and flexible functionality.",
    references:
      "[1]“Agile 101: A Beginner’s Guide to Agile Methodology,” Easy Agile. https://www.easyagile.com/blog/agile-101/#:~:text=In%20basic%20terms%2C%20agile%20is (accessed Jul. 22, 2023). ‌",
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
