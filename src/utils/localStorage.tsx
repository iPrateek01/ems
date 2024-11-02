const employees = [
  {
    id: 1,
    email: "rajesh.verma@gmail.com",
    firstname: "Rajesh",
    lastname: "Verma",
    password: "rave",
    tasks: [
      {
        active: false,
        completed: false,
        new_task: true,
        failed: false,
        task_title: "Update Inventory Records",
        task_description: "Review and update stock levels in the inventory system.",
        task_date: "10 Oct 2024",
        category: "Inventory"
      },
      {
        active: false,
        completed: true,
        new_task: false,
        failed: false,
        task_title: "Annual Budget Review",
        task_description: "Complete analysis of last year's budget.",
        task_date: "15 Aug 2024",
        category: "Finance"
      },
      {
        active: false,
        completed: false,
        new_task: false,
        failed: true,
        task_title: "Technical Support Training",
        task_description: "Conduct training for the new support team.",
        task_date: "20 Sep 2024",
        category: "Training"
      },
      {
        active: true,
        completed: false,
        new_task: false,
        failed: false,
        task_title: "Client Proposal Review",
        task_description: "Analyze recent client proposals for feasibility.",
        task_date: "05 Oct 2024",
        category: "Consulting"
      }
    ],
    taskSummary: {
      active: 1,
      completed: 1,
      new_task: 1,
      failed: 1
    }
  },
  {
    id: 2,
    email: "anita.sharma@gmail.com",
    firstname: "Anita",
    lastname: "Sharma",
    password: "ansh",
    tasks: [
      {
        active: true,
        completed: false,
        new_task: false,
        failed: false,
        task_title: "Social Media Engagement",
        task_description: "Increase engagement on the new campaign posts.",
        task_date: "12 Oct 2024",
        category: "Marketing"
      },
      {
        active: false,
        completed: true,
        new_task: false,
        failed: false,
        task_title: "Sales Data Analysis",
        task_description: "Review and analyze the sales data for trends.",
        task_date: "22 Sep 2024",
        category: "Sales"
      },
      {
        active: true,
        completed: false,
        new_task: false,
        failed: false,
        task_title: "Plan Employee Workshop",
        task_description: "Organize an in-house skill development workshop.",
        task_date: "25 Oct 2024",
        category: "Human Resources"
      },
      {
        active: false,
        completed: true,
        new_task: false,
        failed: false,
        task_title: "Product Launch Planning",
        task_description: "Plan for the upcoming product launch event.",
        task_date: "18 Sep 2024",
        category: "Project Management"
      },
      {
        active: false,
        completed: false,
        new_task: false,
        failed: true,
        task_title: "Review Product Prototype",
        task_description: "Examine the new product prototype for improvements.",
        task_date: "29 Sep 2024",
        category: "Quality Control"
      }
    ],
    taskSummary: {
      active: 2,
      completed: 2,
      new_task: 0,
      failed: 1
    }
  },
  {
    id: 3,
    email: "sunil.patil@gmail.com",
    firstname: "Sunil",
    lastname: "Patil",
    password: "supa",
    tasks: [
      {
        active: false,
        completed: true,
        new_task: false,
        failed: false,
        task_title: "Website Performance Audit",
        task_description: "Complete performance audit for the company website.",
        task_date: "11 Aug 2024",
        category: "IT"
      },
      {
        active: true,
        completed: false,
        new_task: false,
        failed: false,
        task_title: "Server Migration",
        task_description: "Assist with migration to the new server architecture.",
        task_date: "19 Oct 2024",
        category: "Infrastructure"
      },
      {
        active: false,
        completed: false,
        new_task: false,
        failed: true,
        task_title: "Database Backup",
        task_description: "Backup the client database for safekeeping.",
        task_date: "01 Sep 2024",
        category: "Data Management"
      }
    ],
    taskSummary: {
      active: 1,
      completed: 1,
      new_task: 0,
      failed: 1
    }
  },
  {
    id: 4,
    email: "priya.singh@gmail.com",
    firstname: "Priya",
    lastname: "Singh",
    password: "prsi",
    tasks: [
      {
        active: true,
        completed: false,
        new_task: false,
        failed: false,
        task_title: "Customer Feedback Survey",
        task_description: "Analyze responses from the recent customer feedback survey.",
        task_date: "18 Oct 2024",
        category: "Customer Service"
      },
      {
        active: false,
        completed: true,
        new_task: false,
        failed: false,
        task_title: "Design Marketing Posters",
        task_description: "Design posters for the winter season marketing campaign.",
        task_date: "14 Jul 2024",
        category: "Design"
      },
      {
        active: false,
        completed: false,
        new_task: false,
        failed: true,
        task_title: "Inventory Audit",
        task_description: "Complete an audit of the stock in the main warehouse.",
        task_date: "30 Aug 2024",
        category: "Inventory"
      },
      {
        active: true,
        completed: false,
        new_task: false,
        failed: false,
        task_title: "Employee Survey",
        task_description: "Create a survey to gather employee satisfaction data.",
        task_date: "08 Oct 2024",
        category: "Human Resources"
      },
      {
        active: false,
        completed: false,
        new_task: false,
        failed: false,
        task_title: "Safety Audit",
        task_description: "Conduct a safety audit of all equipment.",
        task_date: "30 Sep 2024",
        category: "Compliance"
      },
      {
        active: false,
        completed: true,
        new_task: false,
        failed: false,
        task_title: "Prepare Payroll",
        task_description: "Process payroll for the month.",
        task_date: "01 Aug 2024",
        category: "Finance"
      }
    ],
    taskSummary: {
      active: 2,
      completed: 2,
      new_task: 0,
      failed: 1
    }
  },
  {
    id: 5,
    email: "amit.chaudhary@gmail.com",
    firstname: "Amit",
    lastname: "Chaudhary",
    password: "amch",
    tasks: [
      {
        active: true,
        completed: false,
        new_task: false,
        failed: false,
        task_title: "Compile Market Research Report",
        task_description: "Summarize findings from recent market research surveys.",
        task_date: "20 Oct 2024",
        category: "Research"
      },
      {
        active: false,
        completed: true,
        new_task: false,
        failed: false,
        task_title: "Vendor Management Meeting",
        task_description: "Organize a review meeting with key vendors.",
        task_date: "25 Aug 2024",
        category: "Procurement"
      },
      {
        active: false,
        completed: false,
        new_task: false,
        failed: true,
        task_title: "Customer Onboarding",
        task_description: "Assist with the onboarding process for new customers.",
        task_date: "12 Sep 2024",
        category: "Sales"
      },
      {
        active: true,
        completed: false,
        new_task: false,
        failed: false,
        task_title: "Schedule Vendor Payments",
        task_description: "Coordinate timely payments to all vendors.",
        task_date: "23 Oct 2024",
        category: "Finance"
      }
    ],
    taskSummary: {
      active: 2,
      completed: 1,
      new_task: 0,
      failed: 1
    }
  }
];

const admin = [
  {
    id: 1,
    email: "admin@admin.com",
    firstname: "Admin",
    lastname: "Malhotra",
    password: "admin"
  }
];



  export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }

  
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees') || "[]")
    const admin = JSON.parse(localStorage.getItem('admin') || "[]")
    return({admin, employees})
  }
  