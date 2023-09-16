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
  {
    id: 21,
    term: "Container Orchestration",
    description:
      "Managing the deployment, scaling, and operation of containers across a cluster of machines. Kubernetes and Docker Swarm are common container orchestration tools.",
    references:
      "“What Is container orchestration,” Google Cloud. https://cloud.google.com/discover/what-is-container-orchestration#:~:text=Container%20orchestration%20automatically%20provisions%2C%20deploys",
  },
  {
    id: 22,
    term: "Infrastructure Automation",
    description:
      "Automating the provisioning and configuration of infrastructure components, such as servers, databases, and networks, to ensure consistency and reduce manual effort.",
    references:
      "“Infrastructure Automation & DevOps,” Chakray. https://www.chakray.com/initiatives/infrastructure-automation-devops/#:~:text=Infrastructure%20Automation%20refers%20largely%20to (accessed Aug. 27, 2023). ‌",
  },
  {
    id: 23,
    term: "Elasticity",
    description:
      "The ability of a system to dynamically allocate and release resources based on demand. It's like a system's ability to grow or shrink as needed.",
    references:
      "“Elasticity - AWS Well-Architected Framework,” wa.aws.amazon.com. https://wa.aws.amazon.com/wellarchitected/2020-07-02T19-33-23/wat.concept.elasticity.en.html#:~:text=The%20ability%20to%20acquire%20resources ‌",
  },
  {
    id: 24,
    term: "Release Pipeline",
    description:
      "An automated sequence of stages that code changes pass through, from development to production. It includes building, testing, and deployment steps.",
    references:
      "“Release Pipeline in DevOps -Professional-Devops.com,” www.professional-devops.com. https://www.professional-devops.com/release-pipeline.html#:~:text=A%20release%20pipeline%20is%20a (accessed Aug. 27, 2023). ‌",
  },
  {
    id: 25,
    term: "Compliance as Code",
    description:
      "Applying compliance requirements and policies to infrastructure using code and automation. This ensures that the infrastructure adheres to security and regulatory standards.",
    references:
      "“Decoder: Compliance as code,” Thoughtworks. https://www.thoughtworks.com/en-au/insights/decoder/c/compliance-as-code#:~:text=Compliance%20as%20code%20aims%20to (accessed Aug. 27, 2023). ‌",
  },
  {
    id: 26,
    term: "GitOps",
    description:
      "A methodology where the entire system's infrastructure and application configurations are managed using Git version control. Changes are made through pull requests, promoting consistency and traceability.",
    references:
      "“What is GitOps? | GitLab,” about.gitlab.com. https://about.gitlab.com/topics/gitops/ ‌",
  },
  {
    id: 27,
    term: "Serverless Computing",
    description:
      "A cloud computing model where developers focus on writing code without managing the underlying infrastructure. The cloud provider automatically scales and manages resources.",
    references:
      "K. Vyas, “Improving DevOps with Serverless Computing | ITBE,” IT Business Edge, Apr. 08, 2022. https://www.itbusinessedge.com/development/devops-serverless-computing/#:~:text=Serverless%20computing%20refers%20to%20outsourcing (accessed Aug. 27, 2023). ‌",
  },
  {
    id: 28,
    term: "Immutable Deployment",
    description:
      "Releasing software by creating new instances of the entire environment instead of updating existing ones. This reduces the risk of configuration drift and promotes consistency.",
    references:
      "“Immutable Infrastructure -Professional-Devops.com,” www.professional-devops.com. https://www.professional-devops.com/immutable-infrastructure.html#:~:text=Immutable%20infrastructure%20means%20servers%20that (accessed Aug. 27, 2023).",
  },
  {
    id: 29,
    term: "Configuration Drift",
    description:
      "The gradual and unintentional divergence of configurations between environments, leading to inconsistencies and potential issues in the system.",
    references:
      "“Configuration Drift: Why It’s Bad and How to Eliminate It,” Aqua. https://www.aquasec.com/cloud-native-academy/vulnerability-management/configuration-drift/#:~:text=Configuration%20drift%20is%20when%20the%20configuration%20of%20an%20environment%20%E2%80%9Cdrifts (accessed Aug. 27, 2023). ‌",
  },
  {
    id: 30,
    term: "Blue-Green Testing",
    description:
      "Similar to blue-green deployment, this approach involves testing a new version of an application (green) alongside the existing one (blue) before switching traffic.",
    references:
      "“Blue/green deployment - Introduction to DevOps on AWS,” docs.aws.amazon.com. https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/blue-green-deployments.html#:~:text=Blue%2Fgreen%20deployments%20enable%20you (accessed Aug. 27, 2023). ‌",
  },
  {
    id: 31,
    term: "Infrastructure as Code (IaC) with Terraform",
    description:
      "Using Terraform to define and provision infrastructure using declarative code, allowing for automated and consistent deployment of resources across different environments.",
    references:
      "“What is Terraform & Infrastructure as Code (IaC)?,” www.pluralsight.com. https://www.pluralsight.com/resources/blog/cloud/what-is-terraform-infrastructure-as-code-iac#:~:text=Infrastructure%20as%20Code%20tools%20like (accessed Sep. 16, 2023). ‌",
  },
  {
    id: 32,
    term: "Terraform Provider",
    description:
      "A plugin in Terraform that enables interaction with a specific cloud or service provider, allowing Terraform to manage resources in that environment.",
    references:
      "“Terraform Registry,” registry.terraform.io. https://registry.terraform.io/providers/microsoft/azuredevops/latest/docs (accessed Sep. 16, 2023). ‌",
  },
  {
    id: 33,
    term: "Terraform State",
    description:
      "A representation of the deployed infrastructure in Terraform. It contains information about the resources and their current state in the target environment.",
    references:
      "TomArcherMsft, “Store Terraform state in Azure Storage,” learn.microsoft.com, May 08, 2023. https://learn.microsoft.com/en-us/azure/developer/terraform/store-state-in-azure-storage?tabs=azure-cli (accessed Sep. 16, 2023). ‌",
  },
  {
    id: 34,
    term: "Terraform Modules",
    description:
      "Reusable components in Terraform that encapsulate a set of resources and their configurations, promoting code modularity and maintainability.",
    references:
      "R. DevOps, “Creating Reusable Terraform Modules for Azure and Best Practices,” Medium, Mar. 07, 2023. https://medium.com/@RockDevOps/creating-reusable-terraform-modules-for-azure-and-best-practices-ba347d60e93e#:~:text=Terraform%20is%20a%20popular%20open (accessed Sep. 16, 2023). ‌",
  },
  {
    id: 35,
    term: "Terraform Plan",
    description:
      "A command in Terraform that generates an execution plan, showing the changes that will be applied to the infrastructure when terraform apply is run.",
    references:
      "“Automating infrastructure deployments in the Cloud with Terraform and Azure Pipelines,” azuredevopslabs.com. https://azuredevopslabs.com/labs/vstsextend/terraform/ (accessed Sep. 16, 2023). ‌",
  },
  {
    id: 36,
    term: "Remote Backends",
    description:
      "Storage locations where Terraform stores its state files remotely, allowing for collaboration among team members and maintaining a consistent state.",
    references:
      "A. Azad, “Terraform Remote Backend with Azure Storage,” Medium, Mar. 17, 2023. https://blog.devops.dev/terraform-remote-backend-with-azure-storage-ec2c13e7ace4 (accessed Sep. 16, 2023). ‌",
  },
  {
    id: 37,
    term: "Terraform Variables",
    description:
      "Parameters in Terraform configurations that allow for customization of resource attributes, making configurations more flexible and reusable.",
    references:
      "T. Thornton, “Creating Terraform Variables from Azure DevOps Pipeline Variables,” Thomas Thornton - Microsoft Azure MVP - HashiCorp Ambassador, Jun. 02, 2022. https://thomasthornton.cloud/2022/06/02/creating-terraform-variables-from-azure-devops-pipeline-variables/ (accessed Sep. 16, 2023). ‌",
  },
  {
    id: 38,
    term: "Terraform Workspaces",
    description:
      "A feature in Terraform that allows for the creation of multiple, isolated environments within a single configuration to manage resources separately.",
    references:
      "“Manage multiple environments with Terraform workspaces | TechTarget,” IT Operations. https://www.techtarget.com/searchitoperations/tutorial/Manage-multiple-environments-with-Terraform-workspaces#:~:text=Workspaces%20are%20a%20built%2Din (accessed Sep. 16, 2023). ‌",
  },
  {
    id: 39,
    term: "Terraform Cloud",
    description:
      "A hosted service provided by HashiCorp that offers collaboration, remote state storage, and additional features for managing Terraform configurations.",
    references:
      "“Azure DevOps Services - VCS Providers - Terraform Cloud | Terraform | HashiCorp Developer,” Azure DevOps Services - VCS Providers - Terraform Cloud | Terraform | HashiCorp Developer. https://developer.hashicorp.com/terraform/cloud-docs/vcs/azure-devops-services (accessed Sep. 16, 2023). ‌",
  },
  {
    id: 40,
    term: "Terraform Enterprise",
    description:
      "An advanced version of Terraform Cloud designed for larger organizations, offering additional features like role-based access control, private module registry, and more.",
    references:
      "“Azure DevOps Services - VCS Providers - Terraform Enterprise | Terraform | HashiCorp Developer,” Azure DevOps Services - VCS Providers - Terraform Enterprise | Terraform | HashiCorp Developer. https://developer.hashicorp.com/terraform/enterprise/vcs/azure-devops-services (accessed Sep. 16, 2023). ‌",
  },
];

// Routes
app.get("/", (req, res) => {
  res.render("index", { tableData });
});

// Start the server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
