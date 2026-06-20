import React from 'react';
import { useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Table from '../../components/Table';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ViewTenant = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: tenantResponse, isLoading, isError, error } = useQuery({
    queryKey: ['tenant', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/system-owner/tenants/${id}`);
      return res.data;
    }
  });

  const tenant = tenantResponse?.data;
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20 text-white">
        Loading...
      </div>
    );
  }

  if (isError || !tenant) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-red-500">
        <h2 className="text-2xl font-bold mb-2">Tenant not found</h2>
        <p>{error?.response?.data?.message || error?.message || 'Failed to fetch tenant'}</p>
      </div>
    );
  }

  const billingData = tenant.billing_history || [];

  const columns = [
    {
      key: "date",
      Title: "Date",
      width: "20%",
      sortable: true,
      render: (row) => <div className="text-left text-gray-200">{row.date}</div>
    },
    {
      key: "plan",
      Title: "Plan",
      width: "20%",
      sortable: true,
      render: (row) => <div className="text-left text-gray-200">{row.plan}</div>
    },
    {
      key: "invoice",
      Title: "Invoice",
      width: "20%",
      sortable: true,
      render: (row) => <div className="text-left text-gray-200">{row.invoice}</div>
    },
    {
      key: "amount",
      Title: "Amount",
      width: "20%",
      sortable: true,
      render: (row) => <div className="text-left text-gray-200">{row.amount}</div>
    },
    {
      key: "status",
      Title: "Status",
      width: "20%",
      sortable: true,
      render: (row) => (
        <div className="text-left">
          <span className="w-[85px] inline-block text-center px-2 py-1 text-[11px] font-medium text-white rounded-[4px] bg-[#4285F4]">
            {row.status}
          </span>
        </div>
      )
    },
  ];

  const statusLower = tenant.status?.toLowerCase();
  let statusBgClass = "bg-[#7A8293]";
  if (statusLower === "active") statusBgClass = "bg-[#4285F4]";
  else if (statusLower === "suspended") statusBgClass = "bg-[#EA4335]";

  const joinedDate = tenant.joined_date ? new Date(tenant.joined_date).toLocaleDateString('en-GB') : 'N/A';

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="space-y-4">
          <h1 className="text-white text-3xl font-bold">{tenant.name || 'Unknown Name'}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
            {tenant.email && (
              <div className="flex items-center gap-1.5">
                <Icon icon="lucide:mail" className="text-lg text-gray-500" />
                <span>{tenant.email}</span>
              </div>
            )}
            {tenant.phone && (
              <div className="flex items-center gap-1.5">
                <Icon icon="lucide:phone" className="text-lg text-gray-500" />
                <span>{tenant.phone}</span>
              </div>
            )}
            {tenant.business_type && (
              <div className="flex items-center gap-1.5">
                <Icon icon="lucide:briefcase" className="text-lg text-gray-500" />
                <span className="capitalize">{tenant.business_type}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Icon icon="lucide:calendar" className="text-lg text-gray-500" />
              <span>Joined {joinedDate}</span>
            </div>
          </div>
        </div>

        <div>
          <span className={`inline-block px-5 py-2 text-sm font-semibold rounded-full text-white capitalize ${statusBgClass}`}>
            {tenant.status || 'Unknown'}
          </span>
        </div>
      </div>

      {/* Billing History Section */}
      <div className="space-y-4">
        <h2 className="text-white text-xl font-semibold">Billing History</h2>
        <div className="bg-[#191919] rounded-2xl border border-gray-800/50 overflow-hidden w-full">
          <Table 
            TableHeads={columns} 
            TableRows={billingData} 
            headClass="[&>div]:justify-start border-none text-left whitespace-nowrap" 
            tableClass="border-none table-fixed min-w-[800px]" 
          />
          {billingData.length === 0 && (
            <div className="text-center py-12 text-gray-500 flex flex-col items-center justify-center gap-3">
              <Icon icon="lucide:receipt" className="text-4xl text-gray-600" />
              <p>No billing history available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewTenant;