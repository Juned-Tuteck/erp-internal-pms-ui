import { useState } from 'react';
import type { Project } from '../../utils/api';
import LeadDetailsModal from './LeadDetailsModal';
import CustomerDetailsModal from './CustomerDetailsModal';
import BOMDetailsModal from './BOMDetailsModal';

interface TaskDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const TaskDetailsModal: React.FC<TaskDetailsModalProps> = ({ project, isOpen, onClose }) => {
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [showBOMModal, setShowBOMModal] = useState(false);

  if (!isOpen || !project) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">View Task Details</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Name
                </label>
                <input
                  type="text"
                  value={project.project_name}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Value
                </label>
                <input
                  type="text"
                  value={project.est_price}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Basic Cost
                </label>
                <input
                  type="text"
                  value="$35,000"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Estimated Gross Margin
                </label>
                <input
                  type="text"
                  value="30%"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Est. Total Task Duration
                </label>
                <input
                  type="text"
                  value="90 days"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Est. Resource Cost(E)
                </label>
                <input
                  type="text"
                  value="$25,000"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700"
                />
              </div>
            </div>

            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => setShowLeadModal(true)}
                className="bg-[#DBEAFE] text-[#2563EB] px-6 py-3 rounded-md hover:bg-blue-200 transition-colors font-semibold"
              >
                VIEW LEAD DETAILS
              </button>
              <button
                onClick={() => setShowCustomerModal(true)}
                className="bg-[#DBEAFE] text-[#2563EB] px-6 py-3 rounded-md hover:bg-blue-200 transition-colors font-semibold"
              >
                VIEW CUSTOMER DETAILS
              </button>
              <button
                onClick={() => setShowBOMModal(true)}
                className="bg-[#DBEAFE] text-[#2563EB] px-6 py-3 rounded-md hover:bg-blue-200 transition-colors font-semibold"
              >
                VIEW BOM DETAILS
              </button>
            </div>
          </div>

          <div className="border-t border-gray-200 px-6 py-4 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <LeadDetailsModal
        project={project}
        isOpen={showLeadModal}
        onClose={() => setShowLeadModal(false)}
      />
      <CustomerDetailsModal
        project={project}
        isOpen={showCustomerModal}
        onClose={() => setShowCustomerModal(false)}
      />
      <BOMDetailsModal
        project={project}
        isOpen={showBOMModal}
        onClose={() => setShowBOMModal(false)}
      />
    </>
  );
};

export default TaskDetailsModal;
