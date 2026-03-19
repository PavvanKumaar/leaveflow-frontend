import React from 'react';

const RequestDetailsModal = ({ req, isOpen, onClose, onApprove, onReject, onReturn }) => {
  if (!isOpen || !req) return null;

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const calculateDays = (start, end) => {
    const diffTime = Math.abs(new Date(end) - new Date(start));
    return Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'PENDING_MANAGER': return 'text-yellow-600';
      case 'PENDING_HR': return 'text-blue-600';
      case 'APPROVED': return 'text-green-600';
      case 'REJECTED': return 'text-red-600';
      case 'RETURNED': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
      <div className="absolute inset-0 backdrop-blur-lg bg-black/30" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative z-10">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
          <h2 className="text-2xl font-bold text-gray-900">Leave Request details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-gray-200">
            <div>
              <p className="text-gray-600 text-sm">Employee Name</p>
              <p className="text-lg font-semibold text-gray-900">
                {req.employee?.name || req.employee_id || 'Unknown'}
              </p>
            </div>
            <span className={`text-lg font-semibold ${getStatusColor(req.status)}`}>
              {req.status?.replace(/_/g, ' ')}
            </span>
          </div>

          {/* Leave Type and Duration */}
          <div className="border-2 border-gray-300 rounded-lg p-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600 text-sm font-medium">Leave Type</p>
              <p className="text-gray-700 text-lg">{req.type}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">Duration</p>
              <p className="text-gray-700">
                {formatDate(req.start_date)} to {formatDate(req.end_date)}
              </p>
              <p className="text-gray-500 text-sm mt-1">
                {calculateDays(req.start_date, req.end_date)} days
              </p>
            </div>
          </div>

          {/* Reason */}
          <div>
            <p className="text-gray-700 font-semibold mb-2">Reason</p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-800">{req.reason || 'No reason provided'}</p>
            </div>
          </div>

          {/* Supported Documents */}
          <div>
            <p className="text-gray-700 font-semibold mb-2">Supported Documents ({req.documents?.length || 0})</p>
            <div className="bg-gray-100 p-4 rounded-lg min-h-[80px] flex items-center justify-center">
              {req.documents && req.documents.length > 0 ? (
                <div className="space-y-2">
                  {req.documents.map((doc, idx) => (
                    <div key={idx} className="text-blue-600 hover:underline cursor-pointer">
                      📄 {doc.filename || `Document ${idx + 1}`}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No documents attached</p>
              )}
            </div>
          </div>

          {/* Comments History / Approval Events */}
          <div>
            <p className="text-gray-700 font-semibold mb-2">Comments History</p>
            <div className="bg-gray-100 p-4 rounded-lg min-h-[100px]">
              {req.approval_events && req.approval_events.length > 0 ? (
                <div className="space-y-3">
                  {req.approval_events.map((event, idx) => (
                    <div key={idx} className="text-sm border-b border-gray-300 pb-2 last:border-b-0">
                      <p className="font-semibold text-gray-700">{event.decision}</p>
                      {event.comment && <p className="text-gray-600">{event.comment}</p>}
                      <p className="text-gray-500 text-xs mt-1">
                        {new Date(event.created_at).toLocaleDateString('en-GB')}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No comments yet</p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button
              onClick={() => onApprove(req.id)}
              className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
            >
              Approve
            </button>
            <button
              onClick={() => onReject(req.id)}
              className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors"
            >
              Reject
            </button>
            <button
              onClick={() => onReturn(req.id)}
              className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg transition-colors"
            >
              Return for fixes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDetailsModal;
