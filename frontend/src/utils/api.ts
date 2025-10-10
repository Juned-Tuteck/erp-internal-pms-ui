
export interface Project {
  id: string;
  project_number: string;
  project_name: string;
  lead_id: string;
  project_type: string;
  customer_id: string;
  created_at: string;
  project_manager: string;
  est_start_date: string;
  est_end_date: string;
  kick_off_date: string;
  last_updated: string | null;
  est_price: string;
  status: string;
  warehouse_id: string;
  project_species: string;
  actual_start: string | null;
  actual_end: string | null;
  price_customer: string;
  actual_price: string | null;
  comment_baseline: string;
  comment_other: string;
  project_template_id: string | null;
  location: string | null;
  project_address: string;
  is_insured: boolean;
  insurance_no: string | null;
  insurance_from_date: string | null;
  insurance_to_date: string | null;
  approval_status: string;
  approval_comment: string | null;
  approved_by: string | null;
  approved_on: string | null;
  completion: number;
  created_by: string;
  updated_by: string | null;
  is_active: boolean;
  is_deleted: boolean;
}


export const getAllProjects = async (): Promise<Project[]> => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}`);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  const result = await response.json();
  return result.data as Project[];
};


export const getProjectById = async (id: string): Promise<Project | undefined> => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch project');
  }
  const result = await response.json();
  return result.data as Project;
};
