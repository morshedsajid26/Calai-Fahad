import React, { useState } from "react";
import { Trash2, X, Loader2 } from "lucide-react";
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Table from "../../components/Table";
import Breadcrumb from "../../components/Breadcrumb";

const ItemManagement = () => {
  const axiosSecure = useAxiosSecure();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingItem, setDeletingItem] = useState(null);

  const { data: itemsResponse, isLoading } = useQuery({
    queryKey: ['itemManagement'],
    queryFn: async () => {
      const res = await axiosSecure.get('/business-owner/item-management')
      return res.data
    }
  })

  const items = itemsResponse?.data || [];

  const handleDeleteClick = (item) => {
    setDeletingItem(item);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    // Logic to delete the item (mock for now)
    console.log("Deleting item:", deletingItem);
    setIsDeleteModalOpen(false);
    setDeletingItem(null);
  };

  const columns = [
    { key: "category", Title: "Category", width: "20%" },
    { key: "name", Title: "Name", width: "20%" },
    { key: "unit", Title: "Unit", width: "20%" },
    { key: "price", Title: "Price", width: "10%" },
    {
      key: "action",
      Title: "Action",
      width: "15%",
      sortable: false,
      render: (row) => (
        <div className="flex justify-center">
          <button 
            onClick={() => handleDeleteClick(row)}
            className="text-red-500/70 hover:text-red-500 transition-colors p-2 hover:bg-red-500/10 rounded-lg"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  if (isLoading) {
    return (
      <div>
        <Breadcrumb text="You can see your item management" />
        <div className="flex items-center justify-center min-h-[400px]">
          <Loader2 className="animate-spin text-[#2563EB] w-10 h-10" />
        </div>
      </div>
    );
  }

  return (
    <div >
      <Breadcrumb text="You can see your item management" />
      
      <div className="bg-[#191919] border border-[#1A1A1A] rounded-2xl overflow-hidden shadow-sm">
        {items.length > 0 ? (
          <Table
            TableHeads={columns}
            TableRows={items}
            headClass=" border-b border-[#1A1A1A] text-gray-200 whitespace-nowrap last:[&>div]:justify-center"
            tableClass="border-none"
          />
        ) : (
          <div className="p-8 text-center text-gray-400 text-sm">
            No items found in your inventory.
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#0E0E10] border border-gray-800 rounded-[20px] w-full max-w-[500px] p-8 relative shadow-2xl">
            <button 
              onClick={() => setIsDeleteModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-white text-xl font-bold mb-3 text-center">Are you absolutely sure?</h2>
            <p className="text-gray-400 text-[14px] leading-relaxed mb-10 text-center px-4">
              This action cannot be undone. This will permanently delete the item <span className="text-white font-semibold">{deletingItem?.name}</span> and remove it from your inventory.
            </p>

            <div className="flex items-center justify-center gap-5">
              <button 
                onClick={() => setIsDeleteModalOpen(false)}
                className="bg-white text-black font-semibold px-10 py-2.5 rounded-full hover:bg-gray-200 transition-colors text-sm cursor-pointer"
              >
                Cancel
              </button>
              <button 
                onClick={handleConfirmDelete}
                className="bg-[#ef4444] text-white px-10 py-2.5 rounded-full font-semibold hover:bg-red-600 transition-colors text-sm cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemManagement;
