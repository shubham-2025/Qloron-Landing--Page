import React, { useState, useEffect } from 'react';
import JobOpeningCard from './JobOpeningCard';

const CurrentOpenings = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [filters, setFilters] = useState({
    title: '',
    location: '',
  });

  const [formData, setFormData] = useState({
    name: '',
    collegeEmail: '',
    personalEmail: '',
    address: '',
    mobile: '',
    college: '',
    qualification: '',
    department: '',
    semester: '',
    skills: '',
    resume: null,
  });

  // Fetch user data from localStorage on component mount
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setFormData(prev => ({
        ...prev,
        name: userData.name || '',
        personalEmail: userData.email || '',
        mobile: userData.mobile || '',
      }));
    }
  }, []);

  const jobOpenings = [
    {
      title: "Frontend Developer (React)",
      type: "Full-time",
      location: "Hyderabad",
      experience: "2+ years exp",
      description: "We're looking for an experienced React developer to join our product team.",
      fullDescription: "As a Frontend Developer, you'll be responsible for building and maintaining user interfaces using React.js. You'll work closely with our design and backend teams to create seamless user experiences. The ideal candidate has strong JavaScript skills and experience with modern frontend frameworks.",
      responsibilities: [
        "Develop new user-facing features using React.js",
        "Build reusable components and front-end libraries for future use",
        "Translate designs and wireframes into high-quality code",
        "Optimize components for maximum performance across devices",
        "Collaborate with back-end developers to integrate user-facing elements"
      ],
      requirements: [
        "2+ years of professional React experience",
        "Proficiency in JavaScript (ES6+)",
        "Experience with state management (Redux, Context API)",
        "Familiarity with RESTful APIs",
        "Understanding of responsive design principles",
        "Experience with modern front-end build pipelines and tools"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work hours and remote options",
        "Professional development budget",
        "Generous vacation policy"
      ]
    },
    {
      title: "UX/UI Designer",
      type: "Full-time",
      location: "Remote",
      experience: "3+ years exp",
      description: "Help us create beautiful, intuitive interfaces for our enterprise clients.",
      fullDescription: "We're seeking a creative UX/UI Designer to join our team. You'll be responsible for designing user flows, wireframes, and high-fidelity mockups for our web and mobile applications. You should have a strong portfolio demonstrating your design process and problem-solving skills.",
      responsibilities: [
        "Create user-centered designs by understanding business requirements and user feedback",
        "Develop UI mockups and prototypes that clearly illustrate site functionality",
        "Identify and troubleshoot UX problems",
        "Collaborate with product managers and engineers",
        "Maintain design systems and style guides"
      ],
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma, Sketch, or Adobe XD",
        "Understanding of user-centered design principles",
        "Experience conducting user research",
        "Ability to create design systems",
        "Strong visual design skills"
      ],
      benefits: [
        "Fully remote work environment",
        "Annual design conference budget",
        "Latest hardware and software tools",
        "Flexible schedule",
        "Team retreats twice a year"
      ]
    },
    {
      title: "Backend Developer (Node.js)",
      type: "Full-time",
      location: "Bangalore",
      experience: "3+ years exp",
      description: "Looking for an experienced Node.js developer to build scalable backend services.",
      fullDescription: "As a Backend Developer, you'll be responsible for designing and implementing server-side logic, databases, and APIs. You'll work with our frontend developers to integrate user-facing elements with server-side logic and ensure high performance and responsiveness to requests from the front-end.",
      responsibilities: [
        "Design and implement low-latency, high-availability applications",
        "Write reusable, testable, and efficient code",
        "Implement security and data protection measures",
        "Integrate data storage solutions",
        "Collaborate with front-end developers"
      ],
      requirements: [
        "3+ years of Node.js development experience",
        "Strong proficiency with JavaScript/Typescript",
        "Experience with Express.js or similar frameworks",
        "Understanding of database technologies (SQL and NoSQL)",
        "Knowledge of authentication and authorization mechanisms",
        "Familiarity with Docker and Kubernetes"
      ],
      benefits: [
        "Competitive compensation package",
        "Flexible work arrangements",
        "Health and wellness benefits",
        "Continuous learning opportunities",
        "Stock options"
      ]
    },
    {
      title: "Data Scientist",
      type: "Contract",
      location: "Remote",
      experience: "5+ years exp",
      description: "Seeking a data scientist to extract insights from large datasets.",
      fullDescription: "We're looking for a Data Scientist to analyze complex data and build predictive models. You'll work with cross-functional teams to identify opportunities for leveraging company data to drive business solutions and improve products.",
      responsibilities: [
        "Mine and analyze data to drive optimization and improvement",
        "Develop custom data models and algorithms",
        "Use predictive modeling to increase customer experiences",
        "Develop testing frameworks and monitor model performance",
        "Coordinate with different functional teams"
      ],
      requirements: [
        "5+ years of experience in Data Science",
        "Strong problem-solving skills",
        "Experience with statistical computer languages (R, Python, etc.)",
        "Knowledge of machine learning techniques",
        "Experience with distributed data/computing tools",
        "Excellent written and verbal communication skills"
      ],
      benefits: [
        "Remote-first culture",
        "Project-based compensation",
        "Cutting-edge technology stack",
        "Flexible hours",
        "Opportunity for full-time conversion"
      ]
    },
    {
        title: "DevOps Engineer",
        type: "Full-time",
        location: "Bangalore",
        experience: "3+ years exp",
        description: "Manage and optimize our infrastructure and CI/CD pipelines.",
        fullDescription: "We're looking for a DevOps Engineer to join our fast-paced tech team. You’ll be responsible for maintaining and improving our cloud infrastructure, deployment processes, and system reliability. Work closely with developers to ensure seamless integration and delivery of high-quality software.",
        responsibilities: [
          "Design, implement, and maintain CI/CD pipelines",
          "Manage and monitor cloud infrastructure (AWS, Azure, or GCP)",
          "Ensure system reliability, performance, and scalability",
          "Automate repetitive tasks and infrastructure provisioning",
          "Implement security best practices and monitor compliance",
          "Collaborate with development teams for smooth deployment cycles"
        ],
        requirements: [
          "3+ years of experience in DevOps or related field",
          "Proficient with CI/CD tools like Jenkins, GitLab CI, or GitHub Actions",
          "Experience with containerization tools (Docker, Kubernetes)",
          "Strong knowledge of cloud platforms (AWS, Azure, or GCP)",
          "Familiarity with infrastructure-as-code tools (Terraform, Ansible)",
          "Good scripting skills (Bash, Python, etc.)",
          "Understanding of networking, security, and system administration"
        ],
        benefits: [
          "Collaborative and inclusive work culture",
          "Flexible work hours and remote-friendly policies",
          "Learning and certification support",
          "Comprehensive health insurance",
          "Performance-based bonuses"
        ]
      },     
      {
        title: "Cloud Solutions Architect",
        type: "Full-time",
        location: "Mumbai",
        experience: "6+ years exp",
        description: "Design scalable, secure, and high-performance cloud architectures.",
        fullDescription: "We are seeking a Cloud Solutions Architect to lead the design and implementation of innovative cloud-based systems. You’ll work directly with clients and internal teams to create architectures that meet business needs while following cloud best practices.",
        responsibilities: [
          "Design end-to-end cloud architectures for enterprise applications",
          "Collaborate with stakeholders to gather requirements and translate them into technical solutions",
          "Ensure security, scalability, and cost-efficiency across deployments",
          "Lead cloud migration and modernization initiatives",
          "Create architecture documentation and conduct reviews"
        ],
        requirements: [
          "6+ years of experience in cloud architecture or related roles",
          "Deep expertise in AWS, Azure, or GCP",
          "Strong background in networking, security, and infrastructure",
          "Experience with Kubernetes, Terraform, and CI/CD tools",
          "Excellent communication and stakeholder management skills",
          "Cloud certifications (e.g., AWS Certified Solutions Architect) preferred"
        ],
        benefits: [
          "Leadership role with ownership of critical systems",
          "Certification and training reimbursements",
          "Annual performance bonuses",
          "Hybrid work model",
          "Health and life insurance plans"
        ]
      },
      {
        title: "Machine Learning Engineer",
        type: "Full-time",
        location: "Bangalore",
        experience: "2+ years exp",
        description: "Build and deploy intelligent models to solve real-world problems.",
        fullDescription: "We’re looking for a Machine Learning Engineer to develop and deploy data-driven solutions. You’ll work closely with data scientists and engineers to implement ML models, optimize performance, and deliver high-impact applications at scale.",
        responsibilities: [
          "Develop and optimize machine learning models",
          "Collaborate with data scientists to clean and preprocess data",
          "Deploy models to production using MLOps practices",
          "Monitor model performance and retrain as needed",
          "Work with large-scale datasets in distributed systems"
        ],
        requirements: [
          "2+ years of experience in machine learning or data science",
          "Proficiency in Python and ML libraries (TensorFlow, PyTorch, Scikit-learn)",
          "Experience with cloud platforms (AWS/GCP/Azure)",
          "Familiarity with Docker, Kubernetes, and MLflow",
          "Strong mathematical and statistical skills"
        ],
        benefits: [
          "Opportunity to work on cutting-edge ML problems",
          "Flexible remote work options",
          "Collaborative and research-friendly team",
          "Access to cloud credits and GPU resources",
          "Wellness and skill development programs"
        ]
      },
      {
        title: "Junior DevOps Engineer",
        type: "Full-time",
        location: "Chennai",
        experience: "1-2 years exp",
        description: "Support and enhance deployment processes and cloud operations.",
        fullDescription: "We’re looking for a Junior DevOps Engineer eager to grow and make an impact. You’ll work with senior engineers to manage cloud environments, automate workflows, and ensure smooth deployments. Perfect for someone who’s hungry to learn and build a solid DevOps foundation.",
        responsibilities: [
          "Assist in setting up and maintaining CI/CD pipelines",
          "Support cloud infrastructure monitoring and maintenance",
          "Help automate manual tasks using scripts",
          "Work with engineering teams to troubleshoot deployment issues",
          "Document infrastructure and processes"
        ],
        requirements: [
          "1-2 years of DevOps or system admin experience",
          "Basic understanding of cloud platforms (AWS, Azure, GCP)",
          "Familiarity with Git, CI/CD, and Docker",
          "Willingness to learn Kubernetes and IaC tools",
          "Good communication and collaboration skills",
          "Proficiency in at least one scripting language"
        ],
        benefits: [
          "Mentorship from senior engineers",
          "Fast-paced growth opportunities",
          "Learning & certification budget",
          "Team outings and hackathons",
          "Comprehensive insurance plans"
        ]
      },            
      
    {
      title: "Product Manager",
      type: "Full-time",
      location: "Hyderabad",
      experience: "4+ years exp",
      description: "Lead product development from conception to launch.",
      fullDescription: "We're seeking a Product Manager to drive product strategy and execution. You'll work closely with engineering, design, and business teams to build products that customers love while achieving business goals.",
      responsibilities: [
        "Define product vision, strategy, and roadmap",
        "Gather and prioritize product requirements",
        "Work closely with engineering and design teams",
        "Analyze market trends and competitive landscape",
        "Define and analyze metrics to measure product success"
      ],
      requirements: [
        "4+ years of product management experience",
        "Technical background with understanding of software development",
        "Proven track record of managing all aspects of product lifecycle",
        "Excellent written and verbal communication skills",
        "Strong problem-solving skills",
        "MBA or equivalent experience preferred"
      ],
      benefits: [
        "Leadership role in growing company",
        "Significant equity package",
        "Health and wellness benefits",
        "Professional development budget",
        "Generous parental leave"
      ]
    },
  ];

  // Filter jobs based on title and location
  const filteredJobs = jobOpenings.filter(job => {
    const titleMatch = job.title.toLowerCase().includes(filters.title.toLowerCase());
    const locationMatch = job.location.toLowerCase().includes(filters.location.toLowerCase());
    return titleMatch && locationMatch;
  });

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Full name is required';
      if (!formData.collegeEmail.trim()) newErrors.collegeEmail = 'College email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.collegeEmail)) newErrors.collegeEmail = 'Invalid email format';
      if (!formData.personalEmail.trim()) newErrors.personalEmail = 'Personal email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.personalEmail)) newErrors.personalEmail = 'Invalid email format';
      if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
      else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Invalid mobile number (10 digits required)';
      if (!formData.college.trim()) newErrors.college = 'College name is required';
      if (!formData.qualification.trim()) newErrors.qualification = 'Qualification is required';
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.department.trim()) newErrors.department = 'Department is required';
      if (!formData.semester.trim()) newErrors.semester = 'Semester is required';
      if (!formData.skills.trim()) newErrors.skills = 'Skills are required';
    }
    
    if (step === 2 && !formData.resume) {
      newErrors.resume = 'Resume is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleViewDetails = (job) => {
    setSelectedJob(job);
    setIsDetailsModalOpen(true);
  };

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    setFormStep(1);
    setIsSubmitted(false);
    setErrors({});
    // Don't reset name, email, and mobile as they're pre-filled from user data
    setFormData(prev => ({
      ...prev,
      collegeEmail: '',
      address: '',
      college: '',
      qualification: '',
      department: '',
      semester: '',
      skills: '',
      resume: null,
    }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsDetailsModalOpen(false);
    setSelectedJob(null);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    if (validateStep(formStep)) {
      setFormStep(prev => prev + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(3)) {
      // Create application object
      const application = {
        jobId: selectedJob.title,
        jobTitle: selectedJob.title,
        jobType: selectedJob.type,
        jobLocation: selectedJob.location,
        applicant: {
          name: formData.name,
          collegeEmail: formData.collegeEmail,
          personalEmail: formData.personalEmail,
          mobile: formData.mobile,
          address: formData.address,
          college: formData.college,
          qualification: formData.qualification,
          department: formData.department,
          semester: formData.semester,
          skills: formData.skills,
          resume: formData.resume ? formData.resume.name : 'No file',
        },
        appliedAt: new Date().toISOString(),
        status: 'Submitted'
      };

      // Get existing applications from localStorage or create empty array
      const existingApplications = JSON.parse(localStorage.getItem('applications')) || [];
      
      // Add new application
      const updatedApplications = [...existingApplications, application];
      
      // Save back to localStorage
      localStorage.setItem('applications', JSON.stringify(updatedApplications));
      
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-[#E6F8F7] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#00BBA7] mb-10">Current Openings</h2>

        {/* Filters Section - Updated UI */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 w-full">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="title"
                  value={filters.title}
                  onChange={handleFilterChange}
                  placeholder="Job title or keywords"
                  className="block w-full pl-10 pr-3 py-2 border border-[#00BBA7] rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00BBA7] focus:border-[#00BBA7] sm:text-sm"
                />
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="location"
                  value={filters.location}
                  onChange={handleFilterChange}
                  placeholder="Location or remote"
                  className="block w-full pl-10 pr-3 py-2 border border-[#00BBA7] rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00BBA7] focus:border-[#00BBA7] sm:text-sm"
                />
              </div>
            </div>
            <button 
              onClick={() => setFilters({ title: '', location: '' })}
              className="px-4 py-2 bg-[#00BBA7] hover:bg-[#00a592] text-white rounded-md transition-colors duration-200 whitespace-nowrap"

            >
              Clear filters
            </button>
          </div>
        </div>

        {/* Job Openings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <JobOpeningCard
                key={index}
                title={job.title}
                type={job.type}
                location={job.location}
                experience={job.experience}
                description={job.description}
                onViewDetails={() => handleViewDetails(job)}
                onApply={() => handleApply(job)}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No jobs found</h3>
              <p className="mt-1 text-gray-500">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Job Details Modal */}
      {isDetailsModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold">{selectedJob.title}</h3>
                  <p className="text-gray-600">{selectedJob.type} • {selectedJob.location} • {selectedJob.experience}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Job Description</h4>
                  <p className="text-gray-700">{selectedJob.fullDescription}</p>
                </div>

                <div>
                  <h4 className="text-lg justify-start font-semibold mb-3">Responsibilities</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {selectedJob.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Requirements</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {selectedJob.requirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Benefits</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {selectedJob.benefits.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setIsDetailsModalOpen(false);
                      handleApply(selectedJob);
                    }}
                    className="w-full bg-[#00BBA7] text-white px-6 py-3 rounded-md hover:bg-[#00BBA7] transition-colors font-medium"
                  >
                    Apply for this Position
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Apply for {selectedJob.title}</h3>
                  <p className="text-gray-600">{selectedJob.type} • {selectedJob.location}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              {/* Form Steps Indicator */}
              {!isSubmitted && (
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    {[1, 2, 3].map((step) => (
                      <div
                        key={step}
                        className={`flex flex-col items-center ${step < formStep ? 'text-green-600' : step === formStep ? 'text-[#00BBA7] font-medium' : 'text-gray-400'}`}
                      >
                        <div
                         className={`w-8 h-8 rounded-full flex items-center justify-center ${step <= formStep ? 'bg-[#00BBA7]/20' : 'bg-gray-100'} ${step === formStep ? 'border-2 border-[#00BBA7]' : ''} ${step <= formStep ? 'text-[#00BBA7]' : 'text-gray-500'}`}

                        >
                          {step}
                        </div>
                        <span className="text-xs mt-1">
                          {step === 1 ? 'Personal Info' : step === 2 ? 'Documents' : 'Review'}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="relative">
                    <div className="absolute top-1/2 h-1 bg-gray-200 w-full -z-10"></div>
                    <div
                      className="absolute top-1/2 h-1 bg-blue-500 transition-all duration-300 -z-10"
                      style={{ width: `${(formStep - 1) * 50}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Form Content */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formStep === 1 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Personal Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { label: "Full Name", name: "name" },
                          { label: "College Email", name: "collegeEmail", type: "email" },
                          { label: "Personal Email", name: "personalEmail", type: "email" },
                          { label: "Mobile No.", name: "mobile", type: "tel" },
                          { label: "College", name: "college" },
                          { label: "Qualification/Education", name: "qualification" },
                        ].map(({ label, name, type = "text" }) => (
                          <div key={name}>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{label} *</label>
                            <input
                              type={type}
                              name={name}
                              value={formData[name]}
                              onChange={handleChange}
                              className={`w-full px-3 py-2 border ${errors[name] ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#00BBA7]`}
                            />
                            {errors[name] && <p className="mt-1 text-sm text-red-600">{errors[name]}</p>}
                          </div>
                        ))}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          rows={3}
                          className={`w-full px-3 py-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#00BBA7]`}
                        />
                        {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { label: "Department", name: "department" },
                          { label: "Semester", name: "semester" },
                          { label: "Skills", name: "skills" },
                        ].map(({ label, name }) => (
                          <div key={name}>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{label} *</label>
                            <input
                              name={name}
                              value={formData[name]}
                              onChange={handleChange}
                              className={`w-full px-3 py-2 border ${errors[name] ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#00BBA7]`}
                            />
                            {errors[name] && <p className="mt-1 text-sm text-red-600">{errors[name]}</p>}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {formStep === 2 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Upload Documents</h4>
                      <div className={`border-2 ${errors.resume ? 'border-red-500' : 'border-gray-300'} border-dashed rounded-lg p-6 text-center`}>
                        <div className="flex flex-col items-center">
                          <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                          </svg>
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">PDF or DOC (MAX. 10MB)</p>
                        </div>
                        <input
                          type="file"
                          name="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleChange}
                          className="hidden"
                          id="resume-upload"
                        />
                        <label
                          htmlFor="resume-upload"
                          className="inline-block mt-4 px-4 py-2 bg-[#00BBA7] text-white rounded-md hover:bg-[#00BBA7] cursor-pointer"
                        >
                          Select File
                        </label>
                        {formData.resume && (
                          <p className="mt-3 text-sm text-gray-700">
                            Selected file: <span className="font-medium">{formData.resume.name}</span>
                          </p>
                        )}
                        {errors.resume && <p className="mt-2 text-sm text-red-600">{errors.resume}</p>}
                      </div>
                    </div>
                  )}

                  {formStep === 3 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Review Your Application</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Personal Information</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          {[
                            { label: "Full Name", name: "name" },
                            { label: "College Email", name: "collegeEmail" },
                            { label: "Personal Email", name: "personalEmail" },
                            { label: "Mobile No.", name: "mobile" },
                            { label: "College", name: "college" },
                            { label: "Qualification", name: "qualification" },
                            { label: "Department", name: "department" },
                            { label: "Semester", name: "semester" },
                            { label: "Skills", name: "skills" },
                          ].map(({ label, name }) => (
                            <div key={name} className="text-sm">
                              <p className="text-gray-500">{label}</p>
                              <p className="font-medium">{formData[name] || 'N/A'}</p>
                            </div>
                          ))}
                        </div>
                        <h5 className="font-medium mb-2">Documents</h5>
                        <div className="text-sm">
                          <p className="text-gray-500">Resume</p>
                          <p className="font-medium">{formData.resume ? formData.resume.name : 'No file selected'}</p>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#00BBA7] text-white px-6 py-3 rounded-md hover:bg-[#00BBA7] transition-colors font-medium"
                      >
                        Submit Application
                      </button>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex justify-between pt-4 border-t border-gray-200">
                    {formStep > 1 ? (
                      <button
                        type="button"
                        className="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium"
                        onClick={() => setFormStep((prev) => prev - 1)}
                      >
                        ← Back
                      </button>
                    ) : (
                      <div></div> // Empty div to maintain space
                    )}
                    {formStep < 3 ? (
                      <button
                        type="button"
                        className="px-6 py-2 bg-[#00BBA7] text-white rounded-md hover:bg-[#00BBA7] font-medium"
                        onClick={handleNextStep}
                      >
                        Continue →
                      </button>
                    ) : null}
                  </div>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-semibold text-gray-900 mb-2">Application Submitted!</h4>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Thank you for applying to the <strong>{selectedJob.title}</strong> position at our company. We've received your application and will review it carefully.
                  </p>
                  <p className="text-gray-500 text-sm mb-6">
                    We'll contact you via email at <span className="font-medium">{formData.personalEmail}</span> within 5-7 business days.
                  </p>
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 bg-[#00BBA7] text-white rounded-md hover:bg-[#00BBA7] font-medium"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentOpenings;