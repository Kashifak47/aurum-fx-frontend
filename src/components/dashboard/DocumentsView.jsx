import React, { useState } from 'react';
import { FileText, Download, Calendar, Filter } from 'lucide-react';
import Card from '../common/Card';

const DocumentsView = () => {
  const [activeFilter, setActiveFilter] = useState('All Documents');
  const [selectedYear, setSelectedYear] = useState('2026');

  const allDocuments = [
    { id: 1, name: 'Q3 2026 Performance Statement', type: 'PDF', size: '2.4 MB', date: 'Oct 01, 2026', category: 'Statements', year: '2026' },
    { id: 2, name: 'August 2026 Trade Ledger', type: 'CSV', size: '840 KB', date: 'Sep 01, 2026', category: 'Statements', year: '2026' },
    { id: 3, name: 'Aurum FX Master Services Agreement', type: 'PDF', size: '1.1 MB', date: 'Jan 15, 2026', category: 'Legal', year: '2026' },
    { id: 4, name: '2025 Annual Tax Statement (1099-B)', type: 'PDF', size: '3.2 MB', date: 'Feb 10, 2026', category: 'Tax', year: '2026' },
    { id: 5, name: 'Q4 2025 Performance Statement', type: 'PDF', size: '2.1 MB', date: 'Jan 05, 2026', category: 'Statements', year: '2025' },
    { id: 6, name: 'Risk Disclosure Agreement', type: 'PDF', size: '800 KB', date: 'Dec 12, 2025', category: 'Legal', year: '2025' },
  ];

  const filteredDocs = allDocuments.filter(doc => {
    const matchesCategory = activeFilter === 'All Documents' || doc.category === activeFilter;
    const matchesYear = doc.year === selectedYear;
    return matchesCategory && matchesYear;
  });

  return (
    <div className="space-y-5 sm:space-y-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Document Vault</h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">Secure access to your account statements, tax forms, and legal agreements.</p>
        </div>
        <button className="bg-[#131A2F] border border-[#1E293B] hover:bg-[#1E293B] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
          <Download size={16} className="text-[#00B5E2]" />
          Download All ({selectedYear})
        </button>
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="p-4 border-b border-[#1E293B] flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#131A2F]/50 gap-4">
          <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-1 sm:pb-0 w-full sm:w-auto">
            {['All Documents', 'Statements', 'Tax', 'Legal'].map(tab => (
              <button 
                key={tab} 
                onClick={() => setActiveFilter(tab)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${activeFilter === tab ? 'bg-[#00B5E2] text-white shadow-lg shadow-[#00B5E2]/20' : 'text-[#94A3B8] hover:text-white hover:bg-[#1E293B]'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="relative shrink-0 w-full sm:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar size={14} className="text-[#64748B]" />
            </div>
            <select 
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full sm:w-32 bg-[#0B1221] border border-[#1E293B] text-white rounded-lg pl-9 pr-3 py-1.5 text-xs focus:outline-none focus:border-[#00B5E2] appearance-none cursor-pointer"
            >
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-sm text-left min-w-[600px]">
            <thead className="text-xs text-[#64748B] border-b border-[#1E293B]">
              <tr>
                <th className="px-6 py-4 font-medium">Document Name</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Date Uploaded</th>
                <th className="px-6 py-4 font-medium">Format</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E293B]">
              {filteredDocs.length > 0 ? filteredDocs.map((doc) => (
                <tr key={doc.id} className="hover:bg-[#131A2F]/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <FileText size={18} className={doc.type === 'PDF' ? 'text-[#EF4444]' : 'text-[#10B981]'} />
                      <span className="font-medium text-[#E2E8F0]">{doc.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[#94A3B8] text-xs">
                    <span className="bg-[#131A2F] border border-[#1E293B] px-2 py-1 rounded">{doc.category}</span>
                  </td>
                  <td className="px-6 py-4 text-[#94A3B8] text-xs">{doc.date}</td>
                  <td className="px-6 py-4 text-[#94A3B8] font-mono text-[10px]">{doc.type} • {doc.size}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-[#00B5E2] hover:text-[#00D1FF] flex items-center gap-1.5 ml-auto text-xs font-medium transition-colors">
                      <Download size={14} /> Download
                    </button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-[#64748B] text-sm">
                    <Filter size={24} className="mx-auto mb-3 opacity-20" />
                    No documents found for this filter and year.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default DocumentsView;
