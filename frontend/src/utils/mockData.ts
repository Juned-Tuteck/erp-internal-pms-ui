export interface Project {
  id: string;
  projectNumber: string;
  projectName: string;
  leadNumber: string;
  projectType: string;
  customer: string;
  createdAt: string;
  projectManager: string;
  estStartDate: string;
  estEndDate: string;
  kickOffDate: string;
  lastUpdated: string;
  estPrice: string;
  status: 'Active' | 'Pending' | 'Completed' | 'On Hold';
}

export const mockProjects: Project[] = [
  {
    id: '1',
    projectNumber: 'PRJ-0001',
    projectName: 'CRM Implementation',
    leadNumber: 'LEAD-0006',
    projectType: 'TYPE2',
    customer: 'Acme Corporation',
    createdAt: '12/9/2025',
    projectManager: 'John Smith',
    estStartDate: '15/9/2025',
    estEndDate: '15/12/2025',
    kickOffDate: '20/9/2025',
    lastUpdated: '22/9/2025',
    estPrice: '$50,000',
    status: 'Active',
  },
  {
    id: '2',
    projectNumber: 'PRJ-0002',
    projectName: 'Website Redesign',
    leadNumber: 'LEAD-0007',
    projectType: 'TYPE1',
    customer: 'Tech Solutions Inc',
    createdAt: '15/9/2025',
    projectManager: 'Sarah Johnson',
    estStartDate: '20/9/2025',
    estEndDate: '20/11/2025',
    kickOffDate: '25/9/2025',
    lastUpdated: '22/9/2025',
    estPrice: '$35,000',
    status: 'Active',
  },
  {
    id: '3',
    projectNumber: 'PRJ-0003',
    projectName: 'Mobile App Development',
    leadNumber: 'LEAD-0008',
    projectType: 'TYPE3',
    customer: 'Digital Ventures',
    createdAt: '18/9/2025',
    projectManager: 'Michael Brown',
    estStartDate: '25/9/2025',
    estEndDate: '25/1/2026',
    kickOffDate: '30/9/2025',
    lastUpdated: '22/9/2025',
    estPrice: '$75,000',
    status: 'Pending',
  },
  {
    id: '4',
    projectNumber: 'PRJ-0004',
    projectName: 'ERP System Integration',
    leadNumber: 'LEAD-0009',
    projectType: 'TYPE2',
    customer: 'Manufacturing Co',
    createdAt: '20/9/2025',
    projectManager: 'Emily Davis',
    estStartDate: '1/10/2025',
    estEndDate: '1/3/2026',
    kickOffDate: '5/10/2025',
    lastUpdated: '22/9/2025',
    estPrice: '$120,000',
    status: 'Pending',
  },
  {
    id: '5',
    projectNumber: 'PRJ-0005',
    projectName: 'Data Analytics Dashboard',
    leadNumber: 'LEAD-0010',
    projectType: 'TYPE1',
    customer: 'Analytics Plus',
    createdAt: '22/9/2025',
    projectManager: 'David Wilson',
    estStartDate: '28/9/2025',
    estEndDate: '28/11/2025',
    kickOffDate: '2/10/2025',
    lastUpdated: '22/9/2025',
    estPrice: '$45,000',
    status: 'Active',
  },
];
