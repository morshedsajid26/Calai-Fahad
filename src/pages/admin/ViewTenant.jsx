import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Table from '../../components/Table';
import Dropdown from '../../components/Dropdown';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const ViewTenant = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const [activeTab, setActiveTab] = useState('agents');

  const [monthOptions] = useState(() => {
    const months = [];
    for (let i = 0; i < 12; i++) {
      const d = new Date();
      d.setMonth(d.getMonth() - i);
      months.push(d.toLocaleString('default', { month: 'short', year: 'numeric' }));
    }
    return months;
  });
  const [selectedMonth, setSelectedMonth] = useState(monthOptions[0]);

  const { data: tenantResponse, isLoading, isError, error } = useQuery({
    queryKey: ['tenant', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/system-owner/tenants/${id}`);
      return res.data;
    }
  });

  const { data: agentsResponse, isLoading: isAgentsLoading } = useQuery({
    queryKey: ['tenantAgents', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/system-owner/individual-tenant/${id}/agents`);
      return res.data;
    }
  });

  const { data: billingResponse, isLoading: isBillingLoading } = useQuery({
    queryKey: ['tenantBilling', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/system-owner/individual-tenant/${id}/billing`);
      return res.data;
    }
  });

  const { data: callsResponse, isLoading: isCallsLoading } = useQuery({
    queryKey: ['tenantCalls', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/system-owner/individual-tenant/${id}/calls`);
      return res.data;
    }
  });

  const { data: ordersResponse, isLoading: isOrdersLoading } = useQuery({
    queryKey: ['tenantOrders', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/system-owner/individual-tenant/${id}/orders`);
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

  const billingData = billingResponse?.data || tenant.billing_history || [];
  const agentsData = agentsResponse?.data || tenant.agents || [];
  const callsData = callsResponse?.data || tenant.calls || tenant.callSummaries || [];
  const ordersData = ordersResponse?.data || tenant.orders || [];

  const usedMinutes = tenant.usage?.used !== undefined ? tenant.usage.used : 0;
  const remainingMinutes = tenant.usage?.remaining !== undefined ? tenant.usage.remaining : 0;

  // If total is 0 (even with explicit 0 from API), the pie chart won't render. 
  // We can force it to render an empty state pie if we want, but since we used fallbacks above, it should show.
  const pieData = [
    { name: 'Used', value: usedMinutes, color: '#4285F4' },
    { name: 'Remaining', value: remainingMinutes, color: '#374151' },
  ];

  const billingColumns = [
    {
      key: "date",
      Title: "Date",
      width: "20%",
      sortable: true,
      render: (row) => <div className="text-left text-gray-200">{row.date ? new Date(row.date).toLocaleDateString('en-GB') : 'N/A'}</div>
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
      render: (row) => <div className="text-left text-gray-200">{row.invoice_no || row.invoice || 'N/A'}</div>
    },
    {
      key: "amount",
      Title: "Amount",
      width: "20%",
      sortable: true,
      render: (row) => <div className="text-left text-gray-200">£{row.amount}</div>
    },
    {
      key: "status",
      Title: "Status",
      width: "20%",
      sortable: true,
      render: (row) => (
        <div className="text-left">
          <span className="w-[85px] inline-block text-center px-2 py-1 text-[11px] font-medium text-white rounded-[4px] bg-[#4285F4] capitalize">
            {row.status}
          </span>
        </div>
      )
    },
  ];

  const agentColumns = [
    { key: "name", Title: "Agent Name", width: "25%", sortable: true, render: (row) => <div className="text-left text-gray-200">{row.name || 'Unknown'}</div> },
    { key: "vapi_id", Title: "Vapi Assistant ID", width: "35%", sortable: true, render: (row) => <div className="text-left text-gray-400">{row.vapi_agent_id || row.vapi_assistant_id || row.id || 'N/A'}</div> },
    { key: "status", Title: "Status", width: "20%", sortable: true, render: (row) => (
      <div className="text-left">
        <span className="w-[85px] inline-block text-center px-2 py-1 text-[11px] font-medium text-white rounded-[4px] bg-[#4285F4] capitalize">
          {row.status || 'Active'}
        </span>
      </div>
    )},
    { key: "created", Title: "Created Date", width: "20%", sortable: true, render: (row) => <div className="text-left text-gray-200">{(row.created_date && row.created_date !== 'N/A') ? new Date(row.created_date).toLocaleDateString('en-GB') : (row.created_at ? new Date(row.created_at).toLocaleDateString('en-GB') : 'N/A')}</div> },
  ];

  const callColumns = [
    { key: 'callerId', Title: 'Caller ID', width: '25%', render: (row) => <div className="text-left text-gray-200">{row.callerId || row.caller_id || 'N/A'}</div> },
    { key: 'duration', Title: 'Call Duration', width: '25%', render: (row) => <div className="text-left text-gray-200">{row.duration || 'N/A'}</div> },
    { key: 'time', Title: 'Time', width: '25%', render: (row) => <div className="text-left text-gray-200">{row.time || 'N/A'}</div> },
    { key: 'date', Title: 'Date', width: '25%', render: (row) => <div className="text-left text-gray-200">{(row.date && row.date !== 'N/A') ? new Date(row.date).toLocaleDateString('en-GB') : (row.created_at ? new Date(row.created_at).toLocaleDateString('en-GB') : 'N/A')}</div> },
  ];

  const orderColumns = [
    { key: 'orderId', Title: 'Order ID', width: '25%', render: (row) => <div className="text-left text-gray-200">{row.orderId || row.id || 'N/A'}</div> },
    { key: 'amount', Title: 'Amount', width: '25%', render: (row) => <div className="text-left text-gray-200">{row.amount ? `£${row.amount}` : 'N/A'}</div> },
    { key: 'status', Title: 'Status', width: '25%', render: (row) => (
      <div className="text-left">
        <span className="w-[85px] inline-block text-center px-2 py-1 text-[11px] font-medium text-white rounded-[4px] bg-[#4285F4] capitalize">
          {row.status || 'N/A'}
        </span>
      </div>
    )},
    { key: 'date', Title: 'Date', width: '25%', render: (row) => <div className="text-left text-gray-200">{(row.date && row.date !== 'N/A') ? new Date(row.date).toLocaleDateString('en-GB') : (row.created_at ? new Date(row.created_at).toLocaleDateString('en-GB') : 'N/A')}</div> },
  ];

  const statusLower = tenant.status?.toLowerCase();
  let statusBgClass = "bg-[#7A8293]";
  if (statusLower === "active") statusBgClass = "bg-[#4285F4]";
  else if (statusLower === "suspended") statusBgClass = "bg-[#EA4335]";

  const joinedDate = tenant.joined_date ? new Date(tenant.joined_date).toLocaleDateString('en-GB') : 'N/A';

  return (
    <div className="space-y-8">
      {/* Top Cards Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tenant Profile Card */}
        <div className="bg-[#191919] rounded-2xl p-6 relative shadow-sm border border-gray-800/50">
          <div className="absolute top-6 right-6">
            <span className={`px-4 py-1 text-xs font-bold rounded-full uppercase tracking-wider ${statusLower === 'active' ? 'bg-[#4285F4]/20 text-[#4285F4]' : 'bg-gray-800 text-gray-400'}`}>
              {tenant.status || 'Unknown'}
            </span>
          </div>
          
          {tenant.image || tenant.profile_picture ? (
            <img 
              src={tenant.image || tenant.profile_picture} 
              alt={tenant.name} 
              className="w-16 h-16 rounded-2xl object-cover mb-4 shadow-md border border-gray-800"
            />
          ) : (
            <div className="w-16 h-16 rounded-2xl bg-[#4285F4] flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-md">
              {tenant.name ? tenant.name.charAt(0).toUpperCase() : 'T'}
            </div>
          )}
          
          <h2 className="text-white text-2xl font-bold mb-1">{tenant.name || 'Unknown Name'}</h2>
          <p className="text-gray-400 text-sm mb-6">Tenant Profile</p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <Icon icon="lucide:mail" className="text-lg text-[#4285F4]" />
              <span>{tenant.email || 'N/A'}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <Icon icon="lucide:phone" className="text-lg text-[#4285F4]" />
              <span>{tenant.phone || 'N/A'}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <Icon icon="lucide:calendar" className="text-lg text-[#4285F4]" />
              <span>Joined {joinedDate}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <Icon icon="lucide:bot" className="text-lg text-[#4285F4]" />
              <span>{agentsData.length} Active Agents</span>
            </div>
          </div>
        </div>

        {/* Usage Overview Card */}
        <div className="bg-[#191919] rounded-2xl p-6 shadow-sm border border-gray-800/50 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h2 className="text-white text-lg font-bold">Usage Overview</h2>
              <p className="text-gray-400 text-sm">Track monthly minute usage</p>
            </div>
            <div className="w-[140px]">
              <Dropdown
                options={monthOptions}
                value={selectedMonth}
                onSelect={(val) => setSelectedMonth(val)}
                inputClass="!bg-[#111111] !border !border-gray-800 !text-gray-300 !rounded-lg !py-2 !px-3 !font-medium !text-sm !cursor-pointer hover:!border-gray-700 transition-colors"
                optionClass="!bg-[#111111] !text-gray-300 !border !border-gray-800 !rounded-lg !shadow-xl !mt-1"
                icon="!text-gray-400 !right-2"
              />
            </div>
          </div>

          <div className="flex-1 bg-[#111111] rounded-xl border border-gray-800/50 mt-4 relative flex items-center justify-center py-10 min-h-[280px]">
            <div className="flex w-full items-center justify-center gap-2 sm:gap-6 px-4">
              <div className="text-xs sm:text-sm font-medium text-gray-300 text-right flex-1">
                Used: {usedMinutes} min
              </div>
              
              <div className="w-[140px] sm:w-[180px] aspect-square shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius="0%"
                      outerRadius="100%"
                      dataKey="value"
                      stroke="none"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="text-xs sm:text-sm font-medium text-gray-300 text-left flex-1">
                Remaining: {remainingMinutes} min
              </div>
            </div>

            <div className="absolute bottom-4 left-0 w-full flex justify-center gap-6">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-3 h-3 rounded-sm bg-[#4285F4]"></div>
                Used
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-3 h-3 rounded-sm bg-[#374151]"></div>
                Remaining
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-[#191919] rounded-2xl border border-gray-800/50 overflow-hidden w-full">
        <div className="flex border-b border-gray-800/50">
          <button 
            onClick={() => setActiveTab('agents')}
            className={`px-6 py-4 text-sm font-medium transition-colors ${activeTab === 'agents' ? 'text-white border-b-2 border-[#4285F4]' : 'text-gray-400 hover:text-gray-200'}`}
          >
            AI Agents
          </button>
          <button 
            onClick={() => setActiveTab('calls')}
            className={`px-6 py-4 text-sm font-medium transition-colors ${activeTab === 'calls' ? 'text-white border-b-2 border-[#4285F4]' : 'text-gray-400 hover:text-gray-200'}`}
          >
            Calls
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`px-6 py-4 text-sm font-medium transition-colors ${activeTab === 'orders' ? 'text-white border-b-2 border-[#4285F4]' : 'text-gray-400 hover:text-gray-200'}`}
          >
            Orders
          </button>
          <button 
            onClick={() => setActiveTab('billing')}
            className={`px-6 py-4 text-sm font-medium transition-colors ${activeTab === 'billing' ? 'text-white border-b-2 border-[#4285F4]' : 'text-gray-400 hover:text-gray-200'}`}
          >
            Billing History
          </button>
        </div>

        <div className="p-4">
          {activeTab === 'agents' && (
            <Table 
              TableHeads={agentColumns} 
              TableRows={agentsData} 
              headClass="[&>div]:justify-start border-none text-left whitespace-nowrap" 
              tableClass="border-none table-fixed min-w-[800px]" 
              emptyState={
                <div className="text-center py-12 text-gray-500 flex flex-col items-center justify-center gap-3">
                  <Icon icon="lucide:bot" className="text-4xl text-gray-600" />
                  <p>No AI agents found.</p>
                </div>
              }
            />
          )}

          {activeTab === 'calls' && (
            <Table 
              TableHeads={callColumns} 
              TableRows={callsData} 
              headClass="[&>div]:justify-start border-none text-left whitespace-nowrap" 
              tableClass="border-none table-fixed min-w-[800px]" 
              emptyState={
                <div className="text-center py-12 text-gray-500 flex flex-col items-center justify-center gap-3">
                  <Icon icon="lucide:phone" className="text-4xl text-gray-600" />
                  <p>No call history available.</p>
                </div>
              }
            />
          )}

          {activeTab === 'orders' && (
            <Table 
              TableHeads={orderColumns} 
              TableRows={ordersData} 
              headClass="[&>div]:justify-start border-none text-left whitespace-nowrap" 
              tableClass="border-none table-fixed min-w-[800px]" 
              emptyState={
                <div className="text-center py-12 text-gray-500 flex flex-col items-center justify-center gap-3">
                  <Icon icon="lucide:shopping-cart" className="text-4xl text-gray-600" />
                  <p>No order history available.</p>
                </div>
              }
            />
          )}

          {activeTab === 'billing' && (
            <Table 
              TableHeads={billingColumns} 
              TableRows={billingData} 
              headClass="[&>div]:justify-start border-none text-left whitespace-nowrap" 
              tableClass="border-none table-fixed min-w-[800px]" 
              emptyState={
                <div className="text-center py-12 text-gray-500 flex flex-col items-center justify-center gap-3">
                  <Icon icon="lucide:receipt" className="text-4xl text-gray-600" />
                  <p>No billing history available.</p>
                </div>
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewTenant;